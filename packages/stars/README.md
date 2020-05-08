[![Version](https://img.shields.io/npm/v/@mat3e-ux/stars.svg?style=flat-square)](https://www.npmjs.com/package/@mat3e-ux/stars)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/@mat3e-ux/stars)

# @mat3e-ux/stars
Display rating as stars (readonly)

★★★☆☆

[**LIVE EXAMPLE**](https://mat3e.github.io/ux/#stars)

## Setup

### CDN
```html
<script type="module" src="https://unpkg.com/@mat3e-ux/stars"></script>
```

### npm
Install from npm:
```
npm i @mat3e-ux/stars
```
Simple one-time import:
```javascript
import '@mat3e-ux/stars';
```
**or** "manual" registration:
```javascript
import Stars from '@mat3e-ux/stars/component';

// same as previously
Stars.register();

// registering as a different tag:
Stars.register('just-stars');
```

## Usage
<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/@mat3e-ux/stars"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<m3-stars max="5" current="4.62036"></m3-stars>
<m3-stars max="5" current="2.55" title="2.55"></m3-stars>
<m3-stars style="color: red" max="5" current="3.62036"></m3-stars>
```

### Overriding symbols
You can override a default ★ and ☆ symbols, setting static properties before registering the component:
```javascript
import Stars from "@mat3e-ux/stars/component";

Stars.empty = '💀';
Stars.full = '😄';
Stars.register();
```
**Note**: it will override symbols for all the `<m3-stars>` tags. 

Alternatively, you can reuse the component and create your own  with overriden symbols like: 
```javascript
import '@mat3e-ux/stars'; // <m3-stars> works as before
import Stars from "@mat3e-ux/stars/component";

// <m3-emoji> works with the below symbols
Stars.empty = '💀';
Stars.full = '😄';
customElements.define('m3-emoji', class extends Stars {});
```