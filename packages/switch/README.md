# @mat3e-ux/switch
A simple switch button.

![Basic view](https://mat3e.github.io/ux/img/switch.png "Basic view")

[**example**](https://mat3e.github.io/ux/#switch)

## Setup - npm
Install from npm:
```
npm i @mat3e-ux/switch
```
Simple one-time import:
```javascript
import '@mat3e-ux/switch';
```
**or** "manual" registration:
```javascript
import Switch from '@mat3e-ux/switch/component';

Switch.register();
```

## Usage
```html
<m3-switch></m3-switch>
<m3-switch round checked></m3-switch>
<m3-switch name="test" onchange="alert('changed!');"></m3-switch>
```

### Exposed CSS variables
```css
--m3-switch-color: #4fd69c;
```