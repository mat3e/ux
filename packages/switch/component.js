class CheckboxWrapper extends HTMLElement {
    constructor() {
        super();
        this.input = document.createElement('input');
        this.input.type = 'checkbox';
        if (this.hasAttribute('name')) {
            this.input.name = this.getAttribute('name');
        }
    }

    get checked() {
        return this.isTrue('checked');
    }

    set checked(value) {
        const bool = !!value;
        if (bool === this.checked) return;
        this.input.checked = bool;
        bool ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        this.dispatchEvent(new Event('change', {bubbles: true}));
    }

    isTrue(attr) {
        // when binding to attribute, we can get 'false' (e.g. React binds to attributes)
        return this.hasAttribute(attr) && this.getAttribute(attr) !== 'false';
    }
}

export default class Switch extends CheckboxWrapper {
    static register() {
        customElements.define('m3-switch', Switch);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.input.checked = this.checked;
        this.shadowRoot.innerHTML = `
            <div class="slider${this.round ? ' round' : ''}"></div>
            <style>:host{position:relative;display:inline-block;width:2em;height:1em}input{display:none}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#333333;transition:0.4s}.slider::before{position:absolute;content:"";height:calc(1em - 4px);width:calc(1em - 4px);left:2px;bottom:2px;background-color:white;transition:0.4s}input:checked+.slider{background-color:var(--m3-switch-color, #4fd69c)}input:focus+.slider{box-shadow:0 0 1px var(--m3-switch-color, #4fd69c)}input:checked+.slider::before{transform:translateX(1em)}.slider.round{border-radius:34px}.slider.round::before{border-radius:50%}</style>
        `;
        this.shadowRoot.prepend(this.input);
        this.onclick = (e) => {
            e.preventDefault();
            this.checked = !this.checked;
        }
    }

    get round() {
        return this.isTrue('round');
    }
}
