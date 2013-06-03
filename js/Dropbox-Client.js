smalltalk.addPackage('Dropbox-Client');
smalltalk.addClass('DrAnnouncement', smalltalk.Object, ['kind', 'detail'], 'Dropbox-Client');
smalltalk.addMethod(
smalltalk.method({
selector: "detail",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@detail"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"detail",{},smalltalk.DrAnnouncement)})},
args: [],
source: "detail\x0a\x09^detail",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "detail:",
category: 'accessing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@detail"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"detail:",{aSymbol:aSymbol},smalltalk.DrAnnouncement)})},
args: ["aSymbol"],
source: "detail: aSymbol\x0a\x09detail := aSymbol",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "kind",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kind"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kind",{},smalltalk.DrAnnouncement)})},
args: [],
source: "kind\x0a\x09^kind",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "kind:",
category: 'accessing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kind"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"kind:",{aSymbol:aSymbol},smalltalk.DrAnnouncement)})},
args: ["aSymbol"],
source: "kind: aSymbol\x0a\x09kind := aSymbol",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrAnnouncement);


smalltalk.addMethod(
smalltalk.method({
selector: "apiError",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._kind_("apiError");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiError",{},smalltalk.DrAnnouncement.klass)})},
args: [],
source: "apiError\x0a\x09^self kind: #apiError",
messageSends: ["kind:"],
referencedClasses: []
}),
smalltalk.DrAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._kind_("client");
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.DrAnnouncement.klass)})},
args: [],
source: "client\x0a\x09^self kind: #client",
messageSends: ["kind:"],
referencedClasses: []
}),
smalltalk.DrAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "kind:",
category: 'instance creation',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._kind_detail_(aSymbol,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"kind:",{aSymbol:aSymbol},smalltalk.DrAnnouncement.klass)})},
args: ["aSymbol"],
source: "kind: aSymbol\x0a\x09^self kind: aSymbol detail: nil",
messageSends: ["kind:detail:"],
referencedClasses: []
}),
smalltalk.DrAnnouncement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "kind:detail:",
category: 'instance creation',
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
args: ["aSymbol", "detail"],
source: "kind: aSymbol detail: detail\x0a\x09^self new kind: aSymbol; detail: detail",
messageSends: ["kind:", "new", "detail:"],
referencedClasses: []
}),
smalltalk.DrAnnouncement.klass);


smalltalk.addClass('DrDrivers', smalltalk.Object, [], 'Dropbox-Client');

smalltalk.addMethod(
smalltalk.method({
selector: "chrome:",
category: 'instance creation',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Cordova",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"chrome:",{args:args},smalltalk.DrDrivers.klass)})},
args: ["args"],
source: "chrome: args\x0a\x09^ self named: 'Cordova' arguments: args",
messageSends: ["named:arguments:"],
referencedClasses: []
}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cordova:",
category: 'instance creation',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Cordova",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cordova:",{args:args},smalltalk.DrDrivers.klass)})},
args: ["args"],
source: "cordova: args\x0a\x09^ self named: 'Cordova' arguments: args",
messageSends: ["named:arguments:"],
referencedClasses: []
}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:",
category: 'instance creation',
fn: function (className){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	return Dropbox.Drivers[className]
	;
return self}, function($ctx1) {$ctx1.fill(self,"named:",{className:className},smalltalk.DrDrivers.klass)})},
args: ["className"],
source: "named: className\x0a\x09<\x0a\x09return Dropbox.Drivers[className]\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:arguments:",
category: 'instance creation',
fn: function (className,args){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	return new Dropbox.Drivers[className](args)
	;
return self}, function($ctx1) {$ctx1.fill(self,"named:arguments:",{className:className,args:args},smalltalk.DrDrivers.klass)})},
args: ["className", "args"],
source: "named: className arguments: args\x0a\x09<\x0a\x09return new Dropbox.Drivers[className](args)\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeServer:",
category: 'instance creation',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("NodeServer",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodeServer:",{args:args},smalltalk.DrDrivers.klass)})},
args: ["args"],
source: "nodeServer: args\x0a\x09^ self named: 'NodeServer' arguments: args",
messageSends: ["named:arguments:"],
referencedClasses: []
}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "popup:",
category: 'instance creation',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Popup",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"popup:",{args:args},smalltalk.DrDrivers.klass)})},
args: ["args"],
source: "popup: args\x0a\x09^ self named: 'Popup' arguments: args",
messageSends: ["named:arguments:"],
referencedClasses: []
}),
smalltalk.DrDrivers.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "redirect:",
category: 'instance creation',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._named_arguments_("Redirect",args);
return $1;
}, function($ctx1) {$ctx1.fill(self,"redirect:",{args:args},smalltalk.DrDrivers.klass)})},
args: ["args"],
source: "redirect: args\x0a\x09^ self named: 'Redirect' arguments: args",
messageSends: ["named:arguments:"],
referencedClasses: []
}),
smalltalk.DrDrivers.klass);


