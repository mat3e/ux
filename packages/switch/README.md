[![Version](https://img.shields.io/npm/v/@mat3e-ux/switch.svg)](https://www.npmjs.com/package/@mat3e-ux/switch)

# @mat3e-ux/switch
A simple switch button

![Basic view](https://mat3e.github.io/ux/img/switch.png "Basic view")

[**example**](https://mat3e.github.io/ux/#switch)

## Setup

### CDN
```html
<script type="module" src="https://unpkg.com/@mat3e-ux/switch"></script>
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
Switch.register('just-switch');
```

## Usage
```html
<m3-switch></m3-switch>
<m3-switch round checked></m3-switch>
<m3-switch onchange="alert('changed!');"></m3-switch>
```

### Exposed CSS variables
```
--m3-switch-color: #4fd69c;
```

### Forms, accessibility
If not provided, `m3-switch` gets `role="checkbox"` and `tabindex="0"`. Moreover, there is `aria-checked` attribute reflecting the current state. Each click changes it from `"true"` to `"false"` and so on.

Switch can be mixed with HTML forms, e.g.:
```html
<form>
    <label>
        <m3-switch name="foo"></m3-switch> foo
    </label>

    <label for="bar">bar</label>
    <m3-switch name="bar" id="bar" value="started"></m3-switch>
    
    <label id="baz">baz</label>
    <m3-switch name="baz" aria-labelledby="baz"></m3-switch>

    <button>submit</button>
</form>
```
