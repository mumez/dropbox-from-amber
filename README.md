DropboxFromAmber
==================

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

By default, DrClient create 'Amber_ToDo_Demo' app folder to your dropbox (see below). You can change the app folder by obtaining your [API key from dropbox](https://www.dropbox.com/developers/core).

API key can be set by <code>DrClient defaultApiKey: 'your encoded api key'</code>. The method accepts an encoded API key for security reasons. Encoding can be done by [Dropbox API key encoder](https://dl-web.dropbox.com/spa/pjlfdak1tmznswp/api_keys.js/public/index.html).

## Examples ##

### Extended ToDoList Example ###
This is an extension of the basic ToDoList example for [jqmForAmber](https://github.com/mumez/jqm-from-amber).
Instead of storing data to html localStorage, tasks are stored to Dropbox.

0. install demo prerequisite: [jqmForAmber](https://github.com/mumez/jqm-from-amber). It is used for ToDoList UI.
1. start amber server
2. open the demo page ([http://localhost:4000/dropboxFromAmber.html](http://localhost:4000/dropboxFromAmber.html)) with your favorite web browser.

See the 'Dropbox-ToDo' package. There is a simple ToDoList application using JqmCanvas and html local storage.

## License ##
[MIT license](http://opensource.org/licenses/MIT)
