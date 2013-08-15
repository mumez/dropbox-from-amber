smalltalk.addPackage('Dropbox-Client');
smalltalk.addClass('DrAnnouncement', smalltalk.Object, ['kind', 'detail'], 'Dropbox-Client');
smalltalk.addMethod(
smalltalk.method({
selector: "detail",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@detail"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"detail",{},smalltalk.DrAnnouncement)})},
messageSends: []}),
smalltalk.DrAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "detail:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@detail"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"detail:",{aSymbol:aSymbol},smalltalk.DrAnnouncement)})},
messageSends: []}),
smalltalk.DrAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "kind",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kind"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kind",{},smalltalk.DrAnnouncement)})},
messageSends: []}),
smalltalk.DrAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "kind:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kind"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"kind:",{aSymbol:aSymbol},smalltalk.DrAnnouncement)})},
messageSends: []}),
smalltalk.DrAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "apiError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._kind_("apiError");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiError",{},smalltalk.DrAnnouncement.klass)})},
messageSends: ["kind:"]}),
smalltalk.DrAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._kind_("client");
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.DrAnnouncement.klass)})},
messageSends: ["kind:"]}),
smalltalk.DrAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "kind:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._kind_detail_(aSymbol,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"kind:",{aSymbol:aSymbol},smalltalk.DrAnnouncement.klass)})},
messageSends: ["kind:detail:"]}),
smalltalk.DrAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "kind:detail:",
fn: function (aSymbol,detail){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._kind_(aSymbol);
$3=_st($2)._detail_(detail);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"kind:detail:",{aSymbol:aSymbol,detail:detail},smalltalk.DrAnnouncement.klass)})},
messageSends: ["kind:", "new", "detail:"]}),
smalltalk.DrAnnouncement.klass);


smalltalk.addClass('DrDrivers', smalltalk.Object, [], 'Dropbox-Client');

smalltalk.addMethod(
smalltalk.method({
selector: "chrome:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Cordova",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"chrome:",{args:args},smalltalk.DrDrivers.klass)})},
messageSends: ["named:arguments:"]}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cordova:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Cordova",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cordova:",{args:args},smalltalk.DrDrivers.klass)})},
messageSends: ["named:arguments:"]}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:",
fn: function (className){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	return Dropbox.Drivers[className]
	;
return self}, function($ctx1) {$ctx1.fill(self,"named:",{className:className},smalltalk.DrDrivers.klass)})},
messageSends: []}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:arguments:",
fn: function (className,args){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	return new Dropbox.Drivers[className](args)
	;
return self}, function($ctx1) {$ctx1.fill(self,"named:arguments:",{className:className,args:args},smalltalk.DrDrivers.klass)})},
messageSends: []}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeServer:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("NodeServer",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodeServer:",{args:args},smalltalk.DrDrivers.klass)})},
messageSends: ["named:arguments:"]}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "popup:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Popup",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"popup:",{args:args},smalltalk.DrDrivers.klass)})},
messageSends: ["named:arguments:"]}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "redirect:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Redirect",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"redirect:",{args:args},smalltalk.DrDrivers.klass)})},
messageSends: ["named:arguments:"]}),
smalltalk.DrDrivers.klass);


