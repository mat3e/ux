![build](https://github.com/mat3e/ux/workflows/Node.js%20CI/badge.svg)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# UX
Set of small Web Components which should have a positive impact on the web app UX.

## Components
* [m3-switch](https://github.com/mat3e/ux/tree/master/packages/switch)
* [m3-stars](https://github.com/mat3e/ux/tree/master/packages/stars)

### Inspirations

#### Ideas
- [clickable reactions](https://dev.to/binarforge/seven-useful-programming-habits) (e.g. with [Font Awesome](https://fontawesome.io/))
- highlighted text options - as [here](https://medium.com/@ttemplier/angular2-decorators-and-class-inheritance-905921dbd1b7)
- paragraph link - as [here](https://olingo.apache.org/doc/odata4/tutorials/action/tutorial_action.html#implement-an-action-processor)
- opening link in a new tab - option when `:hover` (extenstion for an anchor)
- estimated reading time - calculating as on [Medium](https://medium.com/@ttemplier/angular2-decorators-and-class-inheritance-905921dbd1b7); TL;DR option
- star rating (voting)

#### Nice libraries
- [Scrolline](https://github.com/anthonyly/Scrolline.js) - how much untill the end of the page
- [iziToast](https://github.com/dolce/iziToast) - perfect notifications
- [favico.js](https://github.com/ejci/favico.js) - whole new level of using favicons

## Roadmap
[] Minify published npm code and skip publishing *.spec.js files

[] Use JS private and static fields (when available in all the browsers). Or maybe just TypeScript?

[] [Form-associated custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example); [another source](https://web.dev/more-capable-form-controls/)
