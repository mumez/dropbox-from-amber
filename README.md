DropboxFromAmber
==================

Newer:
[Dropbox Datastore API](https://www.dropbox.com/developers/datastore) & [dropbox.js](https://github.com/dropbox/dropbox-js) wrapper for Amber Smalltalk.

Currently, new version is not documented yet. No sample codes. But [Dropbox-Datastore.st](https://github.com/mumez/dropbox-from-amber/blob/master/st/Dropbox-Datastore.st) is a package for the Datastore API support.

Legacy:
[dropbox.js](https://github.com/dropbox/dropbox-js) wrapper for Amber Smalltalk

## Installation ##
Just copy and merge the whole directory to your Amber Smalltalk home. 
Use copyAll.sh or copyAll.bat, according to your platform.

## Usage ##
```Smalltalk
| dropboxCli |
dropboxCli := DrClient default.
dropboxCli authenticateThen: [
  dropboxCli writeFile: 'hello.txt' data: 'world'.
].
```
### Setting API key ###
By default, DrClient create 'Amber_ToDo_Demo' app folder to your dropbox (for the convenience of the example below). You can change the app folder by obtaining your own [API key from dropbox](https://www.dropbox.com/developers/core).

API key can be set by <code>DrClient defaultApiKey: 'encoded api key'</code>. The method only accepts encoded API key for security reasons. Encoding can be done by [Dropbox API key encoder](https://dl-web.dropbox.com/spa/pjlfdak1tmznswp/api_keys.js/public/index.html).

### Changing Authentication Driver ###
DrClient's default authentication driver is [Redirect](https://github.com/dropbox/dropbox-js/blob/master/doc/auth_drivers.md#dropboxdriversredirect). It is suitable in most cases.

However, in mobile devises, [Cordova driver](https://github.com/dropbox/dropbox-js/blob/master/doc/auth_drivers.md#dropboxdriverscordova) would be better. 

You can explicitly set the driver by <code>DrClient defaultAuthDriverType:'redirect|popup|chrome|cordova|nodeserver'</code>. Please read dropbox.js [authentication drivers ](https://github.com/dropbox/dropbox-js/blob/master/doc/auth_drivers.md) document for the differences.

[drop-todo.html](https://github.com/mumez/dropbox-from-amber/blob/master/drop-todo.html) is the example of setting API key and auth driver from JavaScript side.

```javascript
smalltalk.DrClient._defaultApiKey_('lT8r2O3iMCA=|ULla/D4WPtfkec3nxbtR+V861w9E+U9+krMlTYrV/A==');
smalltalk.DrClient._defaultAuthDriverType_('cordova');
```

## Example ##

### Extended ToDoList Example ###
[dropboxFromAmber](https://github.com/mumez/dropbox-from-amber) includes an extended ToDoList example. While the original [jqmFromAmber example](https://github.com/mumez/jqm-from-amber) stores data to html5 localStorage, this version saves tasks to Dropbox.

How to try the example:

0. install the demo prerequisite -- [jqmFromAmber](https://github.com/mumez/jqm-from-amber). It is used for ToDoList UI.
1. start amber server
2. open the demo page ([http://localhost:4000/dropboxFromAmber.html](http://localhost:4000/dropboxFromAmber.html)) with your favorite web browser.

See the 'Dropbox-ToDo' package for details.

## License ##
[MIT license](http://opensource.org/licenses/MIT)
