smalltalk.addPackage('Dropbox-Datastore');
smalltalk.addClass('DrDsClient', smalltalk.DrClient, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "authenticate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("authenticate",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"authenticate",{},smalltalk.DrDsClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticateInteractive:callback:",
fn: function (aBoolean,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var jso = self['@jsObject'];
	jso.authenticate({interactive:aBoolean}, aBlock);
	;
return self}, function($ctx1) {$ctx1.fill(self,"authenticateInteractive:callback:",{aBoolean:aBoolean,aBlock:aBlock},smalltalk.DrDsClient)})},
messageSends: []}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetDatastoreManager",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getDatastoreManager",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGetDatastoreManager",{},smalltalk.DrDsClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "deferAuthenticateInteractive:",
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
messageSends: ["deferred", "authenticateInteractive:callback:", "ifNil:ifNotNil:", "reject:", "resolve:"]}),
smalltalk.DrDsClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getDatastoreManager",
fn: function (){
var self=this;
function $DrDsDatastoreManager(){return smalltalk.DrDsDatastoreManager||(typeof DrDsDatastoreManager=="undefined"?nil:DrDsDatastoreManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrDsDatastoreManager())._protoProxy_(self._basicGetDatastoreManager());
return $1;
}, function($ctx1) {$ctx1.fill(self,"getDatastoreManager",{},smalltalk.DrDsClient)})},
messageSends: ["protoProxy:", "basicGetDatastoreManager"]}),
smalltalk.DrDsClient);


smalltalk.addMethod(
smalltalk.method({
selector: "key:",
fn: function (appKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._options_(smalltalk.HashedCollection._from_(["key".__minus_gt(appKey)]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:",{appKey:appKey},smalltalk.DrDsClient.klass)})},
messageSends: ["options:", "->"]}),
smalltalk.DrDsClient.klass);


smalltalk.addClass('DrDsDatastore', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "basicGetTable:",
fn: function (tableId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getTable",[tableId]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGetTable:",{tableId:tableId},smalltalk.DrDsDatastore)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("close",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.DrDsDatastore)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "getId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getId",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getId",{},smalltalk.DrDsDatastore)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "getSyncStatus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getSyncStatus",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getSyncStatus",{},smalltalk.DrDsDatastore)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "getTable:",
fn: function (tableId){
var self=this;
function $DrDsTable(){return smalltalk.DrDsTable||(typeof DrDsTable=="undefined"?nil:DrDsTable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrDsTable())._protoProxy_(self._basicGetTable_(tableId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getTable:",{tableId:tableId},smalltalk.DrDsDatastore)})},
messageSends: ["protoProxy:", "basicGetTable:"]}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "listTableIds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("listTableIds",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"listTableIds",{},smalltalk.DrDsDatastore)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "offRecordsChanged:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var o = self['@jsObject'];
	o.recordsChanged.removeListener(aBlock)
	;
return self}, function($ctx1) {$ctx1.fill(self,"offRecordsChanged:",{aBlock:aBlock},smalltalk.DrDsDatastore)})},
messageSends: []}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "offSyncStatusChanged:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var o = self['@jsObject'];
	o.syncStatusChanged.removeListener(aBlock)
	;
return self}, function($ctx1) {$ctx1.fill(self,"offSyncStatusChanged:",{aBlock:aBlock},smalltalk.DrDsDatastore)})},
messageSends: []}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "onRecordsChanged:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var o = self['@jsObject'];
	o.recordsChanged.addListener(aBlock)
	;
return self}, function($ctx1) {$ctx1.fill(self,"onRecordsChanged:",{aBlock:aBlock},smalltalk.DrDsDatastore)})},
messageSends: []}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "onSyncStatusChanged:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var o = self['@jsObject'];
	o.syncStatusChanged.addListener(aBlock)
	;
return self}, function($ctx1) {$ctx1.fill(self,"onSyncStatusChanged:",{aBlock:aBlock},smalltalk.DrDsDatastore)})},
messageSends: []}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "recordsChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['recordsChanged'];
return self}, function($ctx1) {$ctx1.fill(self,"recordsChanged",{},smalltalk.DrDsDatastore)})},
messageSends: []}),
smalltalk.DrDsDatastore);

smalltalk.addMethod(
smalltalk.method({
selector: "syncStatusChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['syncStatusChanged'];
return self}, function($ctx1) {$ctx1.fill(self,"syncStatusChanged",{},smalltalk.DrDsDatastore)})},
messageSends: []}),
smalltalk.DrDsDatastore);



