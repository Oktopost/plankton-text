# Plankton Text
Text manipulation methods built on top of Plankton namespace.

## Initialize

``` javascript
var text = window.plankton.text;
```

## Capitalize

``` javascript
text.capitalize('myText'); // MyText
``` 

## Camelize

``` javascript
text.camelize('MyClassName'); // myClassName
text.camelize('my class name'); // myClassName
```