smalltalk.addClass('DrProxy', smalltalk.JSObjectProxy, ['className'], 'Dropbox-Client');
smalltalk.addMethod(
smalltalk.method({
selector: "className",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@className"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"className",{},smalltalk.DrProxy)})},
args: [],
source: "className\x0a\x09^className",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "className:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@className"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"className:",{aString:aString},smalltalk.DrProxy)})},
args: ["aString"],
source: "className: aString\x0a\x09className := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'debugging',
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
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09variables at: '#className' put: self className.\x0a\x09anInspector setLabel: self printString.\x0a\x09self addObjectVariablesTo: variables.\x0a\x09anInspector setVariables: variables",
messageSends: ["new", "at:put:", "jsObject", "className", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onClose:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("close",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onClose:",{eventBlock:eventBlock},smalltalk.DrProxy)})},
args: ["eventBlock"],
source: "onClose: eventBlock\x0a\x09self on: 'close' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("error",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{eventBlock:eventBlock},smalltalk.DrProxy)})},
args: ["eventBlock"],
source: "onError: eventBlock\x0a\x09self on: 'error' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpen:",
category: 'events',
fn: function (eventBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_("open",eventBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onOpen:",{eventBlock:eventBlock},smalltalk.DrProxy)})},
args: ["eventBlock"],
source: "onOpen: eventBlock\x0a\x09self on: 'open' do: eventBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.DrProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st("a ").__comma(_st(_st(self)._className())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.DrProxy)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'a ', self className asString",
messageSends: ["nextPutAll:", ",", "asString", "className"],
referencedClasses: []
}),
smalltalk.DrProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:protoProxy:",
category: 'instance creation',
fn: function (className,protoProxy){
var self=this;
var inst;
return smalltalk.withContext(function($ctx1) { 
var $1;
inst=_st(self)._basicNew();
_st(inst)._className_(className);
_st(inst)._jsObject_(_st(protoProxy)._jsObject());
_st(inst)._initialize();
$1=inst;
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:protoProxy:",{className:className,protoProxy:protoProxy,inst:inst},smalltalk.DrProxy.klass)})},
args: ["className", "protoProxy"],
source: "classNamed: className protoProxy: protoProxy\x0a\x09| inst |\x0a\x09inst := self basicNew.\x0a\x09inst className: className.\x0a\x09inst jsObject: protoProxy jsObject.\x0a\x09inst initialize.\x0a\x09^inst",
messageSends: ["basicNew", "className:", "jsObject:", "jsObject", "initialize"],
referencedClasses: []
}),
smalltalk.DrProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoNew());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.DrProxy.klass)})},
args: [],
source: "new\x0a\x09^self protoProxy: self protoNew",
messageSends: ["protoProxy:", "protoNew"],
referencedClasses: []
}),
smalltalk.DrProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return nil;
}, function($ctx1) {$ctx1.fill(self,"protoNew",{},smalltalk.DrProxy.klass)})},
args: [],
source: "protoNew\x0a\x09self subclassResponsibility.\x0a\x09^nil",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.DrProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoProxy:",
category: 'instance creation',
fn: function (protoProxy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._classNamed_protoProxy_(_st(self)._asString(),protoProxy);
return $1;
}, function($ctx1) {$ctx1.fill(self,"protoProxy:",{protoProxy:protoProxy},smalltalk.DrProxy.klass)})},
args: ["protoProxy"],
source: "protoProxy: protoProxy\x0a\x09^self classNamed: self asString protoProxy: protoProxy",
messageSends: ["classNamed:protoProxy:", "asString"],
referencedClasses: []
}),
smalltalk.DrProxy.klass);