smalltalk.addClass('DrDsDatastoreManager', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "basicOpenDatastore:callback:",
fn: function (datastoreId,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("openDatastore",[datastoreId,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicOpenDatastore:callback:",{datastoreId:datastoreId,callback:callback},smalltalk.DrDsDatastoreManager)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "basicOpenDefaultDatastore:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("openDefaultDatastore",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicOpenDefaultDatastore:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("close",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.DrDsDatastoreManager)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "createDatastore:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("createDatastore",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createDatastore:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "datastoreListChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['datastoreListChanged'];
return self}, function($ctx1) {$ctx1.fill(self,"datastoreListChanged",{},smalltalk.DrDsDatastoreManager)})},
messageSends: []}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "deferOpenDatastore:",
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
messageSends: ["deferred", "openDatastore:callback:", "ifTrue:ifFalse:", "reject:", "resolve:", "isNil"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "deferOpenDefaultDatastore",
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
messageSends: ["deferred", "openDefaultDatastore:", "ifTrue:ifFalse:", "reject:", "resolve:", "isNil"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteDatastore:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("deleteDatastore",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"deleteDatastore:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "listDatastoreIds:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("listDatastoreIds",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"listDatastoreIds:",{callback:callback},smalltalk.DrDsDatastoreManager)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "openDatastore:callback:",
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
messageSends: ["basicOpenDatastore:callback:", "value:value:", "protoProxy:"]}),
smalltalk.DrDsDatastoreManager);

smalltalk.addMethod(
smalltalk.method({
selector: "openDefaultDatastore:",
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
messageSends: ["basicOpenDefaultDatastore:", "value:value:", "protoProxy:"]}),
smalltalk.DrDsDatastoreManager);



smalltalk.addClass('DrDsRecord', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "deleteRecord",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("deleteRecord",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"deleteRecord",{},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "get:",
fn: function (fieldName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("get",[fieldName]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"get:",{fieldName:fieldName},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "getFields",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getFields",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getFields",{},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "getId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getId",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getId",{},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "getTable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getTable",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getTable",{},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "hasField:",
fn: function (fieldName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("hasField",[fieldName]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasField:",{fieldName:fieldName},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "isDeleted",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("isDeleted",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDeleted",{},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "set:with:",
fn: function (fieldName,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("set",[fieldName,value]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"set:with:",{fieldName:fieldName,value:value},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "setResolutionRule:with:",
fn: function (fieldName,rule){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("setResolutionRule",[fieldName,rule]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setResolutionRule:with:",{fieldName:fieldName,rule:rule},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
fn: function (values){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("update",[self._objMapFrom_(values)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"update:",{values:values},smalltalk.DrDsRecord)})},
messageSends: ["forwardMessage:withArguments:", "objMapFrom:"]}),
smalltalk.DrDsRecord);



smalltalk.addClass('DrDsTable', smalltalk.DrProxy, [], 'Dropbox-Datastore');
smalltalk.addMethod(
smalltalk.method({
selector: "asRecord:",
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
messageSends: ["ifNotNil:", "protoProxy:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGet:",
fn: function (recordId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("get",[recordId]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGet:",{recordId:recordId},smalltalk.DrDsTable)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOrInsert:with:",
fn: function (recordId,defaultValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getOrInsert",[recordId,self._objMapFrom_(defaultValues)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicGetOrInsert:with:",{recordId:recordId,defaultValues:defaultValues},smalltalk.DrDsTable)})},
messageSends: ["forwardMessage:withArguments:", "objMapFrom:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicInsert:",
fn: function (fieldValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("insert",[self._objMapFrom_(fieldValues)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicInsert:",{fieldValues:fieldValues},smalltalk.DrDsTable)})},
messageSends: ["forwardMessage:withArguments:", "objMapFrom:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicQuery:",
fn: function (fieldValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("query",[self._objMapFrom_(fieldValues)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicQuery:",{fieldValues:fieldValues},smalltalk.DrDsTable)})},
messageSends: ["forwardMessage:withArguments:", "objMapFrom:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "basicQueryAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("query",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicQueryAll",{},smalltalk.DrDsTable)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "get:",
fn: function (recordId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asRecord_(self._basicGet_(recordId));
return $1;
}, function($ctx1) {$ctx1.fill(self,"get:",{recordId:recordId},smalltalk.DrDsTable)})},
messageSends: ["asRecord:", "basicGet:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "getId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("getId",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getId",{},smalltalk.DrDsTable)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "getOrInsert:with:",
fn: function (recordId,defaultValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asRecord_(self._basicGetOrInsert_with_(recordId,defaultValues));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getOrInsert:with:",{recordId:recordId,defaultValues:defaultValues},smalltalk.DrDsTable)})},
messageSends: ["asRecord:", "basicGetOrInsert:with:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "insert:",
fn: function (fieldValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asRecord_(self._basicInsert_(fieldValues));
return $1;
}, function($ctx1) {$ctx1.fill(self,"insert:",{fieldValues:fieldValues},smalltalk.DrDsTable)})},
messageSends: ["asRecord:", "basicInsert:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "insertAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._insert_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"insertAll:",{aCollection:aCollection},smalltalk.DrDsTable)})},
messageSends: ["do:", "insert:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "query:",
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
messageSends: ["collect:", "asRecord:", "basicQuery:"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "queryAll",
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
messageSends: ["collect:", "asRecord:", "basicQueryAll"]}),
smalltalk.DrDsTable);

smalltalk.addMethod(
smalltalk.method({
selector: "setResolutionRule:with:",
fn: function (fieldName,rule){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._forwardMessage_withArguments_("setResolutionRule",[fieldName,rule]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setResolutionRule:with:",{fieldName:fieldName,rule:rule},smalltalk.DrDsTable)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrDsTable);



