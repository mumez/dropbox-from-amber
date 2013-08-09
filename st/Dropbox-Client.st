Smalltalk current createPackage: 'Dropbox-Client'!
Object subclass: #DrAnnouncement
	instanceVariableNames: 'kind detail'
	package: 'Dropbox-Client'!

!DrAnnouncement methodsFor: 'accessing'!

detail
	^detail
!

detail: aSymbol
	detail := aSymbol
!

kind
	^kind
!

kind: aSymbol
	kind := aSymbol
! !

!DrAnnouncement class methodsFor: 'instance creation'!

apiError
	^self kind: #apiError
!

client
	^self kind: #client
!

kind: aSymbol
	^self kind: aSymbol detail: nil
!

kind: aSymbol detail: detail
	^self new kind: aSymbol; detail: detail
! !

Object subclass: #DrDrivers
	instanceVariableNames: ''
	package: 'Dropbox-Client'!

!DrDrivers class methodsFor: 'instance creation'!

chrome: args
	^ self named: 'Cordova' arguments: args
!

cordova: args
	^ self named: 'Cordova' arguments: args
!

named: className
	<
	return Dropbox.Drivers[className]
	>
!

named: className arguments: args
	<
	return new Dropbox.Drivers[className](args)
	>
!

nodeServer: args
	^ self named: 'NodeServer' arguments: args
!

popup: args
	^ self named: 'Popup' arguments: args
!

redirect: args
	^ self named: 'Redirect' arguments: args
! !

JSObjectProxy subclass: #DrProxy
	instanceVariableNames: 'className'
	package: 'Dropbox-Client'!

!DrProxy methodsFor: 'accessing'!

className
	^className
!

className: aString
	className := aString
!

deferred
	<return $.Deferred()>
! !

!DrProxy methodsFor: 'debugging'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self jsObject.
	variables at: '#className' put: self className.
	anInspector setLabel: self printString.
	self addObjectVariablesTo: variables.
	anInspector setVariables: variables
! !

!DrProxy methodsFor: 'events'!

onClose: eventBlock
	self on: 'close' do: eventBlock
!

onError: eventBlock
	self on: 'error' do: eventBlock
!

onOpen: eventBlock
	self on: 'open' do: eventBlock
! !

!DrProxy methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'a ', self className asString.
	self isNil ifTrue: [aStream nextPutAll: ' isNil !!']
! !

!DrProxy methodsFor: 'testing'!

isNil
	^self jsObject isNil
! !

!DrProxy class methodsFor: 'instance creation'!

classNamed: className protoProxy: protoProxy
	| inst |
	inst := self basicNew.
	inst className: className.
	protoProxy ifNotNil: [inst jsObject: protoProxy jsObject].
	inst initialize.
	^inst
!

new
	^self protoProxy: self protoNew
!

protoNew
	self subclassResponsibility.
	^nil
!

protoProxy: protoProxy
	^self classNamed: self asString protoProxy: protoProxy
! !

DrProxy subclass: #DrApiError
	instanceVariableNames: ''
	package: 'Dropbox-Client'!

!DrApiError methodsFor: 'accessing'!

method
	<return self['@jsObject']['method']>
!

method: arg
	<return self['@jsObject']['method']=arg>
!

response
	<return self['@jsObject']['response']>
!

response: arg
	<return self['@jsObject']['response']=arg>
!

responseText
	<return self['@jsObject']['responseText']>
!

responseText: arg
	<return self['@jsObject']['responseText']=arg>
!

status
	<return self['@jsObject']['status']>
!

status: arg
	<return self['@jsObject']['status']=arg>
!

url
	<return self['@jsObject']['url']>
!

url: arg
	<return self['@jsObject']['url']=arg>
! !

!DrApiError methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'Dropbox.ApiError'.
	aStream nextPutAll: ':', self status asString, '/', self responseText asString
! !

!DrApiError methodsFor: 'testing'!

isInvalidMethod
	^ self status = self class invalidMethod
!

isInvalidParam
	^ self status = self class invalidParam
!

isInvalidToken
	^ self status = self class invalidToken
!

isNetworkError
	^ self status = self class networkError
!

isNotFound
	^ self status = self class notFound
!

isOauthError
	^ self status = self class oauthError
!

isOverQuota
	^ self status = self class overQuota
!

isRateLimited
	^ self status = self class rateLimited
! !

!DrApiError class methodsFor: 'constants'!

invalidMethod
	<return Dropbox.ApiError.INVALID_METHOD >
!

invalidParam
	<return Dropbox.ApiError.INVALID_PARAM>
!

invalidToken
	<return Dropbox.ApiError.INVALID_TOKEN>
!

networkError
	<return Dropbox.ApiError.NETWORK_ERROR>
!