smalltalk.addClass('DrApiError', smalltalk.DrProxy, [], 'Dropbox-Client');
smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['method'];
return self}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.DrApiError)})},
args: [],
source: "method\x0a\x09<return self['@jsObject']['method']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['method']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{arg:arg},smalltalk.DrApiError)})},
args: ["arg"],
source: "method: arg\x0a\x09<return self['@jsObject']['method']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("Dropbox.ApiError");
_st(aStream)._nextPutAll_(_st(":").__comma(_st(_st(self)._status())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.DrApiError)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'Dropbox.ApiError'.\x0a\x09aStream nextPutAll: ':', self status asString",
messageSends: ["nextPutAll:", ",", "asString", "status"],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "response",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['response'];
return self}, function($ctx1) {$ctx1.fill(self,"response",{},smalltalk.DrApiError)})},
args: [],
source: "response\x0a\x09<return self['@jsObject']['response']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "response:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['response']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"response:",{arg:arg},smalltalk.DrApiError)})},
args: ["arg"],
source: "response: arg\x0a\x09<return self['@jsObject']['response']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "responseText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['responseText'];
return self}, function($ctx1) {$ctx1.fill(self,"responseText",{},smalltalk.DrApiError)})},
args: [],
source: "responseText\x0a\x09<return self['@jsObject']['responseText']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "responseText:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['responseText']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"responseText:",{arg:arg},smalltalk.DrApiError)})},
args: ["arg"],
source: "responseText: arg\x0a\x09<return self['@jsObject']['responseText']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['status'];
return self}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.DrApiError)})},
args: [],
source: "status\x0a\x09<return self['@jsObject']['status']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "status:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['status']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"status:",{arg:arg},smalltalk.DrApiError)})},
args: ["arg"],
source: "status: arg\x0a\x09<return self['@jsObject']['status']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['url'];
return self}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.DrApiError)})},
args: [],
source: "url\x0a\x09<return self['@jsObject']['url']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['url']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{arg:arg},smalltalk.DrApiError)})},
args: ["arg"],
source: "url: arg\x0a\x09<return self['@jsObject']['url']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError);


smalltalk.addMethod(
smalltalk.method({
selector: "invalidMethod",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.INVALID_METHOD ;
return self}, function($ctx1) {$ctx1.fill(self,"invalidMethod",{},smalltalk.DrApiError.klass)})},
args: [],
source: "invalidMethod\x0a\x09<return Dropbox.ApiError.INVALID_METHOD >",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidParam",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.INVALID_PARAM;
return self}, function($ctx1) {$ctx1.fill(self,"invalidParam",{},smalltalk.DrApiError.klass)})},
args: [],
source: "invalidParam\x0a\x09<return Dropbox.ApiError.INVALID_PARAM>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidToken",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.INVALID_TOKEN;
return self}, function($ctx1) {$ctx1.fill(self,"invalidToken",{},smalltalk.DrApiError.klass)})},
args: [],
source: "invalidToken\x0a\x09<return Dropbox.ApiError.INVALID_TOKEN>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "networkError",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.NETWORK_ERROR;
return self}, function($ctx1) {$ctx1.fill(self,"networkError",{},smalltalk.DrApiError.klass)})},
args: [],
source: "networkError\x0a\x09<return Dropbox.ApiError.NETWORK_ERROR>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "notFound",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.NOT_FOUND;
return self}, function($ctx1) {$ctx1.fill(self,"notFound",{},smalltalk.DrApiError.klass)})},
args: [],
source: "notFound\x0a\x09<return Dropbox.ApiError.NOT_FOUND>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "oauthError",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.OAUTH_ERROR;
return self}, function($ctx1) {$ctx1.fill(self,"oauthError",{},smalltalk.DrApiError.klass)})},
args: [],
source: "oauthError\x0a\x09<return Dropbox.ApiError.OAUTH_ERROR>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overQuota",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.OVER_QUOTA;
return self}, function($ctx1) {$ctx1.fill(self,"overQuota",{},smalltalk.DrApiError.klass)})},
args: [],
source: "overQuota\x0a\x09<return Dropbox.ApiError.OVER_QUOTA>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rateLimited",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Dropbox.ApiError.RATE_LIMITED;
return self}, function($ctx1) {$ctx1.fill(self,"rateLimited",{},smalltalk.DrApiError.klass)})},
args: [],
source: "rateLimited\x0a\x09<return Dropbox.ApiError.RATE_LIMITED>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrApiError.klass);


