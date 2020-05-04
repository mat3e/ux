import './index';

describe('m3-switch', () => {
    it('should support both attribute and property', () => {
        // given
        const form = document.createElement('form');
        form.innerHTML = `
            <label>
                <m3-switch checked></m3-switch> test
            </label>
        `;

        // when
        const toTest = form.querySelector('m3-switch');

        // then
        expect(toTest.checked).toBe(true);
    });

    it('should be navigation and aria friendly', () => {
        // given
        document.body.innerHTML = `
            <m3-switch checked></m3-switch>
        `;

        // when
        const toTest = document.querySelector('m3-switch');

        // then
        expect(toTest.getAttribute('tabindex')).toBe('0');
        expect(toTest.getAttribute('role')).toBe('checkbox');
        expect(toTest.getAttribute('aria-checked')).toBe('true');
    });

    it('should work with form', () => {
        // given
        document.body.innerHTML = `
            <form>
                <m3-switch name="switch" value="super" checked></m3-switch>
            </form>
        `;

        // when
        // TODO: happy-dom doesn't support named elements
        const toTest = document.querySelector('form').elements[0];

        // then
        expect(toTest).toHaveProperty('name', 'switch');
        expect(toTest).toHaveProperty('value', 'super');
    });

    it('should change after clicking', () => {
        // given
        document.body.innerHTML = `
            <label>
                <m3-switch checked></m3-switch> test
            </label>
        `;
        const toTest = document.querySelector('m3-switch');

        // expect
        expect(toTest.checked).toBe(true);

        // when
        toTest.click();

        // then
        expect(toTest.checked).toBe(false);
        expect(toTest.hasAttribute('checked')).toBe(false);
        expect(toTest.getAttribute('aria-checked')).toBe('false');
    });

    it('should emit after change', () => {
        // given
        const callback = jest.fn();
        document.body.innerHTML = `
            <label>
                <m3-switch checked></m3-switch> test
            </label>
        `;
        const toTest = document.querySelector('m3-switch');
        toTest.addEventListener('change', callback);

        // when
        toTest.click();
        toTest.click();

        // then
        expect(callback.mock.calls.length).toBe(2);
    });

    it('should change after its label is clicked', () => {
        // TODO: happy-dom workarounds for unsupported selectors and classes
        const [label2, label3] = setupUglyWorkarounds();

        // given
        document.body.innerHTML = `
            <label id="first">
                <m3-switch id="foo" checked></m3-switch> test
            </label>
            <m3-switch id="other-m3"></m3-switch>
            <m3-switch aria-labelledby="third" id="bar"></m3-switch>
        `;
        document.append(label2, label3)
        const statesBefore = [...document.querySelectorAll('m3-switch')]
            .map(m3 => m3.checked);

        // when
        document.querySelectorAll('label')
            .forEach(label => label.click());

        // then
        const switches = document.querySelectorAll('m3-switch');
        expect(switches[0].checked).not.toBe(statesBefore[0]);
        expect(switches[1].checked).not.toBe(statesBefore[1]);
        expect(switches[2].checked).not.toBe(statesBefore[2]);

        // when
        document.getElementById('foo').click();

        // then
        expect(switches[0].checked).toBe(statesBefore[0]);
    });
});

class HTMLLabelElement extends HTMLElement {
    click() {
        const e = new Event('click');
        e.target = this;
        this.dispatchEvent(e);
        this.children.forEach(element => element.click());
    }
}

function setupUglyWorkarounds() {
    global.HTMLLabelElement = HTMLLabelElement;
    Object.defineProperty(Element.prototype, 'parentElement', {
        get() {
            return this.parentNode;
        }
    });
    const originalGetElementClass = document.getElementClass;
    document.getElementClass = function (tag) {
        if (tag === 'label') {
            return HTMLLabelElement;
        }
        return originalGetElementClass.apply(this, arguments);
    }
    // <label id="second" for="other-m3">test 2</label>
    const label2 = document.createElement('label');
    label2.setAttribute('for', 'other-m3');
    label2.append('test 2');
    // <label id="third">test 3</label>
    const label3 = document.createElement('label');
    label3.append('test 3');
    const originalQuerySelector = document.querySelector;
    document.querySelector = function (selector) {
        if (selector === 'label[for="other-m3"]') {
            return this.getElementById('second');
        }
        if (selector === '[id="second"]') {
            return label2;
        }
        if (selector === '[id="third"]') {
            return label3;
        }
        return originalQuerySelector.apply(this, arguments);
    }
    return [label2, label3];
}
