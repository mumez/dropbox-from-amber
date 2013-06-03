Smalltalk current createPackage: 'Dropbox-ToDo'!
MobileToDo subclass: #DrToDo
	instanceVariableNames: ''
	package: 'Dropbox-ToDo'!
!DrToDo commentStamp!
DrToDo main!

!DrToDo methodsFor: 'factory'!

storageClass
	^ DrToDoStorage
! !

!DrToDo methodsFor: 'initialization'!

initialize
	super initialize.
	self observeStorage
! !

!DrToDo methodsFor: 'private'!

observeStorage
	self storage announcer on: DrAnnouncement do: [:ann | 
		self updateListPart
	].
	
	self storage client announcer on: DrAnnouncement do: [:ann | 
		ann kind = #apiError ifTrue: [
			self showErrorFrom: ann
		]
	]
!

showErrorFrom: anAnnouncement
	| status |
	status := anAnnouncement detail status.
	
	status = DrApiError invalidToken ifTrue: [^window alert: 'Try authenticatation again'].
	status = DrApiError notFound ifTrue: [^console log: 'File not found: ', anAnnouncement detail responseText].
	status = DrApiError overQuota ifTrue: [^window alert: 'Dropbox is full!!!!'].
	status = DrApiError rateLimited ifTrue: [^window alert: 'Too many updates. Try again later'].
	status = DrApiError networkError ifTrue: [^window alert: 'Network error. Try reconnect'].
	
	window alert: ('Dropbox api error: ', status asString).
! !

MobileToDoStorage subclass: #DrToDoStorage
	instanceVariableNames: 'announcer'
	package: 'Dropbox-ToDo'!

!DrToDoStorage methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [announcer := Announcer new]
!

client
	^ DrClient default
! !

!DrToDoStorage methodsFor: 'actions'!

ensureAuthThen: nextBlock
	self client isAuthenticated ifTrue: [nextBlock value] ifFalse: [
		self client authenticateThen: nextBlock	
	]
! !

!DrToDoStorage methodsFor: 'initialization'!

initClient
	self client initAuthDriver
!

initialize
	super initialize.
	self initClient.
	announcer := nil
! !

!DrToDoStorage methodsFor: 'private'!

loadItems
	self ensureAuthThen: [
		self client readFile: 'MobileToDoList' then: [:jsonStr | | loadedJson |
			jsonStr ifNil: [self initItems; saveItems. ^ items := #()].
			console log: '#loadItems: ', jsonStr.
			loadedJson := JSON parse: jsonStr.
			items := loadedJson collect: [ :each | MobileToDoItem fromDictionary: each].
			self announcer announce: (DrAnnouncement kind: #storage detail: #saveItems)
		]
	]
!

saveItems
	| jsonStr |
	jsonStr := self items asJSONString.
	self client writeFile: 'MobileToDoList' data: jsonStr.
	console log: 'saveItems: ', jsonStr.
	self announcer announce: (DrAnnouncement kind: #storage detail: #saveItems)
! !

