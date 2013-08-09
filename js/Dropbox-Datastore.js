smalltalk.addPackage('Dropbox-Datastore');
smalltalk.addClass('DrDsClient', smalltalk.DrClient, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "authenticate",
category: 'authentication',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("authenticate",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"authenticate",{},smalltalk.DrDsClient)})},
args: [],
source: "authenticate\x0a\x09^ self forwardMessage: 'authenticate' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticateInteractive:callback:",
category: 'authentication',
fn: function (aBoolean,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var jso = self['@jsObject'];
	jso.authenticate({interactive:aBoolean}, aBlock);
	;
return self}, function($ctx1) {$ctx1.fill(self,"authenticateInteractive:callback:",{aBoolean:aBoolean,aBlock:aBlock},smalltalk.DrDsClient)})},
args: ["aBoolean", "aBlock"],
source: "authenticateInteractive: aBoolean callback: aBlock\x0a\x09<\x0a\x09var jso = self['@jsObject'];\x0a\x09jso.authenticate({interactive:aBoolean}, aBlock);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetDatastoreManager",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getDatastoreManager",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGetDatastoreManager",{},smalltalk.DrDsClient)})},
args: [],
source: "basicGetDatastoreManager\x0a\x09^ self forwardMessage: 'getDatastoreManager' withArguments: {}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "deferAuthenticateInteractive:",
category: 'actions-defer',
fn: function (aBoolean){
var self=this;
var dfd;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
dfd=self._deferred();
self._authenticateInteractive_callback_(aBoolean,(function(err,cli){
return smalltalk.withContext(function($ctx2) {
$1=err;
if(($receiver = $1) == nil || $receiver == undefined){
return _st(dfd)._reject_(err);
} else {
return _st(dfd)._resolve_(cli);
};
}, function($ctx2) {$ctx2.fillBlock({err:err,cli:cli},$ctx1)})}));
$2=dfd;
return $2;
}, function($ctx1) {$ctx1.fill(self,"deferAuthenticateInteractive:",{aBoolean:aBoolean,dfd:dfd},smalltalk.DrDsClient)})},
args: ["aBoolean"],
source: "deferAuthenticateInteractive: aBoolean\x0a\x09| dfd |\x0a\x09dfd := self deferred.\x0a\x09self authenticateInteractive: aBoolean callback: [:err :cli |\x0a\x09\x09err ifNil: [dfd reject: err] ifNotNil: [dfd resolve: cli]\x0a\x09].\x0a\x09^dfd",
messageSends: ["deferred", "authenticateInteractive:callback:", "ifNil:ifNotNil:", "reject:", "resolve:"],
referencedClasses: []
}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getDatastoreManager",
category: 'accessing',
fn: function (){
var self=this;
function $DrDsDatastoreManager(){return smalltalk.DrDsDatastoreManager||(typeof DrDsDatastoreManager=="undefined"?nil:DrDsDatastoreManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrDsDatastoreManager())._protoProxy_(self._basicGetDatastoreManager());
return $1;
}, function($ctx1) {$ctx1.fill(self,"getDatastoreManager",{},smalltalk.DrDsClient)})},
args: [],
source: "getDatastoreManager\x0a\x09^DrDsDatastoreManager protoProxy: self basicGetDatastoreManager",
messageSends: ["protoProxy:", "basicGetDatastoreManager"],
referencedClasses: ["DrDsDatastoreManager"]
}),
smalltalk.DrDsClient);