smalltalk.addClass('DrClient', smalltalk.DrProxy, ['announcer'], 'Dropbox-Client');
smalltalk.DrClient.comment="DrClient defaultApiKey: 'your API key'.\x0a\x0adropboxCli := DrClient default.\x0adropboxCli authenticateThen: [\x0a  dropboxCli writeFile: 'hello.txt' data: 'world'.\x0a]."
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
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
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [announcer := Announcer new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "appHash",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("appHash",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"appHash",{},smalltalk.DrClient)})},
args: [],
source: "appHash\x0a\x09^ self forwardMessage: 'appHash' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authDriver:",
category: 'authentication',
fn: function (authDriver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("authDriver",[authDriver]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"authDriver:",{authDriver:authDriver},smalltalk.DrClient)})},
args: ["authDriver"],
source: "authDriver: authDriver\x0a\x09^ self forwardMessage: 'authDriver' withArguments: {authDriver}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authState",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['authState'];
return self}, function($ctx1) {$ctx1.fill(self,"authState",{},smalltalk.DrClient)})},
args: [],
source: "authState\x0a\x09<return self['@jsObject']['authState']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authState:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['authState']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"authState:",{arg:arg},smalltalk.DrClient)})},
args: ["arg"],
source: "authState: arg\x0a\x09<return self['@jsObject']['authState']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticate",
category: 'authentication',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._authenticateThen_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"authenticate",{},smalltalk.DrClient)})},
args: [],
source: "authenticate\x0a\x09^ self authenticateThen: []",
messageSends: ["authenticateThen:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticate:callback:",
category: 'authentication',
fn: function (options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("authenticate",[options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"authenticate:callback:",{options:options,callback:callback},smalltalk.DrClient)})},
args: ["options", "callback"],
source: "authenticate: options callback: callback\x0a\x09^ self forwardMessage: 'authenticate' withArguments: {options. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "authenticateThen:",
category: 'authentication',
fn: function (nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self)._authenticate_callback_(nil,(function(err,cli){
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
args: ["nextBlock"],
source: "authenticateThen: nextBlock\x0a\x09^ self authenticate: nil callback: [:err :cli |\x0a\x09\x09err ifNil: [self onAuthenticated. nextBlock value] ifNotNil: [self onAuthenticatationFailed: (self wrapError: err)].\x0a\x09]",
messageSends: ["authenticate:callback:", "ifNil:ifNotNil:", "onAuthenticated", "value", "onAuthenticatationFailed:", "wrapError:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
category: 'actions',
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
args: ["from", "to"],
source: "copyFrom: from to: to\x0a\x09^self copyFrom: from to: to callback: [:apiError :stat |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [].\x0a\x09]",
messageSends: ["copyFrom:to:callback:", "ifError:do:else:", "onFailed:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:callback:",
category: 'actions',
fn: function (from,to,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("copy",[from,to,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:callback:",{from:from,to:to,callback:callback},smalltalk.DrClient)})},
args: ["from", "to", "callback"],
source: "copyFrom: from to: to callback: callback\x0a\x09^ self forwardMessage: 'copy' withArguments: {from. to. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "credentials",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("credentials",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"credentials",{},smalltalk.DrClient)})},
args: [],
source: "credentials\x0a\x09^ self forwardMessage: 'credentials' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "dropboxUid",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("dropboxUid",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dropboxUid",{},smalltalk.DrClient)})},
args: [],
source: "dropboxUid\x0a\x09^ self forwardMessage: 'dropboxUid' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "findByName:pattern:options:callback:",
category: 'actions',
fn: function (path,namePattern,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("findByName",[path,namePattern,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findByName:pattern:options:callback:",{path:path,namePattern:namePattern,options:options,callback:callback},smalltalk.DrClient)})},
args: ["path", "namePattern", "options", "callback"],
source: "findByName: path pattern: namePattern options: options callback: callback\x0a\x09^ self forwardMessage: 'findByName' withArguments: {path. namePattern. options. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "findByName:pattern:options:then:",
category: 'actions',
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
args: ["path", "namePattern", "options", "nextBlock"],
source: "findByName: path pattern: namePattern options: options then: nextBlock\x0a\x09^self findByName: path pattern: namePattern callback: [:apiError :stats |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {stats}].\x0a\x09]",
messageSends: ["findByName:pattern:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "findByName:pattern:then:",
category: 'actions',
fn: function (path,namePattern,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._findByName_pattern_options_then_(path,namePattern,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findByName:pattern:then:",{path:path,namePattern:namePattern,nextBlock:nextBlock},smalltalk.DrClient)})},
args: ["path", "namePattern", "nextBlock"],
source: "findByName: path pattern: namePattern then: nextBlock\x0a\x09^self findByName: path pattern: namePattern options: nil then: nextBlock",
messageSends: ["findByName:pattern:options:then:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getUserInfo:callback:",
category: 'actions',
fn: function (options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("getUserInfo",[options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getUserInfo:callback:",{options:options,callback:callback},smalltalk.DrClient)})},
args: ["options", "callback"],
source: "getUserInfo: options callback: callback\x0a\x09^ self forwardMessage: 'getUserInfo' withArguments: {options. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getUserInfo:then:",
category: 'actions',
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
args: ["options", "nextBlock"],
source: "getUserInfo: options then: nextBlock\x0a\x09^ self getUserInfo: options callback: [:apiError :userInfo :jsonObject |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {userInfo. jsonObject}].\x0a\x09].",
messageSends: ["getUserInfo:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "getUserInfoThen:",
category: 'actions',
fn: function (normalBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._getUserInfo_then_(nil,normalBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getUserInfoThen:",{normalBlock:normalBlock},smalltalk.DrClient)})},
args: ["normalBlock"],
source: "getUserInfoThen: normalBlock\x0a\x09^ self getUserInfo: nil then: normalBlock",
messageSends: ["getUserInfo:then:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "ifError:do:else:",
category: 'private',
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
args: ["apiError", "errorBlock", "normalBlock"],
source: "ifError: apiError do: errorBlock else: normalBlock \x0a\x09\x09^apiError ifNil: [normalBlock value] ifNotNil: [errorBlock value: (self wrapError: apiError)].",
messageSends: ["ifNil:ifNotNil:", "value", "value:", "wrapError:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriver",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initAuthDriver_(_st(_st(self)._class())._defaultAuthDriverType());
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriver",{},smalltalk.DrClient)})},
args: [],
source: "initAuthDriver\x0a\x09self initAuthDriver: self class defaultAuthDriverType",
messageSends: ["initAuthDriver:", "defaultAuthDriverType", "class"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriver:",
category: 'initialization',
fn: function (driverSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initAuthDriver_options_(driverSymbol,smalltalk.HashedCollection._fromPairs_([]));
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriver:",{driverSymbol:driverSymbol},smalltalk.DrClient)})},
args: ["driverSymbol"],
source: "initAuthDriver: driverSymbol\x0a\x09self initAuthDriver: driverSymbol options: #{}",
messageSends: ["initAuthDriver:options:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriver:options:",
category: 'initialization',
fn: function (driverSymbol,optionsDic){
var self=this;
var driver;
function $DrDrivers(){return smalltalk.DrDrivers||(typeof DrDrivers=="undefined"?nil:DrDrivers)}
return smalltalk.withContext(function($ctx1) { 
driver=_st($DrDrivers())._perform_withArguments_(_st(driverSymbol).__comma(":"),[optionsDic]);
_st(console)._log_(_st("##authDriver: ").__comma(driverSymbol));
_st(self)._authDriver_(driver);
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriver:options:",{driverSymbol:driverSymbol,optionsDic:optionsDic,driver:driver},smalltalk.DrClient)})},
args: ["driverSymbol", "optionsDic"],
source: "initAuthDriver: driverSymbol options: optionsDic\x0a\x09| driver |\x0a\x09driver := DrDrivers perform: driverSymbol, ':' withArguments: {optionsDic}.\x0a\x09console log: '##authDriver: ', driverSymbol.\x0a\x09self authDriver: driver",
messageSends: ["perform:withArguments:", ",", "log:", "authDriver:"],
referencedClasses: ["DrDrivers"]
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriverCordova",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initAuthDriver_options_("cordova",smalltalk.HashedCollection._fromPairs_([_st("rememberUser").__minus_gt(true)]));
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriverCordova",{},smalltalk.DrClient)})},
args: [],
source: "initAuthDriverCordova\x0a\x09self initAuthDriver: #cordova options: #{'rememberUser'->true}.",
messageSends: ["initAuthDriver:options:", "->"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initAuthDriverRedirect",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initAuthDriver_options_("redirect",smalltalk.HashedCollection._fromPairs_([_st("rememberUser").__minus_gt(true)]));
return self}, function($ctx1) {$ctx1.fill(self,"initAuthDriverRedirect",{},smalltalk.DrClient)})},
args: [],
source: "initAuthDriverRedirect\x0a\x09self initAuthDriver: #redirect options: #{'rememberUser'->true}.",
messageSends: ["initAuthDriver:options:", "->"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.DrProxy.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DrClient)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "isAuthenticated",
category: 'authentication',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("isAuthenticated",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAuthenticated",{},smalltalk.DrClient)})},
args: [],
source: "isAuthenticated\x0a\x09^ self forwardMessage: 'isAuthenticated' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "mkDir:",
category: 'actions',
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
args: ["path"],
source: "mkDir: path\x0a\x09^self mkDir: path callback: [:apiError :stat |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [].\x0a\x09]",
messageSends: ["mkDir:callback:", "ifError:do:else:", "onFailed:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "mkDir:callback:",
category: 'actions',
fn: function (path,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("mkdir",[path,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mkDir:callback:",{path:path,callback:callback},smalltalk.DrClient)})},
args: ["path", "callback"],
source: "mkDir: path callback: callback\x0a\x09^ self forwardMessage: 'mkdir' withArguments: {path. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "moveFrom:to:",
category: 'actions',
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
args: ["from", "to"],
source: "moveFrom: from to: to\x0a\x09^self moveFrom: from to: to callback: [:apiError :stat |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [].\x0a\x09]",
messageSends: ["moveFrom:to:callback:", "ifError:do:else:", "onFailed:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "moveFrom:to:callback:",
category: 'actions',
fn: function (from,to,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("move",[from,to,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveFrom:to:callback:",{from:from,to:to,callback:callback},smalltalk.DrClient)})},
args: ["from", "to", "callback"],
source: "moveFrom: from to: to callback: callback\x0a\x09^ self forwardMessage: 'move' withArguments: {from. to. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthStateChange",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onAuthStateChange'];
return self}, function($ctx1) {$ctx1.fill(self,"onAuthStateChange",{},smalltalk.DrClient)})},
args: [],
source: "onAuthStateChange\x0a\x09<return self['@jsObject']['onAuthStateChange']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthStateChange:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onAuthStateChange']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"onAuthStateChange:",{arg:arg},smalltalk.DrClient)})},
args: ["arg"],
source: "onAuthStateChange: arg\x0a\x09<return self['@jsObject']['onAuthStateChange']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthenticatationFailed:",
category: 'events',
fn: function (anError){
var self=this;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##DrClient auth failed: ").__comma(_st(anError)._asString()));
_st(_st(self)._announcer())._announce_(_st(_st($DrAnnouncement())._apiError())._detail_(anError));
return self}, function($ctx1) {$ctx1.fill(self,"onAuthenticatationFailed:",{anError:anError},smalltalk.DrClient)})},
args: ["anError"],
source: "onAuthenticatationFailed: anError\x0a\x09console log: '##DrClient auth failed: ', anError asString.\x0a\x09\x0a\x09self announcer announce: (DrAnnouncement apiError detail: anError)",
messageSends: ["log:", ",", "asString", "announce:", "detail:", "apiError", "announcer"],
referencedClasses: ["DrAnnouncement"]
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onAuthenticated",
category: 'events',
fn: function (){
var self=this;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st(_st($DrAnnouncement())._client())._detail_("authenticated"));
return self}, function($ctx1) {$ctx1.fill(self,"onAuthenticated",{},smalltalk.DrClient)})},
args: [],
source: "onAuthenticated\x0a\x09\x22override if you like\x22\x0a\x09\x0a\x09self announcer announce: (DrAnnouncement client detail: #authenticated)",
messageSends: ["announce:", "detail:", "client", "announcer"],
referencedClasses: ["DrAnnouncement"]
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onError",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onError'];
return self}, function($ctx1) {$ctx1.fill(self,"onError",{},smalltalk.DrClient)})},
args: [],
source: "onError\x0a\x09<return self['@jsObject']['onError']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onError:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onError']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"onError:",{arg:arg},smalltalk.DrClient)})},
args: ["arg"],
source: "onError: arg\x0a\x09<return self['@jsObject']['onError']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onFailed:",
category: 'events',
fn: function (anError){
var self=this;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##DrClient failed: ").__comma(_st(anError)._asString()));
_st(_st(self)._announcer())._announce_(_st(_st($DrAnnouncement())._apiError())._detail_(anError));
return self}, function($ctx1) {$ctx1.fill(self,"onFailed:",{anError:anError},smalltalk.DrClient)})},
args: ["anError"],
source: "onFailed: anError\x0a\x09console log: '##DrClient failed: ', anError asString.\x0a\x09\x0a\x09self announcer announce: (DrAnnouncement apiError detail: anError)",
messageSends: ["log:", ",", "asString", "announce:", "detail:", "apiError", "announcer"],
referencedClasses: ["DrAnnouncement"]
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onXhr",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onXhr'];
return self}, function($ctx1) {$ctx1.fill(self,"onXhr",{},smalltalk.DrClient)})},
args: [],
source: "onXhr\x0a\x09<return self['@jsObject']['onXhr']>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "onXhr:",
category: 'accessing',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject']['onXhr']=arg;
return self}, function($ctx1) {$ctx1.fill(self,"onXhr:",{arg:arg},smalltalk.DrClient)})},
args: ["arg"],
source: "onXhr: arg\x0a\x09<return self['@jsObject']['onXhr']=arg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readDir:options:callback:",
category: 'actions',
fn: function (path,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("readdir",[path,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readDir:options:callback:",{path:path,options:options,callback:callback},smalltalk.DrClient)})},
args: ["path", "options", "callback"],
source: "readDir: path options: options callback: callback\x0a\x09^ self forwardMessage: 'readdir' withArguments: {path. options. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readDir:options:then:",
category: 'actions',
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
args: ["path", "options", "nextBlock"],
source: "readDir: path options: options then: nextBlock\x0a\x09^self readDir: path options: options callback: [:apiError :fileNames :stat :stats |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {fileNames. stat. stats}].\x0a\x09]",
messageSends: ["readDir:options:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readDir:then:",
category: 'actions',
fn: function (path,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readDir_options_then_(path,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readDir:then:",{path:path,nextBlock:nextBlock},smalltalk.DrClient)})},
args: ["path", "nextBlock"],
source: "readDir: path then: nextBlock\x0a\x09^self readDir: path options: nil then: nextBlock",
messageSends: ["readDir:options:then:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:options:callback:",
category: 'actions',
fn: function (path,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("readFile",[path,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:options:callback:",{path:path,options:options,callback:callback},smalltalk.DrClient)})},
args: ["path", "options", "callback"],
source: "readFile: path options: options callback: callback\x0a\x09^ self forwardMessage: 'readFile' withArguments: {path. options. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:options:then:",
category: 'actions',
fn: function (path,options,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readFile_options_callback_(path,options,(function(apiError,data,stat,rangeInfo){
return smalltalk.withContext(function($ctx2) {
return _st(self)._ifError_do_else_(apiError,(function(err){
return smalltalk.withContext(function($ctx3) {
return _st(self)._onFailed_(err);
}, function($ctx3) {$ctx3.fillBlock({err:err},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextBlock)._valueWithPossibleArguments_([data,stat,rangeInfo]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({apiError:apiError,data:data,stat:stat,rangeInfo:rangeInfo},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:options:then:",{path:path,options:options,nextBlock:nextBlock},smalltalk.DrClient)})},
args: ["path", "options", "nextBlock"],
source: "readFile: path options: options then: nextBlock\x0a\x09^self readFile: path options: options callback:  [:apiError :data :stat :rangeInfo |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {data. stat. rangeInfo}].\x0a\x09]",
messageSends: ["readFile:options:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "readFile:then:",
category: 'actions',
fn: function (path,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._readFile_options_then_(path,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFile:then:",{path:path,nextBlock:nextBlock},smalltalk.DrClient)})},
args: ["path", "nextBlock"],
source: "readFile: path then: nextBlock\x0a\x09^self readFile: path options: nil then: nextBlock",
messageSends: ["readFile:options:then:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'actions',
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
args: ["path"],
source: "remove: path\x0a\x09^self remove: path callback: [:apiError :stat |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [].\x0a\x09]",
messageSends: ["remove:callback:", "ifError:do:else:", "onFailed:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:callback:",
category: 'actions',
fn: function (path,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("remove",[path,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:callback:",{path:path,callback:callback},smalltalk.DrClient)})},
args: ["path", "callback"],
source: "remove: path callback: callback\x0a\x09^ self forwardMessage: 'remove' withArguments: {path. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("reset",[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.DrClient)})},
args: [],
source: "reset\x0a\x09^ self forwardMessage: 'reset' withArguments: #()",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "signOut",
category: 'actions',
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
args: [],
source: "signOut\x0a\x09^self signOut: [:apiError |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [].\x0a\x09]",
messageSends: ["signOut:", "ifError:do:else:", "onFailed:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "signOut:",
category: 'actions',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("signOut",[callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"signOut:",{callback:callback},smalltalk.DrClient)})},
args: ["callback"],
source: "signOut: callback\x0a\x09^ self forwardMessage: 'signOut' withArguments: {callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "stat:options:callback:",
category: 'actions',
fn: function (path,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("stat",[path,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"stat:options:callback:",{path:path,options:options,callback:callback},smalltalk.DrClient)})},
args: ["path", "options", "callback"],
source: "stat: path options: options callback: callback\x0a\x09^ self forwardMessage: 'stat' withArguments: {path. options. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "stat:options:then:",
category: 'actions',
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
args: ["path", "options", "nextBlock"],
source: "stat: path options: options then: nextBlock\x0a\x09^self stat: path callback: [:apiError :stat :stats |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [nextBlock valueWithPossibleArguments: {stat. stats}].\x0a\x09]",
messageSends: ["stat:callback:", "ifError:do:else:", "onFailed:", "valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "stat:then:",
category: 'actions',
fn: function (path,nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stat_options_then_(path,nil,nextBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"stat:then:",{path:path,nextBlock:nextBlock},smalltalk.DrClient)})},
args: ["path", "nextBlock"],
source: "stat: path then: nextBlock\x0a\x09^self stat: path options: nil then: nextBlock",
messageSends: ["stat:options:then:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapError:",
category: 'private',
fn: function (jsRawError){
var self=this;
function $DrApiError(){return smalltalk.DrApiError||(typeof DrApiError=="undefined"?nil:DrApiError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrApiError())._protoProxy_(jsRawError);
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapError:",{jsRawError:jsRawError},smalltalk.DrClient)})},
args: ["jsRawError"],
source: "wrapError: jsRawError\x0a\x09^ DrApiError protoProxy: jsRawError",
messageSends: ["protoProxy:"],
referencedClasses: ["DrApiError"]
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFile:data:",
category: 'actions',
fn: function (path,data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._writeFile_data_options_(path,data,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeFile:data:",{path:path,data:data},smalltalk.DrClient)})},
args: ["path", "data"],
source: "writeFile: path data: data\x0a\x09^self writeFile: path data: data options: nil",
messageSends: ["writeFile:data:options:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFile:data:options:",
category: 'actions',
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
args: ["path", "data", "options"],
source: "writeFile: path data: data options: options\x0a\x09^self writeFile: path data: data options: options callback: [:apiError :stat |\x0a\x09\x09self ifError: apiError do: [:err | self onFailed: err] else: [].\x0a\x09]",
messageSends: ["writeFile:data:options:callback:", "ifError:do:else:", "onFailed:"],
referencedClasses: []
}),
smalltalk.DrClient);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFile:data:options:callback:",
category: 'actions',
fn: function (path,data,options,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._forwardMessage_withArguments_("writeFile",[path,data,options,callback]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeFile:data:options:callback:",{path:path,data:data,options:options,callback:callback},smalltalk.DrClient)})},
args: ["path", "data", "options", "callback"],
source: "writeFile: path data: data options: options callback: callback\x0a\x09^ self forwardMessage: 'writeFile' withArguments: {path. data. options. callback}",
messageSends: ["forwardMessage:withArguments:"],
referencedClasses: []
}),
smalltalk.DrClient);


smalltalk.DrClient.klass.iVarNames = ['default','defaultApiKey','defaultAuthDriverType'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'accessing',
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
args: [],
source: "default\x0a\x09^ default ifNil: [default := self key: self defaultApiKey]",
messageSends: ["ifNil:", "key:", "defaultApiKey"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "default:",
category: 'accessing',
fn: function (aDrClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=aDrClient;
return self}, function($ctx1) {$ctx1.fill(self,"default:",{aDrClient:aDrClient},smalltalk.DrClient.klass)})},
args: ["aDrClient"],
source: "default: aDrClient\x0a\x09default := aDrClient",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultApiKey",
category: 'accessing',
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
args: [],
source: "defaultApiKey\x0a\x09\x22The default encoded key is for demo. Limited to 100 users\x22\x0a\x09\x0a\x09\x22You can get your API key from here: https://www.dropbox.com/developers/core\x22\x0a\x09\x22Encode the key by: https://dl-web.dropbox.com/spa/pjlfdak1tmznswp/api_keys.js/public/index.html\x22\x0a\x09\x0a\x09^ defaultApiKey ifNil: [defaultApiKey := 'lT8r2O3iMCA=|ULla/D4WPtfkec3nxbtR+V861w9E+U9+krMlTYrV/A==']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultApiKey:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##set api key: ").__comma(_st(aString)._asString()));
self["@defaultApiKey"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultApiKey:",{aString:aString},smalltalk.DrClient.klass)})},
args: ["aString"],
source: "defaultApiKey: aString\x0a\x09console log: '##set api key: ', aString asString.\x0a\x09defaultApiKey := aString",
messageSends: ["log:", ",", "asString"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAuthDriverType",
category: 'accessing',
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
args: [],
source: "defaultAuthDriverType\x0a\x0a\x09^ defaultAuthDriverType ifNil: [defaultAuthDriverType := 'redirect']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAuthDriverType:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st("##set auth driver: ").__comma(_st(aString)._asString()));
self["@defaultAuthDriverType"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultAuthDriverType:",{aString:aString},smalltalk.DrClient.klass)})},
args: ["aString"],
source: "defaultAuthDriverType: aString\x0a\x09console log: '##set auth driver: ', aString asString.\x0a\x09defaultAuthDriverType := aString",
messageSends: ["log:", ",", "asString"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'class initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DrClient.klass)})},
args: [],
source: "initialize\x0a\x09default := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
category: 'instance creation',
fn: function (apiKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._key_sandbox_(apiKey,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:",{apiKey:apiKey},smalltalk.DrClient.klass)})},
args: ["apiKey"],
source: "key: apiKey\x0a\x09^self key: apiKey sandbox: true",
messageSends: ["key:sandbox:"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key:sandbox:",
category: 'instance creation',
fn: function (apiKey,aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._options_(smalltalk.HashedCollection._fromPairs_([_st("key").__minus_gt(apiKey),_st("sandbox").__minus_gt(aBoolean)]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:sandbox:",{apiKey:apiKey,aBoolean:aBoolean},smalltalk.DrClient.klass)})},
args: ["apiKey", "aBoolean"],
source: "key: apiKey sandbox: aBoolean\x0a\x09^self options: #{'key'->apiKey. 'sandbox'-> aBoolean}",
messageSends: ["options:", "->"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
category: 'instance creation',
fn: function (optionsDic){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._protoProxy_(_st(self)._protoOptions_(optionsDic));
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{optionsDic:optionsDic},smalltalk.DrClient.klass)})},
args: ["optionsDic"],
source: "options: optionsDic\x0a\x09^self protoProxy: (self protoOptions: optionsDic)",
messageSends: ["protoProxy:", "protoOptions:"],
referencedClasses: []
}),
smalltalk.DrClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "protoOptions:",
category: 'instance creation',
fn: function (optionsDic){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Dropbox.Client(optionsDic);
return self}, function($ctx1) {$ctx1.fill(self,"protoOptions:",{optionsDic:optionsDic},smalltalk.DrClient.klass)})},
args: ["optionsDic"],
source: "protoOptions: optionsDic\x0a\x09<return new Dropbox.Client(optionsDic)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.DrClient.klass);


