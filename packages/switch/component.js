class CheckboxWrapper extends HTMLElement {
    constructor() {
        super();
        this.input = document.createElement('input');
        this.input.type = 'checkbox';
        this.input.style.display = 'none';
    }

    get checked() {
        return this.isTrue('checked');
    }

    set checked(value) {
        const bool = !!value;
        if (bool === this.checked) return;
        this.input.checked = bool;
        bool ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        this.setAttribute('aria-checked', bool.toString());
        this.dispatchEvent(new Event('change', {bubbles: true}));
    }

    isTrue(attr) {
        // when binding to attribute, we can get 'false' (e.g. React binds to attributes)
        return this.hasAttribute(attr) && this.getAttribute(attr) !== 'false';
    }

    connectedCallback() {
        const changeState = (event) => {
            event.preventDefault();
            this.checked = !this.checked;
        }
        // Firefox - click propagates
        // Chrome - click = just component
        this.addEventListener('click', changeState);
        this.addEventListener('keydown', event => {
            if (event.code.toLowerCase() === 'space' || event.keyCode === 32) {
                changeState(event);
            }
        });
        setupLabelClickFor(this);
        if (this.hasAttribute('name')) {
            this.input.name = this.getAttribute('name');
        }
        if (this.hasAttribute('value')) {
            this.input.value = this.getAttribute('value');
        }
        this.appendChild(this.input);
        this.input.checked = this.checked;
        this.setAttribute('aria-checked', this.checked.toString())
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'checkbox');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
    }
}

function setupLabelClickFor(component) {
    if (component.parentElement && component.parentElement instanceof HTMLLabelElement) {
        component.input.addEventListener('change', (event) => {
            event.stopPropagation();
        });
        // Firefox - clicks inner input when clicking its label
        // Chrome - clicks component when clicking its label
        component.input.addEventListener('click', (event) => {
            event.stopPropagation();
            component.checked = !component.checked;
        });
    }
    const id = component.hasAttribute('id') ? component.getAttribute('id') : component.id;
    const label = (id && document.querySelector(`label[for="${id}"]`))
        || (component.hasAttribute('aria-labelledby') && document.getElementById(component.getAttribute('aria-labelledby')));
    if (label) {
        label.addEventListener('click', (event) => {
            // Chrome was clicking twice when label[for]
            event.preventDefault();
            component.click()
        });
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
        super.connectedCallback();
        this.shadowRoot.innerHTML = `
            <div class="slider${this.round ? ' round' : ''}"></div>
            <style>:host{position:relative;display:inline-block;width:2em;height:1em}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#333333;transition:0.4s}.slider::before{position:absolute;content:"";height:calc(1em - 4px);width:calc(1em - 4px);left:2px;bottom:2px;background-color:white;transition:0.4s}:host([aria-checked="true"])>.slider{background-color:var(--m3-switch-color, #4fd69c)}:host([aria-checked="true"])>.slider::before{transform:translateX(1em)}.slider.round{border-radius:34px}.slider.round::before{border-radius:50%}</style>
        `;
    }

    get round() {
        return this.isTrue('round');
    }
}