smalltalk.addMethod(
smalltalk.method({
selector: "key:",
category: 'instance creation',
fn: function (appKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._options_(smalltalk.HashedCollection._from_(["key".__minus_gt(appKey)]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:",{appKey:appKey},smalltalk.DrDsClient.klass)})},
args: ["appKey"],
source: "key: appKey\x0a\x09^self options: #{'key'->appKey}",
messageSends: ["options:", "->"],
referencedClasses: []
}),
smalltalk.DrDsClient.klass);


smalltalk.addClass('DrDsDatastore', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "basicGetTable:",
category: 'actions',
fn: function (tableId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getTable",[tableId]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGetTable:",{tableId:tableId},smalltalk.DrDsDatastore)})},
args: ["tableId"],
source: "basicGetTable: tableId\x0a\x09^ self forwardMessage: 'getTable' withArguments: {tableId}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("close",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.DrDsDatastore)})},
args: [],
source: "close\x0a\x09^ self forwardMessage: 'close' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "getId",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getId",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getId",{},smalltalk.DrDsDatastore)})},
args: [],
source: "getId\x0a\x09^ self forwardMessage: 'getId' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "getSyncStatus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getSyncStatus",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getSyncStatus",{},smalltalk.DrDsDatastore)})},
args: [],
source: "getSyncStatus\x0a\x09^ self forwardMessage: 'getSyncStatus' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "getTable:",
category: 'actions',
fn: function (tableId){
var self=this;
function $DrDsTable(){return smalltalk.DrDsTable||(typeof DrDsTable=="undefined"?nil:DrDsTable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrDsTable())._protoProxy_(self._basicGetTable_(tableId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getTable:",{tableId:tableId},smalltalk.DrDsDatastore)})},
args: ["tableId"],
source: "getTable: tableId\x0a\x09^ DrDsTable protoProxy: (self basicGetTable: tableId)",
messageSends: ["protoProxy:", "basicGetTable:"],
referencedClasses: ["DrDsTable"]
}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "listTableIds",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("listTableIds",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"listTableIds",{},smalltalk.DrDsDatastore)})},
args: [],
source: "listTableIds\x0a\x09^ self forwardMessage: 'listTableIds' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "recordsChanged",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['recordsChanged'];
return self}, function($ctx1) {$ctx1.fill(self,"recordsChanged",{},smalltalk.DrDsDatastore)})},
args: [],
source: "recordsChanged\x0a\x09<return self['@jsObject']['recordsChanged']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "syncStatusChanged",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['syncStatusChanged'];
return self}, function($ctx1) {$ctx1.fill(self,"syncStatusChanged",{},smalltalk.DrDsDatastore)})},
args: [],
source: "syncStatusChanged \x0a\x09<return self['@jsObject']['syncStatusChanged']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrDsDatastore);



