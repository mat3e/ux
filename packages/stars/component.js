export default class Stars extends HTMLElement {
    static register() {
        customElements.define('m3-stars', Stars);
    }

    constructor() {
        super();
        this.full = Stars.full;
        this.empty = Stars.empty;
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const currentValue = +this.getAttribute('current') || 0;
        this.shadowRoot.innerHTML = `
        <style>:host{display:inline-block}span:before{position:absolute;content:'${this.full}';width:${currentValue%1}em;overflow:hidden}</style>
        ${getStarsString(parseInt(this.getAttribute('max')) || 0, currentValue, this.full, this.empty)}`;
    }
}

Stars.full = '★';
Stars.empty = '☆';

// future private method with private fields:
function getStarsString(max, current, full, empty) {
    if (current > max) {
        current = max;
    }
    const currentRounded = Math.ceil(current);
    const starsArr = range(currentRounded - 1)
        .map(() => full);
    starsArr.push(`<span>${empty}</span>`);
    range(max - currentRounded)
        .forEach(() => starsArr.push(empty));
    return starsArr.join('');
}

function range(x) {
    return [...Array(x).keys()];
}