smalltalk.addClass('DrProxy', smalltalk.JSObjectProxy, ['className'], 'Dropbox-Client');
smalltalk.addMethod(
smalltalk.method({
selector: "basicObjMapFrom:",
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var map = {};
		var assocs = aHashedCollection._associations();
		assocs._do_(function(each){
			map[each._key()] = each._value()._value();
		});
		return map;
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicObjMapFrom:",{aHashedCollection:aHashedCollection},smalltalk.DrProxy)})},
messageSends: []}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "className",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@className"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"className",{},smalltalk.DrProxy)})},
messageSends: []}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "className:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@className"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"className:",{aString:aString},smalltalk.DrProxy)})},
messageSends: []}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "deferred",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return $.Deferred();
return self}, function($ctx1) {$ctx1.fill(self,"deferred",{},smalltalk.DrProxy)})},
messageSends: []}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",_st(self)._jsObject());
_st(variables)._at_put_("#className",_st(self)._className());
_st(anInspector)._setLabel_(_st(self)._printString());
_st(self)._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.DrProxy)})},
messageSends: ["new", "at:put:", "jsObject", "className", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"]}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "isNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._jsObject())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNil",{},smalltalk.DrProxy)})},
messageSends: ["isNil", "jsObject"]}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "objMapFrom:",
fn: function (aHashedCollection){
var self=this;
function $JSObjectProxy(){return smalltalk.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(aHashedCollection)._class()).__eq($JSObjectProxy());
if(smalltalk.assert($1)){
$2=aHashedCollection;
return $2;
};
$3=self._basicObjMapFrom_(aHashedCollection);
return $3;
}, function($ctx1) {$ctx1.fill(self,"objMapFrom:",{aHashedCollection:aHashedCollection},smalltalk.DrProxy)})},
messageSends: ["ifTrue:", "=", "class", "basicObjMapFrom:"]}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onClose:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("close",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onClose:",{eventBlock:eventBlock},smalltalk.DrProxy)})},
messageSends: ["on:do:"]}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("error",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{eventBlock:eventBlock},smalltalk.DrProxy)})},
messageSends: ["on:do:"]}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpen:",
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("open",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onOpen:",{eventBlock:eventBlock},smalltalk.DrProxy)})},
messageSends: ["on:do:"]}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("a ".__comma(_st(self._className())._asString()));
$1=self._isNil();
if(smalltalk.assert($1)){
_st(aStream)._nextPutAll_(" isNil !");
};
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.DrProxy)})},
messageSends: ["nextPutAll:", ",", "asString", "className", "ifTrue:", "isNil"]}),
smalltalk.DrProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:protoProxy:",
fn: function (className,protoProxy){
var self=this;
var inst;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
inst=self._basicNew();
_st(inst)._className_(className);
$1=protoProxy;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(inst)._jsObject_(_st(protoProxy)._jsObject());
};
_st(inst)._initialize();
$2=inst;
return $2;
}, function($ctx1) {$ctx1.fill(self,"classNamed:protoProxy:",{className:className,protoProxy:protoProxy,inst:inst},smalltalk.DrProxy.klass)})},
messageSends: ["basicNew", "className:", "ifNotNil:", "jsObject:", "jsObject", "initialize"]}),
smalltalk.DrProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoNew());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.DrProxy.klass)})},
messageSends: ["protoProxy:", "protoNew"]}),
smalltalk.DrProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return nil;
}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.DrProxy.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.DrProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
fn: function (protoProxy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._classNamed_protoProxy_(_st(self)._asString(),protoProxy);
return $1;
}, function($ctx1) {$ctx1.fill(self,"protoProxy:",{protoProxy:protoProxy},smalltalk.DrProxy.klass)})},
messageSends: ["classNamed:protoProxy:", "asString"]}),
smalltalk.DrProxy.klass);


smalltalk.addClass('DrApiError', smalltalk.DrProxy, [], 'Dropbox-Client');
smalltalk.addMethod(
smalltalk.method({
selector: "isInvalidMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._invalidMethod());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInvalidMethod",{},smalltalk.DrApiError)})},
messageSends: ["=", "invalidMethod", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "isInvalidParam",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._invalidParam());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInvalidParam",{},smalltalk.DrApiError)})},
messageSends: ["=", "invalidParam", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "isInvalidToken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._invalidToken());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInvalidToken",{},smalltalk.DrApiError)})},
messageSends: ["=", "invalidToken", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "isNetworkError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._networkError());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNetworkError",{},smalltalk.DrApiError)})},
messageSends: ["=", "networkError", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotFound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._notFound());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotFound",{},smalltalk.DrApiError)})},
messageSends: ["=", "notFound", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "isOauthError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._oauthError());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOauthError",{},smalltalk.DrApiError)})},
messageSends: ["=", "oauthError", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverQuota",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._overQuota());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverQuota",{},smalltalk.DrApiError)})},
messageSends: ["=", "overQuota", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "isRateLimited",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._status()).__eq(_st(_st(self)._class())._rateLimited());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRateLimited",{},smalltalk.DrApiError)})},
messageSends: ["=", "rateLimited", "class", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['method'];
return self}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['method']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{arg:arg},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("Dropbox.ApiError");
_st(aStream)._nextPutAll_(_st(_st(":".__comma(_st(self._status())._asString())).__comma("/")).__comma(_st(self._responseText())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.DrApiError)})},
messageSends: ["nextPutAll:", ",", "asString", "responseText", "status"]}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "response",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['response'];
return self}, function($ctx1) {$ctx1.fill(self,"response",{},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "response:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['response']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"response:",{arg:arg},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "responseText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['responseText'];
return self}, function($ctx1) {$ctx1.fill(self,"responseText",{},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "responseText:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['responseText']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"responseText:",{arg:arg},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['status'];
return self}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "status:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['status']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"status:",{arg:arg},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['url'];
return self}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['url']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{arg:arg},smalltalk.DrApiError)})},
messageSends: []}),
smalltalk.DrApiError);


