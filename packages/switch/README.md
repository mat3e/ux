[![Version](https://img.shields.io/npm/v/@mat3e-ux/switch.svg)](https://www.npmjs.com/package/@mat3e-ux/switch)

# @mat3e-ux/switch
A simple switch button

![Basic view](https://mat3e.github.io/ux/img/switch.png "Basic view")

[**example**](https://mat3e.github.io/ux/#switch)

## Setup

### CDN
```html
<script type="module" src="http://unpkg.com/@mat3e-ux/switch"></script>
```

### npm
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

// same as previously
Switch.register();

// registering as a different tag:
customElements.define('just-switch', Switch);
```

## Usage
```html
<m3-switch></m3-switch>
<m3-switch round checked></m3-switch>
<m3-switch name="test" onchange="alert('changed!');"></m3-switch>
```

#### Exposed CSS variables
```
--m3-switch-color: #4fd69c;
```