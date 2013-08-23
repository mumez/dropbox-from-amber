Smalltalk current createPackage: 'Dropbox-Datastore'!
DrClient subclass: #DrDsClient
	instanceVariableNames: ''
	package: 'Dropbox-Datastore'!

!DrDsClient methodsFor: 'accessing'!

basicGetDatastoreManager
	^ self forwardMessage: 'getDatastoreManager' withArguments: {}
!

getDatastoreManager
	^DrDsDatastoreManager protoProxy: self basicGetDatastoreManager
! !

!DrDsClient methodsFor: 'actions-defer'!

deferAuthenticateInteractive: aBoolean
	| dfd |
	dfd := self deferred.
	self authenticateInteractive: aBoolean callback: [:err :cli |
		err ifNil: [dfd reject: err] ifNotNil: [dfd resolve: cli]
	].
	^dfd
! !

!DrDsClient methodsFor: 'authentication'!

authenticate
	^ self forwardMessage: 'authenticate' withArguments: #()
!

authenticateInteractive: aBoolean callback: aBlock
	<
	var jso = self['@jsObject'];
	jso.authenticate({interactive:aBoolean}, aBlock);
	>
! !

!DrDsClient class methodsFor: 'instance creation'!

key: appKey
	^self options: #{'key'->appKey}
! !

DrProxy subclass: #DrDsDatastore
	instanceVariableNames: ''
	package: 'Dropbox-Datastore'!

!DrDsDatastore methodsFor: 'accessing'!

recordsChanged
	<return self['@jsObject']['recordsChanged']>
!

syncStatusChanged 
	<return self['@jsObject']['syncStatusChanged']>
! !

!DrDsDatastore methodsFor: 'actions'!

basicGetTable: tableId
	^ self forwardMessage: 'getTable' withArguments: {tableId}
!

close
	^ self forwardMessage: 'close' withArguments: #()
!

getId
	^ self forwardMessage: 'getId' withArguments: #()
!

getSyncStatus
	^ self forwardMessage: 'getSyncStatus' withArguments: #()
!

getTable: tableId
	^ DrDsTable protoProxy: (self basicGetTable: tableId)
!

listTableIds
	^ self forwardMessage: 'listTableIds' withArguments: #()
! !

!DrDsDatastore methodsFor: 'events'!

offRecordsChanged: aBlock
	<
	var o = self['@jsObject'];
	o.recordsChanged.removeListener(aBlock)
	>
!

offSyncStatusChanged: aBlock
	<
	var o = self['@jsObject'];
	o.syncStatusChanged.removeListener(aBlock)
	>
!

onRecordsChanged: aBlock
	<
	var o = self['@jsObject'];
	o.recordsChanged.addListener(aBlock)
	>
!

onSyncStatusChanged: aBlock
	<
	var o = self['@jsObject'];
	o.syncStatusChanged.addListener(aBlock)
	>
! !

DrProxy subclass: #DrDsDatastoreManager
	instanceVariableNames: ''
	package: 'Dropbox-Datastore'!

!DrDsDatastoreManager methodsFor: 'accessing'!

datastoreListChanged
	<return self['@jsObject']['datastoreListChanged']>
! !

!DrDsDatastoreManager methodsFor: 'actions'!

basicOpenDatastore: datastoreId callback: callback
	^ self forwardMessage: 'openDatastore' withArguments: {datastoreId. callback}
!

basicOpenDefaultDatastore: callback
	^ self forwardMessage: 'openDefaultDatastore' withArguments: {callback}
!

close
	^ self forwardMessage: 'close' withArguments: #()
!

createDatastore: callback
	^ self forwardMessage: 'createDatastore' withArguments: {callback}
!

deleteDatastore: callback
	^ self forwardMessage: 'deleteDatastore' withArguments: {callback}
!

listDatastoreIds: callback
	^ self forwardMessage: 'listDatastoreIds' withArguments: {callback}
!

