smalltalk.addPackage('Dropbox-ToDo');
smalltalk.addClass('DrToDo', smalltalk.MobileToDo, [], 'Dropbox-ToDo');
smalltalk.DrToDo.comment="DrToDo main"
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MobileToDo.fn.prototype._initialize.apply(_st(self), []);
_st(self)._observeStorage();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DrToDo)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self observeStorage",
messageSends: ["initialize", "observeStorage"],
referencedClasses: []
}),
smalltalk.DrToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "observeStorage",
category: 'private',
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
args: [],
source: "observeStorage\x0a\x09self storage announcer on: DrAnnouncement do: [:ann | \x0a\x09\x09self updateListPart\x0a\x09].\x0a\x09\x0a\x09self storage client announcer on: DrAnnouncement do: [:ann | \x0a\x09\x09ann kind = #apiError ifTrue: [\x0a\x09\x09\x09self showErrorFrom: ann\x0a\x09\x09]\x0a\x09]",
messageSends: ["on:do:", "updateListPart", "announcer", "storage", "ifTrue:", "showErrorFrom:", "=", "kind", "client"],
referencedClasses: ["DrAnnouncement"]
}),
smalltalk.DrToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "showErrorFrom:",
category: 'private',
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
args: ["anAnnouncement"],
source: "showErrorFrom: anAnnouncement\x0a\x09| status |\x0a\x09status := anAnnouncement detail status.\x0a\x09\x0a\x09status = DrApiError invalidToken ifTrue: [^window alert: 'Try authenticatation again'].\x0a\x09status = DrApiError notFound ifTrue: [^console log: 'File not found: ', anAnnouncement detail responseText].\x0a\x09status = DrApiError overQuota ifTrue: [^window alert: 'Dropbox is full!!'].\x0a\x09status = DrApiError rateLimited ifTrue: [^window alert: 'Too many updates. Try again later'].\x0a\x09status = DrApiError networkError ifTrue: [^window alert: 'Network error. Try reconnect'].\x0a\x09\x0a\x09window alert: ('Dropbox api error: ', status asString).",
messageSends: ["status", "detail", "ifTrue:", "alert:", "=", "invalidToken", "log:", ",", "responseText", "notFound", "overQuota", "rateLimited", "networkError", "asString"],
referencedClasses: ["DrApiError"]
}),
smalltalk.DrToDo);

smalltalk.addMethod(
smalltalk.method({
selector: "storageClass",
category: 'factory',
fn: function (){
var self=this;
function $DrToDoStorage(){return smalltalk.DrToDoStorage||(typeof DrToDoStorage=="undefined"?nil:DrToDoStorage)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$DrToDoStorage();
return $1;
}, function($ctx1) {$ctx1.fill(self,"storageClass",{},smalltalk.DrToDo)})},
args: [],
source: "storageClass\x0a\x09^ DrToDoStorage",
messageSends: [],
referencedClasses: ["DrToDoStorage"]
}),
smalltalk.DrToDo);



smalltalk.addClass('DrToDoStorage', smalltalk.MobileToDoStorage, ['announcer'], 'Dropbox-ToDo');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.DrToDoStorage)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [announcer := Announcer new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
category: 'accessing',
fn: function (){
var self=this;
function $DrClient(){return smalltalk.DrClient||(typeof DrClient=="undefined"?nil:DrClient)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DrClient())._default();
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.DrToDoStorage)})},
args: [],
source: "client\x0a\x09^ DrClient default",
messageSends: ["default"],
referencedClasses: ["DrClient"]
}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureAuthThen:",
category: 'actions',
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
args: ["nextBlock"],
source: "ensureAuthThen: nextBlock\x0a\x09self client isAuthenticated ifTrue: [nextBlock value] ifFalse: [\x0a\x09\x09self client authenticateThen: nextBlock\x09\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "value", "authenticateThen:", "client", "isAuthenticated"],
referencedClasses: []
}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initClient",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._client())._initAuthDriverRedirect();
return self}, function($ctx1) {$ctx1.fill(self,"initClient",{},smalltalk.DrToDoStorage)})},
args: [],
source: "initClient\x0a\x09self client initAuthDriverRedirect",
messageSends: ["initAuthDriverRedirect", "client"],
referencedClasses: []
}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MobileToDoStorage.fn.prototype._initialize.apply(_st(self), []);
_st(self)._initClient();
self["@announcer"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DrToDoStorage)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initClient.\x0a\x09announcer := nil\x0a\x09",
messageSends: ["initialize", "initClient"],
referencedClasses: []
}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "loadItems",
category: 'private',
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
args: [],
source: "loadItems\x0a\x09self ensureAuthThen: [\x0a\x09\x09self client readFile: 'MobileToDoList' then: [:jsonStr | | loadedJson |\x0a\x09\x09\x09jsonStr ifNil: [self initItems; saveItems. ^ items := #()].\x0a\x09\x09\x09console log: '#loadItems: ', jsonStr.\x0a\x09\x09\x09loadedJson := JSON parse: jsonStr.\x0a\x09\x09\x09items := loadedJson collect: [ :each | MobileToDoItem fromDictionary: each].\x0a\x09\x09\x09self announcer announce: (DrAnnouncement kind: #storage detail: #saveItems)\x0a\x09\x09]\x0a\x09]",
messageSends: ["ensureAuthThen:", "readFile:then:", "ifNil:", "initItems", "saveItems", "log:", ",", "parse:", "collect:", "fromDictionary:", "announce:", "kind:detail:", "announcer", "client"],
referencedClasses: ["JSON", "MobileToDoItem", "DrAnnouncement"]
}),
smalltalk.DrToDoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "saveItems",
category: 'private',
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
args: [],
source: "saveItems\x0a\x09| jsonStr |\x0a\x09jsonStr := self items asJSONString.\x0a\x09self client writeFile: 'MobileToDoList' data: jsonStr.\x0a\x09console log: 'saveItems: ', jsonStr.\x0a\x09self announcer announce: (DrAnnouncement kind: #storage detail: #saveItems)",
messageSends: ["asJSONString", "items", "writeFile:data:", "client", "log:", ",", "announce:", "kind:detail:", "announcer"],
referencedClasses: ["DrAnnouncement"]
}),
smalltalk.DrToDoStorage);



