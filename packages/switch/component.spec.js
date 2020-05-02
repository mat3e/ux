import {Window} from 'happy-dom';
import './index';

describe('m3-switch', () => {
    it('should support both attribute and property', () => {
        // given
        const form = document.createElement('form');
        form.innerHTML = `
            <label>
                <m3-switch checked> test
            </label>
        `;

        // when
        const toTest = form.querySelector('m3-switch');

        // then
        expect(toTest.checked).toBe(true);
    });

    it('should change after clicking', () => {
        // given
        const document = new Window().document;
        document.body.innerHTML = `
            <label>
                <m3-switch checked> test
            </label>
        `;
        const toTest = document.querySelector('m3-switch');

        // expect
        expect(toTest.checked).toBe(true);

        // when
        toTest.click();

        // then
        expect(toTest.checked).toBe(false);
    });

    it('should emit after change', () => {
        // given
        const callback = jest.fn();
        const document = new Window().document;
        document.body.innerHTML = `
            <label>
                <m3-switch checked> test
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
});
