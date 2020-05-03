import Stars from "./component";

Stars.register();

describe('m3-stars', () => {
    it('should mark the last full star', () => {
        // given
        document.body.innerHTML = `
            <m3-stars max="5" current="4"></m3-stars>
        `;

        // when
        const toTest = document.querySelector('m3-stars');

        // then
        expect(toTest.shadowRoot.querySelectorAll('span'))
            .toHaveLength(1);
        expect(toTest.shadowRoot.querySelector('span').nextSibling.textContent)
            .toEqual(Stars.empty);
    });

    it('should override icons', () => {
        // given
        const empty = '💀';
        Stars.empty = empty;
        Stars.full = '😄';
        // and
        customElements.define('m3-emoji', class extends Stars {
        });
        document.body.innerHTML = `
            <m3-emoji max="5" current="4"></m3-emoji>
        `;

        // when
        const toTest = document.querySelector('m3-emoji');

        // then
        expect(toTest.shadowRoot.querySelector('span').nextSibling.textContent)
            .toEqual(empty);
    });
});