openDatastore: datastoreId callback: callback
	^ self basicOpenDatastore: datastoreId callback: [:err :store | callback value: (DrApiError protoProxy: err) value: (DrDsDatastore protoProxy: store)]
!

openDefaultDatastore: callback
	^ self basicOpenDefaultDatastore: [:err :store | callback value: (DrApiError protoProxy: err) value: (DrDsDatastore protoProxy: store)]
! !

!DrDsDatastoreManager methodsFor: 'actions-defer'!

deferOpenDatastore: datastoreId
	| dfd |
	dfd := self deferred.
	 self openDatastore: datastoreId callback: [:err :store |
		store isNil ifTrue: [dfd reject: err] ifFalse: [dfd resolve: store]  
	].
	^dfd
!

deferOpenDefaultDatastore
	| dfd |
	dfd := self deferred.
	 self openDefaultDatastore: [:err :store |
		store isNil ifTrue: [dfd reject: err] ifFalse: [dfd resolve: store]  
	].
	^dfd
! !

DrProxy subclass: #DrDsRecord
	instanceVariableNames: ''
	package: 'Dropbox-Datastore'!

!DrDsRecord methodsFor: 'actions'!

deleteRecord
	^ self forwardMessage: 'deleteRecord' withArguments: #()
!

get: fieldName
	^ self forwardMessage: 'get' withArguments: {fieldName}
!

getFields
	^ self forwardMessage: 'getFields' withArguments: #()
!

getId
	^ self forwardMessage: 'getId' withArguments: #()
!

getTable
	^ self forwardMessage: 'getTable' withArguments: #()
!

hasField: fieldName
	^ self forwardMessage: 'hasField' withArguments: {fieldName}
!

isDeleted
	^ self forwardMessage: 'isDeleted' withArguments: #()
!

set: fieldName with: value
	^ self forwardMessage: 'set' withArguments: {fieldName. value}
!

setResolutionRule: fieldName with: rule
	^ self forwardMessage: 'setResolutionRule' withArguments: {fieldName. rule}
!

update: values
	^ self forwardMessage: 'update' withArguments: {(self objMapFrom: values)}
! !

DrProxy subclass: #DrDsTable
	instanceVariableNames: ''
	package: 'Dropbox-Datastore'!

!DrDsTable methodsFor: 'actions'!

get: recordId
	^ self asRecord: (self basicGet: recordId)
!

getId
	^ self forwardMessage: 'getId' withArguments: #()
!

getOrInsert: recordId with: defaultValues
	^ self asRecord: (self basicGetOrInsert: recordId with: defaultValues)
!

insert: fieldValues
	^ self asRecord: (self basicInsert: fieldValues)
!

insertAll: aCollection
	aCollection do: [:each | self insert: each]
!

query: fieldValues
	 ^(self basicQuery: fieldValues) collect: [:each | self asRecord: each]
!

queryAll
	 ^self basicQueryAll collect: [:each | self asRecord: each]
!

setResolutionRule: fieldName with: rule
	^ self forwardMessage: 'setResolutionRule' withArguments: {fieldName. rule}
! !

!DrDsTable methodsFor: 'actions-basic'!

basicGet: recordId
	^ self forwardMessage: 'get' withArguments: {recordId}
!

basicGetOrInsert: recordId with: defaultValues
	^ self forwardMessage: 'getOrInsert' withArguments: {recordId. (self objMapFrom: defaultValues)}
!

basicInsert: fieldValues
	^ self forwardMessage: 'insert' withArguments: {self objMapFrom: fieldValues}
!

basicQuery: fieldValues
	^ self forwardMessage: 'query' withArguments: {self objMapFrom: fieldValues}
!

basicQueryAll
	^ self forwardMessage: 'query' withArguments: #()
! !

!DrDsTable methodsFor: 'private'!

asRecord: jsObj
	^ jsObj ifNotNil: [DrDsRecord protoProxy: jsObj]
! !

