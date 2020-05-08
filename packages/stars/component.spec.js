import Stars from "./component";

Stars.register();

describe('m3-stars', () => {
    it('should mark the last full star', () => {
        // given
        document.body.innerHTML = `
            <m3-stars max="5" current="3.4"></m3-stars>
        `;

        // when
        const toTest = document.querySelector('m3-stars');

        // then
        expect(toTest.shadowRoot.querySelectorAll('span'))
            .toHaveLength(1);
        expect(getSymbolAfterMarkedSymbolIn(toTest))
            .toEqual(Stars.empty);
    });

    it.each([0, -1, -.5, NaN])('should mark nothing for %d stars', (current) => {
        // given
        document.body.innerHTML = `
            <m3-stars max="5" current="${current}"></m3-stars>
        `;

        // when
        const toTest = document.querySelector('m3-stars');

        // then
        expect(toTest.querySelector('span')).toBeNull();
    });

    it.each([1, 2, 3, 4])('should mark nothing when %d out of 3 stars', (current) => {
        // given
        document.body.innerHTML = `
            <m3-stars max="3" current="${current}"></m3-stars>
        `;

        // when
        const toTest = document.querySelector('m3-stars');

        // then
        expect(toTest.querySelector('span')).toBeNull();
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
            <m3-stars max="5" current="3.3"></m3-stars>
            <m3-emoji max="5" current="3.3"></m3-emoji>
        `;

        // when
        const toTest = document.querySelector('m3-emoji');

        // then
        expect(getSymbolAfterMarkedSymbolIn(toTest))
            .toEqual(empty);
        // TODO: is overriden in happy-dom
        // expect(getSymbolAfterMarkedSymbolIn(document.querySelector('m3-stars')))
        //     .not
        //     .toEqual(empty);
    });
});

function getSymbolAfterMarkedSymbolIn(starsComponent) {
    return starsComponent.shadowRoot.querySelector('span').nextSibling.textContent;
}
