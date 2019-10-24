import './index';

describe('m3-switch', () => {
    it('should support both attribute and property', () => {
        // given
        const form = document.createElement('form');
        form.innerHTML = `
            <label>
                <m3-switch checked=""> test
            </label>
        `;

        // when
        const toTest = form.querySelector('m3-switch');

        // then
        expect(toTest.checked).toBeTruthy();
    });
});