smalltalk.addMethod(
smalltalk.method({
selector: "invalidMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.INVALID_METHOD ;
return self}, function($ctx1) {$ctx1.fill(self,"invalidMethod",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidParam",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.INVALID_PARAM;
return self}, function($ctx1) {$ctx1.fill(self,"invalidParam",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidToken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.INVALID_TOKEN;
return self}, function($ctx1) {$ctx1.fill(self,"invalidToken",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "networkError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.NETWORK_ERROR;
return self}, function($ctx1) {$ctx1.fill(self,"networkError",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "notFound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.NOT_FOUND;
return self}, function($ctx1) {$ctx1.fill(self,"notFound",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "oauthError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.OAUTH_ERROR;
return self}, function($ctx1) {$ctx1.fill(self,"oauthError",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overQuota",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.OVER_QUOTA;
return self}, function($ctx1) {$ctx1.fill(self,"overQuota",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rateLimited",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.RATE_LIMITED;
return self}, function($ctx1) {$ctx1.fill(self,"rateLimited",{},smalltalk.DrApiError.klass)})},
messageSends: []}),
smalltalk.DrApiError.klass);


smalltalk.addClass('DrClient', smalltalk.DrProxy, ['announcer'], 'Dropbox-Client');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.DrClient)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "appHash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("appHash",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"appHash",{},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authDriver:",
fn: function (authDriver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("authDriver",[authDriver]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"authDriver:",{authDriver:authDriver},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authState",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['authState'];
return self}, function($ctx1) {$ctx1.fill(self,"authState",{},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authState:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['authState']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"authState:",{arg:arg},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._authenticateThen_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"authenticate",{},smalltalk.DrClient)})},
messageSends: ["authenticateThen:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticate:callback:",
fn: function (options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("authenticate",[options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"authenticate:callback:",{options:options,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticateThen:",
fn: function (nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self)._authenticate_callback_(_st(self)._defaultAuthOptions(),(function(err,cli){
return smalltalk.withContext(function($ctx2) {
$2=err;
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._onAuthenticated();
return _st(nextBlock)._value();
} else {
return _st(self)._onAuthenticatationFailed_(_st(self)._wrapError_(err));
};
}, function($ctx2) {$ctx2.fillBlock({err:err,cli:cli},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"authenticateThen:",{nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["authenticate:callback:", "defaultAuthOptions", "ifNil:ifNotNil:", "onAuthenticated", "value", "onAuthenticatationFailed:", "wrapError:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
fn: function (from,to){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyFrom_to_callback_(from,to,(function(apiError,stat){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,stat:stat},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{from:from,to:to},smalltalk.DrClient)})},
messageSends: ["copyFrom:to:callback:", "ifError:do:else:", "onFailed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:callback:",
fn: function (from,to,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("copy",[from,to,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:callback:",{from:from,to:to,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "credentials",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("credentials",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"credentials",{},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAuthDriverOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("rememberUser").__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAuthDriverOptions",{},smalltalk.DrClient)})},
messageSends: ["->"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAuthOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._fromPairs_([]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAuthOptions",{},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "dropboxUid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("dropboxUid",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dropboxUid",{},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "findByName:pattern:options:callback:",
fn: function (path,namePattern,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("findByName",[path,namePattern,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findByName:pattern:options:callback:",{path:path,namePattern:namePattern,options:options,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "findByName:pattern:options:then:",
fn: function (path,namePattern,options,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._findByName_pattern_callback_(path,namePattern,(function(apiError,stats){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextBlock)._valueWithPossibleArguments_([stats]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,stats:stats},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"findByName:pattern:options:then:",{path:path,namePattern:namePattern,options:options,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["findByName:pattern:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "findByName:pattern:then:",
fn: function (path,namePattern,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._findByName_pattern_options_then_(path,namePattern,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findByName:pattern:then:",{path:path,namePattern:namePattern,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["findByName:pattern:options:then:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getUserInfo:callback:",
fn: function (options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("getUserInfo",[options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getUserInfo:callback:",{options:options,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getUserInfo:then:",
fn: function (options,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._getUserInfo_callback_(options,(function(apiError,userInfo,jsonObject){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextBlock)._valueWithPossibleArguments_([userInfo,jsonObject]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,userInfo:userInfo,jsonObject:jsonObject},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getUserInfo:then:",{options:options,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["getUserInfo:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getUserInfoThen:",
fn: function (normalBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._getUserInfo_then_(nil,normalBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getUserInfoThen:",{normalBlock:normalBlock},smalltalk.DrClient)})},
messageSends: ["getUserInfo:then:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "ifError:do:else:",
fn: function (apiError,errorBlock,normalBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=apiError;
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(normalBlock)._value();
} else {
$1=_st(errorBlock)._value_(_st(self)._wrapError_(apiError));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifError:do:else:",{apiError:apiError,errorBlock:errorBlock,normalBlock:normalBlock},smalltalk.DrClient)})},
messageSends: ["ifNil:ifNotNil:", "value", "value:", "wrapError:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initAuthDriver_(_st(_st(self)._class())._defaultAuthDriverType());
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriver",{},smalltalk.DrClient)})},
messageSends: ["initAuthDriver:", "defaultAuthDriverType", "class"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriver:",
fn: function (driverSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initAuthDriver_options_(driverSymbol,_st(self)._defaultAuthDriverOptions());
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriver:",{driverSymbol:driverSymbol},smalltalk.DrClient)})},
messageSends: ["initAuthDriver:options:", "defaultAuthDriverOptions"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriver:options:",
fn: function (driverSymbol,optionsDic){
var self=this;
var driver;
function $DrDrivers(){return smalltalk.DrDrivers||(typeof DrDrivers=="undefined"?nil:DrDrivers)}
return smalltalk.withContext(function($ctx1) { 
driver=_st($DrDrivers())._perform_withArguments_(_st(driverSymbol).__comma(":"),[optionsDic]);
_st(console)._log_(_st("##authDriver: ").__comma(driverSymbol));
_st(self)._authDriver_(driver);
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriver:options:",{driverSymbol:driverSymbol,optionsDic:optionsDic,driver:driver},smalltalk.DrClient)})},
messageSends: ["perform:withArguments:", ",", "log:", "authDriver:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.DrProxy.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DrClient)})},
messageSends: ["initialize"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "isAuthenticated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("isAuthenticated",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAuthenticated",{},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "mkDir:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._mkDir_callback_(path,(function(apiError,stat){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,stat:stat},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"mkDir:",{path:path},smalltalk.DrClient)})},
messageSends: ["mkDir:callback:", "ifError:do:else:", "onFailed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "mkDir:callback:",
fn: function (path,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("mkdir",[path,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mkDir:callback:",{path:path,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "moveFrom:to:",
fn: function (from,to){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._moveFrom_to_callback_(from,to,(function(apiError,stat){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,stat:stat},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveFrom:to:",{from:from,to:to},smalltalk.DrClient)})},
messageSends: ["moveFrom:to:callback:", "ifError:do:else:", "onFailed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "moveFrom:to:callback:",
fn: function (from,to,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("move",[from,to,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveFrom:to:callback:",{from:from,to:to,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthStateChange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onAuthStateChange'];
return self}, function($ctx1) {$ctx1.fill(self,"onAuthStateChange",{},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthStateChange:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onAuthStateChange']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"onAuthStateChange:",{arg:arg},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthenticatationFailed:",
fn: function (anError){
var self=this;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##DrClient auth failed: ").__comma(_st(anError)._asString()));
_st(_st(self)._announcer())._announce_(_st(_st($DrAnnouncement())._apiError())._detail_(anError));
return self}, function($ctx1) {$ctx1.fill(self,"onAuthenticatationFailed:",{anError:anError},smalltalk.DrClient)})},
messageSends: ["log:", ",", "asString", "announce:", "detail:", "apiError", "announcer"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthenticated",
fn: function (){
var self=this;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st(_st($DrAnnouncement())._client())._detail_("authenticated"));
return self}, function($ctx1) {$ctx1.fill(self,"onAuthenticated",{},smalltalk.DrClient)})},
messageSends: ["announce:", "detail:", "client", "announcer"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onError'];
return self}, function($ctx1) {$ctx1.fill(self,"onError",{},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onError']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{arg:arg},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onFailed:",
fn: function (anError){
var self=this;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##DrClient failed: ").__comma(_st(anError)._asString()));
_st(_st(self)._announcer())._announce_(_st(_st($DrAnnouncement())._apiError())._detail_(anError));
return self}, function($ctx1) {$ctx1.fill(self,"onFailed:",{anError:anError},smalltalk.DrClient)})},
messageSends: ["log:", ",", "asString", "announce:", "detail:", "apiError", "announcer"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onXhr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onXhr'];
return self}, function($ctx1) {$ctx1.fill(self,"onXhr",{},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onXhr:",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onXhr']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"onXhr:",{arg:arg},smalltalk.DrClient)})},
messageSends: []}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readDir:options:callback:",
fn: function (path,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("readdir",[path,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readDir:options:callback:",{path:path,options:options,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readDir:options:then:",
fn: function (path,options,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readDir_options_callback_(path,options,(function(apiError,fileNames,stat,stats){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextBlock)._valueWithPossibleArguments_([fileNames,stat,stats]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,fileNames:fileNames,stat:stat,stats:stats},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"readDir:options:then:",{path:path,options:options,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["readDir:options:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readDir:then:",
fn: function (path,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readDir_options_then_(path,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readDir:then:",{path:path,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["readDir:options:then:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:options:callback:",
fn: function (path,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("readFile",[path,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:options:callback:",{path:path,options:options,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:options:then:",
fn: function (path,options,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readFile_options_then_failed_(path,options,nextBlock,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:options:then:",{path:path,options:options,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["readFile:options:then:failed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:options:then:failed:",
fn: function (path,options,nextBlock,failedBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readFile_options_callback_(path,options,(function(apiError,data,stat,rangeInfo){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
_st(self)._onFailed_(err);
return _st(failedBlock)._value_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextBlock)._valueWithPossibleArguments_([data,stat,rangeInfo]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,data:data,stat:stat,rangeInfo:rangeInfo},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:options:then:failed:",{path:path,options:options,nextBlock:nextBlock,failedBlock:failedBlock},smalltalk.DrClient)})},
messageSends: ["readFile:options:callback:", "ifError:do:else:", "onFailed:", "value:", "valueWithPossibleArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:then:",
fn: function (path,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readFile_options_then_(path,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:then:",{path:path,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["readFile:options:then:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:then:failed:",
fn: function (path,nextBlock,failedBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readFile_options_then_failed_(path,nil,nextBlock,failedBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:then:failed:",{path:path,nextBlock:nextBlock,failedBlock:failedBlock},smalltalk.DrClient)})},
messageSends: ["readFile:options:then:failed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._remove_callback_(path,(function(apiError,stat){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,stat:stat},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:",{path:path},smalltalk.DrClient)})},
messageSends: ["remove:callback:", "ifError:do:else:", "onFailed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:callback:",
fn: function (path,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("remove",[path,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:callback:",{path:path,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("reset",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "signOut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._signOut_((function(apiError){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"signOut",{},smalltalk.DrClient)})},
messageSends: ["signOut:", "ifError:do:else:", "onFailed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "signOut:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("signOut",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"signOut:",{callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "stat:options:callback:",
fn: function (path,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("stat",[path,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"stat:options:callback:",{path:path,options:options,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "stat:options:then:",
fn: function (path,options,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stat_callback_(path,(function(apiError,stat,stats){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextBlock)._valueWithPossibleArguments_([stat,stats]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,stat:stat,stats:stats},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stat:options:then:",{path:path,options:options,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["stat:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "stat:then:",
fn: function (path,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stat_options_then_(path,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"stat:then:",{path:path,nextBlock:nextBlock},smalltalk.DrClient)})},
messageSends: ["stat:options:then:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapError:",
fn: function (jsRawError){
var self=this;
function $DrApiError(){return smalltalk.DrApiError||(typeof DrApiError=="undefined"?nil:DrApiError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrApiError())._protoProxy_(jsRawError);
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapError:",{jsRawError:jsRawError},smalltalk.DrClient)})},
messageSends: ["protoProxy:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFile:data:",
fn: function (path,data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._writeFile_data_options_(path,data,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeFile:data:",{path:path,data:data},smalltalk.DrClient)})},
messageSends: ["writeFile:data:options:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFile:data:options:",
fn: function (path,data,options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._writeFile_data_options_callback_(path,data,options,(function(apiError,stat){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,stat:stat},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeFile:data:options:",{path:path,data:data,options:options},smalltalk.DrClient)})},
messageSends: ["writeFile:data:options:callback:", "ifError:do:else:", "onFailed:"]}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFile:data:options:callback:",
fn: function (path,data,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("writeFile",[path,data,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeFile:data:options:callback:",{path:path,data:data,options:options,callback:callback},smalltalk.DrClient)})},
messageSends: ["forwardMessage:withArguments:"]}),
smalltalk.DrClient);


smalltalk.DrClient.klass.iVarNames = ['default','defaultApiKey','defaultAuthDriverType'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=_st(self)._key_(_st(self)._defaultApiKey());
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.DrClient.klass)})},
messageSends: ["ifNil:", "key:", "defaultApiKey"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "default:",
fn: function (aDrClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=aDrClient;
return self}, function($ctx1) {$ctx1.fill(self,"default:",{aDrClient:aDrClient},smalltalk.DrClient.klass)})},
messageSends: []}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultApiKey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultApiKey"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultApiKey"]="lT8r2O3iMCA=|ULla/D4WPtfkec3nxbtR+V861w9E+U9+krMlTYrV/A==";
$1=self["@defaultApiKey"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultApiKey",{},smalltalk.DrClient.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultApiKey:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##set api key: ").__comma(_st(aString)._asString()));
self["@defaultApiKey"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultApiKey:",{aString:aString},smalltalk.DrClient.klass)})},
messageSends: ["log:", ",", "asString"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAuthDriverType",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultAuthDriverType"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultAuthDriverType"]="redirect";
$1=self["@defaultAuthDriverType"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAuthDriverType",{},smalltalk.DrClient.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAuthDriverType:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##set auth driver: ").__comma(_st(aString)._asString()));
self["@defaultAuthDriverType"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultAuthDriverType:",{aString:aString},smalltalk.DrClient.klass)})},
messageSends: ["log:", ",", "asString"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DrClient.klass)})},
messageSends: []}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
fn: function (apiKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._key_sandbox_(apiKey,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:",{apiKey:apiKey},smalltalk.DrClient.klass)})},
messageSends: ["key:sandbox:"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key:sandbox:",
fn: function (apiKey,aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._options_(smalltalk.HashedCollection._fromPairs_([_st("key").__minus_gt(apiKey),_st("sandbox").__minus_gt(aBoolean)]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:sandbox:",{apiKey:apiKey,aBoolean:aBoolean},smalltalk.DrClient.klass)})},
messageSends: ["options:", "->"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
fn: function (optionsDic){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoOptions_(optionsDic));
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{optionsDic:optionsDic},smalltalk.DrClient.klass)})},
messageSends: ["protoProxy:", "protoOptions:"]}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoOptions:",
fn: function (optionsDic){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Dropbox.Client(optionsDic);
return self}, function($ctx1) {$ctx1.fill(self,"protoOptions:",{optionsDic:optionsDic},smalltalk.DrClient.klass)})},
messageSends: []}),
smalltalk.DrClient.klass);