smalltalk.addClass('DrDsDatastoreManager', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "basicOpenDatastore:callback:",
category: 'actions',
fn: function (datastoreId,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("openDatastore",[datastoreId,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicOpenDatastore:callback:",{datastoreId:datastoreId,callback:callback},smalltalk.DrDsDatastoreManager)})},
args: ["datastoreId", "callback"],
source: "basicOpenDatastore: datastoreId callback: callback\x0a\x09^ self forwardMessage: 'openDatastore' withArguments: {datastoreId. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "basicOpenDefaultDatastore:",
category: 'actions',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("openDefaultDatastore",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicOpenDefaultDatastore:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
args: ["callback"],
source: "basicOpenDefaultDatastore: callback\x0a\x09^ self forwardMessage: 'openDefaultDatastore' withArguments: {callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("close",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.DrDsDatastoreManager)})},
args: [],
source: "close\x0a\x09^ self forwardMessage: 'close' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "createDatastore:",
category: 'actions',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("createDatastore",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createDatastore:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
args: ["callback"],
source: "createDatastore: callback\x0a\x09^ self forwardMessage: 'createDatastore' withArguments: {callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "datastoreListChanged",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['datastoreListChanged'];
return self}, function($ctx1) {$ctx1.fill(self,"datastoreListChanged",{},smalltalk.DrDsDatastoreManager)})},
args: [],
source: "datastoreListChanged\x0a\x09<return self['@jsObject']['datastoreListChanged']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "deferOpenDatastore:",
category: 'actions-defer',
fn: function (datastoreId){
var self=this;
var dfd;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
dfd=self._deferred();
self._openDatastore_callback_(datastoreId,(function(err,store){
return smalltalk.withContext(function($ctx2) {
$1=_st(store)._isNil();
if(smalltalk.assert($1)){
return _st(dfd)._reject_(err);
} else {
return _st(dfd)._resolve_(store);
};
}, function($ctx2) {$ctx2.fillBlock({err:err,store:store},$ctx1)})}));
$2=dfd;
return $2;
}, function($ctx1) {$ctx1.fill(self,"deferOpenDatastore:",{datastoreId:datastoreId,dfd:dfd},smalltalk.DrDsDatastoreManager)})},
args: ["datastoreId"],
source: "deferOpenDatastore: datastoreId\x0a\x09| dfd |\x0a\x09dfd := self deferred.\x0a\x09 self openDatastore: datastoreId callback: [:err :store |\x0a\x09\x09store isNil ifTrue: [dfd reject: err] ifFalse: [dfd resolve: store]  \x0a\x09].\x0a\x09^dfd",
messageSends: ["deferred", "openDatastore:callback:", "ifTrue:ifFalse:", "reject:", "resolve:", "isNil"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "deferOpenDefaultDatastore",
category: 'actions-defer',
fn: function (){
var self=this;
var dfd;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
dfd=self._deferred();
self._openDefaultDatastore_((function(err,store){
return smalltalk.withContext(function($ctx2) {
$1=_st(store)._isNil();
if(smalltalk.assert($1)){
return _st(dfd)._reject_(err);
} else {
return _st(dfd)._resolve_(store);
};
}, function($ctx2) {$ctx2.fillBlock({err:err,store:store},$ctx1)})}));
$2=dfd;
return $2;
}, function($ctx1) {$ctx1.fill(self,"deferOpenDefaultDatastore",{dfd:dfd},smalltalk.DrDsDatastoreManager)})},
args: [],
source: "deferOpenDefaultDatastore\x0a\x09| dfd |\x0a\x09dfd := self deferred.\x0a\x09 self openDefaultDatastore: [:err :store |\x0a\x09\x09store isNil ifTrue: [dfd reject: err] ifFalse: [dfd resolve: store]  \x0a\x09].\x0a\x09^dfd",
messageSends: ["deferred", "openDefaultDatastore:", "ifTrue:ifFalse:", "reject:", "resolve:", "isNil"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteDatastore:",
category: 'actions',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("deleteDatastore",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"deleteDatastore:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
args: ["callback"],
source: "deleteDatastore: callback\x0a\x09^ self forwardMessage: 'deleteDatastore' withArguments: {callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "listDatastoreIds:",
category: 'actions',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("listDatastoreIds",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"listDatastoreIds:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
args: ["callback"],
source: "listDatastoreIds: callback\x0a\x09^ self forwardMessage: 'listDatastoreIds' withArguments: {callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "openDatastore:callback:",
category: 'actions',
fn: function (datastoreId,callback){
var self=this;
function $DrApiError(){return smalltalk.DrApiError||(typeof DrApiError=="undefined"?nil:DrApiError)}
function $DrDsDatastore(){return smalltalk.DrDsDatastore||(typeof DrDsDatastore=="undefined"?nil:DrDsDatastore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicOpenDatastore_callback_(datastoreId,(function(err,store){
return smalltalk.withContext(function($ctx2) {
return _st(callback)._value_value_(_st($DrApiError())._protoProxy_(err),_st($DrDsDatastore())._protoProxy_(store));
}, function($ctx2) {$ctx2.fillBlock({err:err,store:store},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"openDatastore:callback:",{datastoreId:datastoreId,callback:callback},smalltalk.DrDsDatastoreManager)})},
args: ["datastoreId", "callback"],
source: "openDatastore: datastoreId callback: callback\x0a\x09^ self basicOpenDatastore: datastoreId callback: [:err :store | callback value: (DrApiError protoProxy: err) value: (DrDsDatastore protoProxy: store)]",
messageSends: ["basicOpenDatastore:callback:", "value:value:", "protoProxy:"],
referencedClasses: ["DrApiError", "DrDsDatastore"]
}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "openDefaultDatastore:",
category: 'actions',
fn: function (callback){
var self=this;
function $DrApiError(){return smalltalk.DrApiError||(typeof DrApiError=="undefined"?nil:DrApiError)}
function $DrDsDatastore(){return smalltalk.DrDsDatastore||(typeof DrDsDatastore=="undefined"?nil:DrDsDatastore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicOpenDefaultDatastore_((function(err,store){
return smalltalk.withContext(function($ctx2) {
return _st(callback)._value_value_(_st($DrApiError())._protoProxy_(err),_st($DrDsDatastore())._protoProxy_(store));
}, function($ctx2) {$ctx2.fillBlock({err:err,store:store},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"openDefaultDatastore:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
args: ["callback"],
source: "openDefaultDatastore: callback\x0a\x09^ self basicOpenDefaultDatastore: [:err :store | callback value: (DrApiError protoProxy: err) value: (DrDsDatastore protoProxy: store)]",
messageSends: ["basicOpenDefaultDatastore:", "value:value:", "protoProxy:"],
referencedClasses: ["DrApiError", "DrDsDatastore"]
}),
smalltalk.DrDsDatastoreManager);



smalltalk.addClass('DrDsRecord', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "deleteRecord",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("deleteRecord",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"deleteRecord",{},smalltalk.DrDsRecord)})},
args: [],
source: "deleteRecord\x0a\x09^ self forwardMessage: 'deleteRecord' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "get:",
category: 'actions',
fn: function (fieldName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("get",[fieldName]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"get:",{fieldName:fieldName},smalltalk.DrDsRecord)})},
args: ["fieldName"],
source: "get: fieldName\x0a\x09^ self forwardMessage: 'get' withArguments: {fieldName}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "getFields",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getFields",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getFields",{},smalltalk.DrDsRecord)})},
args: [],
source: "getFields\x0a\x09^ self forwardMessage: 'getFields' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "getId",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getId",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getId",{},smalltalk.DrDsRecord)})},
args: [],
source: "getId\x0a\x09^ self forwardMessage: 'getId' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "getTable",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getTable",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getTable",{},smalltalk.DrDsRecord)})},
args: [],
source: "getTable\x0a\x09^ self forwardMessage: 'getTable' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "hasField:",
category: 'actions',
fn: function (fieldName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("hasField",[fieldName]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasField:",{fieldName:fieldName},smalltalk.DrDsRecord)})},
args: ["fieldName"],
source: "hasField: fieldName\x0a\x09^ self forwardMessage: 'hasField' withArguments: {fieldName}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "isDeleted",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("isDeleted",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDeleted",{},smalltalk.DrDsRecord)})},
args: [],
source: "isDeleted\x0a\x09^ self forwardMessage: 'isDeleted' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "set:with:",
category: 'actions',
fn: function (fieldName,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("set",[fieldName,value]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"set:with:",{fieldName:fieldName,value:value},smalltalk.DrDsRecord)})},
args: ["fieldName", "value"],
source: "set: fieldName with: value\x0a\x09^ self forwardMessage: 'set' withArguments: {fieldName. value}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "setResolutionRule:with:",
category: 'actions',
fn: function (fieldName,rule){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("setResolutionRule",[fieldName,rule]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setResolutionRule:with:",{fieldName:fieldName,rule:rule},smalltalk.DrDsRecord)})},
args: ["fieldName", "rule"],
source: "setResolutionRule: fieldName with: rule\x0a\x09^ self forwardMessage: 'setResolutionRule' withArguments: {fieldName. rule}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
category: 'actions',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("update",[value]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"update:",{value:value},smalltalk.DrDsRecord)})},
args: ["value"],
source: "update: value\x0a\x09^ self forwardMessage: 'update' withArguments: {value}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsRecord);



smalltalk.addClass('DrDsTable', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "asRecord:",
category: 'private',
fn: function (jsObj){
var self=this;
function $DrDsRecord(){return smalltalk.DrDsRecord||(typeof DrDsRecord=="undefined"?nil:DrDsRecord)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=jsObj;
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st($DrDsRecord())._protoProxy_(jsObj);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asRecord:",{jsObj:jsObj},smalltalk.DrDsTable)})},
args: ["jsObj"],
source: "asRecord: jsObj\x0a\x09^ jsObj ifNotNil: [DrDsRecord protoProxy: jsObj]",
messageSends: ["ifNotNil:", "protoProxy:"],
referencedClasses: ["DrDsRecord"]
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGet:",
category: 'actions-basic',
fn: function (recordId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("get",[recordId]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGet:",{recordId:recordId},smalltalk.DrDsTable)})},
args: ["recordId"],
source: "basicGet: recordId\x0a\x09^ self forwardMessage: 'get' withArguments: {recordId}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOrInsert:with:",
category: 'actions-basic',
fn: function (recordId,defaultValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getOrInsert",[recordId,defaultValues]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGetOrInsert:with:",{recordId:recordId,defaultValues:defaultValues},smalltalk.DrDsTable)})},
args: ["recordId", "defaultValues"],
source: "basicGetOrInsert: recordId with: defaultValues\x0a\x09^ self forwardMessage: 'getOrInsert' withArguments: {recordId. defaultValues}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicInsert:",
category: 'actions-basic',
fn: function (fieldValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("insert",[fieldValues]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicInsert:",{fieldValues:fieldValues},smalltalk.DrDsTable)})},
args: ["fieldValues"],
source: "basicInsert: fieldValues\x0a\x09^ self forwardMessage: 'insert' withArguments: {fieldValues}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicQuery:",
category: 'actions-basic',
fn: function (fieldValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("query",[fieldValues]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicQuery:",{fieldValues:fieldValues},smalltalk.DrDsTable)})},
args: ["fieldValues"],
source: "basicQuery: fieldValues\x0a\x09^ self forwardMessage: 'query' withArguments: {fieldValues}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicQueryAll",
category: 'actions-basic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("query",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicQueryAll",{},smalltalk.DrDsTable)})},
args: [],
source: "basicQueryAll\x0a\x09^ self forwardMessage: 'query' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "get:",
category: 'actions',
fn: function (recordId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asRecord_(self._basicGet_(recordId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"get:",{recordId:recordId},smalltalk.DrDsTable)})},
args: ["recordId"],
source: "get: recordId\x0a\x09^ self asRecord: (self basicGet: recordId)",
messageSends: ["asRecord:", "basicGet:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "getId",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getId",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getId",{},smalltalk.DrDsTable)})},
args: [],
source: "getId\x0a\x09^ self forwardMessage: 'getId' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "getOrInsert:with:",
category: 'actions',
fn: function (recordId,defaultValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asRecord_(self._basicGetOrInsert_with_(recordId,defaultValues));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getOrInsert:with:",{recordId:recordId,defaultValues:defaultValues},smalltalk.DrDsTable)})},
args: ["recordId", "defaultValues"],
source: "getOrInsert: recordId with: defaultValues\x0a\x09^ self asRecord: (self basicGetOrInsert: recordId with: defaultValues)",
messageSends: ["asRecord:", "basicGetOrInsert:with:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "insert:",
category: 'actions',
fn: function (fieldValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asRecord_(self._basicInsert_(fieldValues));
return $1;
}, function($ctx1) {$ctx1.fill(self,"insert:",{fieldValues:fieldValues},smalltalk.DrDsTable)})},
args: ["fieldValues"],
source: "insert: fieldValues\x0a\x09^ self asRecord: (self basicInsert: fieldValues)",
messageSends: ["asRecord:", "basicInsert:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "insertAll:",
category: 'actions',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._insert_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"insertAll:",{aCollection:aCollection},smalltalk.DrDsTable)})},
args: ["aCollection"],
source: "insertAll: aCollection\x0a\x09aCollection do: [:each | self insert: each]",
messageSends: ["do:", "insert:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "query:",
category: 'actions',
fn: function (fieldValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicQuery_(fieldValues))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._asRecord_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"query:",{fieldValues:fieldValues},smalltalk.DrDsTable)})},
args: ["fieldValues"],
source: "query: fieldValues\x0a\x09 ^(self basicQuery: fieldValues) collect: [:each | self asRecord: each]",
messageSends: ["collect:", "asRecord:", "basicQuery:"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "queryAll",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicQueryAll())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._asRecord_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"queryAll",{},smalltalk.DrDsTable)})},
args: [],
source: "queryAll\x0a\x09 ^self basicQueryAll collect: [:each | self asRecord: each]",
messageSends: ["collect:", "asRecord:", "basicQueryAll"],
referencedClasses: []
}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "setResolutionRule:with:",
category: 'actions',
fn: function (fieldName,rule){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("setResolutionRule",[fieldName,rule]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setResolutionRule:with:",{fieldName:fieldName,rule:rule},smalltalk.DrDsTable)})},
args: ["fieldName", "rule"],
source: "setResolutionRule: fieldName with: rule\x0a\x09^ self forwardMessage: 'setResolutionRule' withArguments: {fieldName. rule}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrDsTable);



