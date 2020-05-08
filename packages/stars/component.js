export default class Stars extends HTMLElement {
    static register(tag = 'm3-stars') {
        customElements.define(tag, Stars);
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
        <style>:host{display:inline-block}span:before{position:absolute;content:'${this.full}';width:${currentValue % 1}em;overflow:hidden}</style>
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
    let currentRounded = Math.ceil(current);
    const starsArr = [];
    switch (true) {
        case currentRounded < 1:
            currentRounded = 0;
            break;
        case currentRounded === current:
            range(current)
                .forEach(() => starsArr.push(full));
            break;
        default:
            range(currentRounded - 1)
                .forEach(() => starsArr.push(full));
            starsArr.push(`<span>${empty}</span>`);
            break;
    }
    range(max - currentRounded)
        .forEach(() => starsArr.push(empty));
    return starsArr.join('');
}

function range(x) {
    if (!x) {
        return [];
    }
    return [...Array(x).keys()];
}
