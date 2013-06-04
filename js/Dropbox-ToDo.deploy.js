smalltalk.addPackage('Dropbox-ToDo');
smalltalk.addClass('DrToDo', smalltalk.MobileToDo, [], 'Dropbox-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "observeStorage",
fn: function (){
var self=this;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(_st(self)._storage())._announcer())._on_do_($DrAnnouncement(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._updateListPart();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(_st(self)._storage())._client())._announcer())._on_do_($DrAnnouncement(),(function(ann){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(ann)._kind()).__eq("apiError");
if(smalltalk.assert($1)){
return _st(self)._showErrorFrom_(ann);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeStorage",{},smalltalk.DrToDo)})},
messageSends: ["on:do:", "updateListPart", "announcer", "storage", "ifTrue:", "showErrorFrom:", "=", "kind", "client"]}),
smalltalk.DrToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "preOpen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MobileToDo.fn.prototype._preOpen.apply(_st(self), []);
_st(self)._observeStorage();
return self}, function($ctx1) {$ctx1.fill(self,"preOpen",{},smalltalk.DrToDo)})},
messageSends: ["preOpen", "observeStorage"]}),
smalltalk.DrToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "showErrorFrom:",
fn: function (anAnnouncement){
var self=this;
var status;
function $DrApiError(){return smalltalk.DrApiError||(typeof DrApiError=="undefined"?nil:DrApiError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
status=_st(_st(anAnnouncement)._detail())._status();
$1=_st(status).__eq(_st($DrApiError())._invalidToken());
if(smalltalk.assert($1)){
$2=_st(window)._alert_("Try authenticatation again");
return $2;
};
$3=_st(status).__eq(_st($DrApiError())._notFound());
if(smalltalk.assert($3)){
$4=_st(console)._log_(_st("File not found: ").__comma(_st(_st(anAnnouncement)._detail())._responseText()));
return $4;
};
$5=_st(status).__eq(_st($DrApiError())._overQuota());
if(smalltalk.assert($5)){
$6=_st(window)._alert_("Dropbox is full!!");
return $6;
};
$7=_st(status).__eq(_st($DrApiError())._rateLimited());
if(smalltalk.assert($7)){
$8=_st(window)._alert_("Too many updates. Try again later");
return $8;
};
$9=_st(status).__eq(_st($DrApiError())._networkError());
if(smalltalk.assert($9)){
$10=_st(window)._alert_("Network error. Try reconnect");
return $10;
};
_st(window)._alert_(_st("Dropbox api error: ").__comma(_st(status)._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"showErrorFrom:",{anAnnouncement:anAnnouncement,status:status},smalltalk.DrToDo)})},
messageSends: ["status", "detail", "ifTrue:", "alert:", "=", "invalidToken", "log:", ",", "responseText", "notFound", "overQuota", "rateLimited", "networkError", "asString"]}),
smalltalk.DrToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "storageClass",
fn: function (){
var self=this;
function $DrToDoStorage(){return smalltalk.DrToDoStorage||(typeof DrToDoStorage=="undefined"?nil:DrToDoStorage)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$DrToDoStorage();
return $1;
}, function($ctx1) {$ctx1.fill(self,"storageClass",{},smalltalk.DrToDo)})},
messageSends: []}),
smalltalk.DrToDo);


smalltalk.addMethod(
smalltalk.method({
selector: "openThen:",
fn: function (nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._current())._storage())._ensureAuthThen_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._current())._start();
_st(nextBlock)._value();
return _st(console)._log_("##todo opened");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"openThen:",{nextBlock:nextBlock},smalltalk.DrToDo.klass)})},
messageSends: ["ensureAuthThen:", "start", "current", "value", "log:", "storage"]}),
smalltalk.DrToDo.klass);


smalltalk.addClass('DrToDoStorage', smalltalk.MobileToDoStorage, ['announcer'], 'Dropbox-ToDo');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.DrToDoStorage)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
fn: function (){
var self=this;
function $DrClient(){return smalltalk.DrClient||(typeof DrClient=="undefined"?nil:DrClient)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrClient())._default();
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.DrToDoStorage)})},
messageSends: ["default"]}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureAuthThen:",
fn: function (nextBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._client())._isAuthenticated();
if(smalltalk.assert($1)){
_st(nextBlock)._value();
} else {
_st(_st(self)._client())._authenticateThen_(nextBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureAuthThen:",{nextBlock:nextBlock},smalltalk.DrToDoStorage)})},
messageSends: ["ifTrue:ifFalse:", "value", "authenticateThen:", "client", "isAuthenticated"]}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initClient",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._client())._initAuthDriver();
return self}, function($ctx1) {$ctx1.fill(self,"initClient",{},smalltalk.DrToDoStorage)})},
messageSends: ["initAuthDriver", "client"]}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MobileToDoStorage.fn.prototype._initialize.apply(_st(self), []);
_st(self)._initClient();
self["@announcer"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DrToDoStorage)})},
messageSends: ["initialize", "initClient"]}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "loadItems",
fn: function (){
var self=this;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $MobileToDoItem(){return smalltalk.MobileToDoItem||(typeof MobileToDoItem=="undefined"?nil:MobileToDoItem)}
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
_st(self)._ensureAuthThen_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._client())._readFile_then_("MobileToDoList",(function(jsonStr){
var loadedJson;
return smalltalk.withContext(function($ctx3) {
$1=jsonStr;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
_st($2)._initItems();
$3=_st($2)._saveItems();
$3;
self["@items"]=[];
$4=self["@items"];
throw $early=[$4];
} else {
$1;
};
_st(console)._log_(_st("#loadItems: ").__comma(jsonStr));
loadedJson=_st($JSON())._parse_(jsonStr);
loadedJson;
self["@items"]=_st(loadedJson)._collect_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st($MobileToDoItem())._fromDictionary_(each);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
self["@items"];
return _st(_st(self)._announcer())._announce_(_st($DrAnnouncement())._kind_detail_("storage","saveItems"));
}, function($ctx3) {$ctx3.fillBlock({jsonStr:jsonStr,loadedJson:loadedJson},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"loadItems",{},smalltalk.DrToDoStorage)})},
messageSends: ["ensureAuthThen:", "readFile:then:", "ifNil:", "initItems", "saveItems", "log:", ",", "parse:", "collect:", "fromDictionary:", "announce:", "kind:detail:", "announcer", "client"]}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "saveItems",
fn: function (){
var self=this;
var jsonStr;
function $DrAnnouncement(){return smalltalk.DrAnnouncement||(typeof DrAnnouncement=="undefined"?nil:DrAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
jsonStr=_st(_st(self)._items())._asJSONString();
_st(_st(self)._client())._writeFile_data_("MobileToDoList",jsonStr);
_st(console)._log_(_st("saveItems: ").__comma(jsonStr));
_st(_st(self)._announcer())._announce_(_st($DrAnnouncement())._kind_detail_("storage","saveItems"));
return self}, function($ctx1) {$ctx1.fill(self,"saveItems",{jsonStr:jsonStr},smalltalk.DrToDoStorage)})},
messageSends: ["asJSONString", "items", "writeFile:data:", "client", "log:", ",", "announce:", "kind:detail:", "announcer"]}),
smalltalk.DrToDoStorage);



