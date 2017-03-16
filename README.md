# Plankton Text
Text manipulation methods built on top of Plankton namespace.

## Initialize

``` javascript
var text = window.plankton.text;
```

Or

``` javascript
var text = require('plankton-text');
```

## Usage

### capitalize

``` javascript
text.capitalize('myText'); // MyText
``` 

### camelize

``` javascript
text.camelize('MyClassName'); // myClassName
text.camelize('my class name'); // myClassName
```

### ucwords
``` javascript
text.ucwords('my nice title'); // My Nice Title
```