notFound
	<return Dropbox.ApiError.NOT_FOUND>
!

oauthError
	<return Dropbox.ApiError.OAUTH_ERROR>
!

overQuota
	<return Dropbox.ApiError.OVER_QUOTA>
!

rateLimited
	<return Dropbox.ApiError.RATE_LIMITED>
! !

DrProxy subclass: #DrClient
	instanceVariableNames: 'announcer'
	package: 'Dropbox-Client'!
!DrClient commentStamp!
DrClient defaultApiKey: 'your API key'.

dropboxCli := DrClient default.
dropboxCli authenticateThen: [
  dropboxCli writeFile: 'hello.txt' data: 'world'.
].!

!DrClient methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [announcer := Announcer new]
!

authState
	<return self['@jsObject']['authState']>
!

authState: arg
	<return self['@jsObject']['authState']=arg>
!

onAuthStateChange
	<return self['@jsObject']['onAuthStateChange']>
!

onAuthStateChange: arg
	<return self['@jsObject']['onAuthStateChange']=arg>
!

onError
	<return self['@jsObject']['onError']>
!

onError: arg
	<return self['@jsObject']['onError']=arg>
!

onXhr
	<return self['@jsObject']['onXhr']>
!

onXhr: arg
	<return self['@jsObject']['onXhr']=arg>
! !

!DrClient methodsFor: 'actions'!

appHash
	^ self forwardMessage: 'appHash' withArguments: #()
!

copyFrom: from to: to
	^self copyFrom: from to: to callback: [:apiError :stat |
		self ifError: apiError do: [:err | self onFailed: err] else: [].
	]
!

copyFrom: from to: to callback: callback
	^ self forwardMessage: 'copy' withArguments: {from. to. callback}
!

credentials
	^ self forwardMessage: 'credentials' withArguments: #()
!

dropboxUid
	^ self forwardMessage: 'dropboxUid' withArguments: #()
!

findByName: path pattern: namePattern options: options callback: callback
	^ self forwardMessage: 'findByName' withArguments: {path. namePattern. options. callback}
!

findByName: path pattern: namePattern options: options then: nextBlock
	^self findByName: path pattern: namePattern callback: [:apiError :stats |
		self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {stats}].
	]
!

findByName: path pattern: namePattern then: nextBlock
	^self findByName: path pattern: namePattern options: nil then: nextBlock
!

getUserInfo: options callback: callback
	^ self forwardMessage: 'getUserInfo' withArguments: {options. callback}
!

getUserInfo: options then: nextBlock
	^ self getUserInfo: options callback: [:apiError :userInfo :jsonObject |
		self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {userInfo. jsonObject}].
	].
!

getUserInfoThen: normalBlock
	^ self getUserInfo: nil then: normalBlock
!

mkDir: path
	^self mkDir: path callback: [:apiError :stat |
		self ifError: apiError do: [:err | self onFailed: err] else: [].
	]
!

mkDir: path callback: callback
	^ self forwardMessage: 'mkdir' withArguments: {path. callback}
!

moveFrom: from to: to
	^self moveFrom: from to: to callback: [:apiError :stat |
		self ifError: apiError do: [:err | self onFailed: err] else: [].
	]
!

moveFrom: from to: to callback: callback
	^ self forwardMessage: 'move' withArguments: {from. to. callback}
!

readDir: path options: options callback: callback
	^ self forwardMessage: 'readdir' withArguments: {path. options. callback}
!

readDir: path options: options then: nextBlock
	^self readDir: path options: options callback: [:apiError :fileNames :stat :stats |
		self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {fileNames. stat. stats}].
	]
!

readDir: path then: nextBlock
	^self readDir: path options: nil then: nextBlock
!

readFile: path options: options callback: callback
	^ self forwardMessage: 'readFile' withArguments: {path. options. callback}
!

readFile: path options: options then: nextBlock
	^self readFile: path options: options then: nextBlock failed: []
!

readFile: path options: options then: nextBlock failed: failedBlock
	^self readFile: path options: options callback:  [:apiError :data :stat :rangeInfo |
		self ifError: apiError do: [:err | self onFailed: err. failedBlock value: err] else: [nextBlock valueWithPossibleArguments: {data. stat. rangeInfo}].
	]
!

readFile: path then: nextBlock
	^self readFile: path options: nil then: nextBlock
!

readFile: path then: nextBlock failed: failedBlock
	^self readFile: path options: nil then: nextBlock failed: failedBlock
!

remove: path
	^self remove: path callback: [:apiError :stat |
		self ifError: apiError do: [:err | self onFailed: err] else: [].
	]
!

remove: path callback: callback
	^ self forwardMessage: 'remove' withArguments: {path. callback}
!

reset
	^ self forwardMessage: 'reset' withArguments: #()
!

