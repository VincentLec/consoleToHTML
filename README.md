# consoleToHTML

consoleToHTML.js is a script written in javascript to display `console.log`,`console.info`,`console.warn` and `console.error` messages in the browser console and also in an HTML page.

## Installation

Add the script consoleToHTML.js on the head of your html page

```html
<script src="consoleToHTML.js"></script>
```

## How to use it

```js
//First, define the container...
console.target(document.getElementById("log"));
//... and test
console.log("Hello World !","It's a new log.");
console.info("Console is working!");
console.warn("Danger!","⚡ hight voltage!");
let o = {error : "kaboum !"}
console.error("Something went wrong!",0);
```

## CSS Class
A span tag is created to contain each message. This tag has a `CSS class` corresponding to the type of console call. `CSS class` can be `log`,`info`,`warn` or `error`

Add your own CSS rules, for example :
```css
.log{color:black;}
.info{color:blue;}
.warn{color:orange;}
.error{color:red;}
```