signOut
	^self signOut: [:apiError |
		self ifError: apiError do: [:err | self onFailed: err] else: [].
	]
!

signOut: callback
	^ self forwardMessage: 'signOut' withArguments: {callback}
!

stat: path options: options callback: callback
	^ self forwardMessage: 'stat' withArguments: {path. options. callback}
!

stat: path options: options then: nextBlock
	^self stat: path callback: [:apiError :stat :stats |
		self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {stat. stats}].
	]
!

stat: path then: nextBlock
	^self stat: path options: nil then: nextBlock
!

writeFile: path data: data
	^self writeFile: path data: data options: nil
!

writeFile: path data: data options: options
	^self writeFile: path data: data options: options callback: [:apiError :stat |
		self ifError: apiError do: [:err | self onFailed: err] else: [].
	]
!

writeFile: path data: data options: options callback: callback
	^ self forwardMessage: 'writeFile' withArguments: {path. data. options. callback}
! !

!DrClient methodsFor: 'authentication'!

authDriver: authDriver
	^ self forwardMessage: 'authDriver' withArguments: {authDriver}
!

authenticate
	^ self authenticateThen: []
!

authenticate: options callback: callback

	^ self forwardMessage: 'authenticate' withArguments: {options. callback}
!

authenticateThen: nextBlock
	^ self authenticate: self defaultAuthOptions callback: [:err :cli |
		err ifNil: [self onAuthenticated. nextBlock value] ifNotNil: [self onAuthenticatationFailed: (self wrapError: err)].
	]
!

isAuthenticated
	^ self forwardMessage: 'isAuthenticated' withArguments: #()
! !

!DrClient methodsFor: 'defaults'!

defaultAuthDriverOptions
	^ #{'rememberUser'->true}.
!

defaultAuthOptions
	^ #{}.
! !

!DrClient methodsFor: 'events'!

onAuthenticatationFailed: anError
	console log: '##DrClient auth failed: ', anError asString.
	
	self announcer announce: (DrAnnouncement apiError detail: anError)
!

onAuthenticated
	"override if you like"
	
	self announcer announce: (DrAnnouncement client detail: #authenticated)
!

onFailed: anError
	console log: '##DrClient failed: ', anError asString.
	
	self announcer announce: (DrAnnouncement apiError detail: anError)
! !

!DrClient methodsFor: 'initialization'!

initAuthDriver
	self initAuthDriver: self class defaultAuthDriverType
!

initAuthDriver: driverSymbol
	self initAuthDriver: driverSymbol options: self defaultAuthDriverOptions
!

initAuthDriver: driverSymbol options: optionsDic
	| driver |
	driver := DrDrivers perform: driverSymbol, ':' withArguments: {optionsDic}.
	console log: '##authDriver: ', driverSymbol.
	self authDriver: driver
!

initialize
	super initialize.
	announcer := nil
! !

!DrClient methodsFor: 'private'!

ifError: apiError do: errorBlock else: normalBlock 
		^apiError ifNil: [normalBlock value] ifNotNil: [errorBlock value: (self wrapError: apiError)].
!

wrapError: jsRawError
	^ DrApiError protoProxy: jsRawError
! !

DrClient class instanceVariableNames: 'default defaultApiKey defaultAuthDriverType'!

!DrClient class methodsFor: 'accessing'!

default
	^ default ifNil: [default := self key: self defaultApiKey]
!

default: aDrClient
	default := aDrClient
!

defaultApiKey
	"The default encoded key is for demo. Limited to 100 users"
	
	"You can get your API key from here: https://www.dropbox.com/developers/core"
	"Encode the key by: https://dl-web.dropbox.com/spa/pjlfdak1tmznswp/api_keys.js/public/index.html"
	
	^ defaultApiKey ifNil: [defaultApiKey := 'lT8r2O3iMCA=|ULla/D4WPtfkec3nxbtR+V861w9E+U9+krMlTYrV/A==']
!

defaultApiKey: aString
	console log: '##set api key: ', aString asString.
	defaultApiKey := aString
!

defaultAuthDriverType

	^ defaultAuthDriverType ifNil: [defaultAuthDriverType := 'redirect']
!

defaultAuthDriverType: aString
	console log: '##set auth driver: ', aString asString.
	defaultAuthDriverType := aString
! !

!DrClient class methodsFor: 'class initialization'!

initialize
	default := nil.
! !

!DrClient class methodsFor: 'instance creation'!

key: apiKey
	^self key: apiKey sandbox: true
!

key: apiKey sandbox: aBoolean
	^self options: #{'key'->apiKey. 'sandbox'-> aBoolean}
!

options: optionsDic
	^self protoProxy: (self protoOptions: optionsDic)
!

protoOptions: optionsDic
	<return new Dropbox.Client(optionsDic)>
! !

