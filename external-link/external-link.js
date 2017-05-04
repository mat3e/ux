module.exports = startUX;

function startUX() {
    const helpers = require('./helper.js');

    var result = helpers.searchDataInNode(document.body, 'ux-external');

    result.forEach(function (anchor) {
        var href = anchor.getAttribute('href');
        if (href.indexOf('mailto') !== 0) {
            var externalAnchor = document.createElement('a');
            externalAnchor.setAttribute('href', href);
            externalAnchor.setAttribute('target', '_blank');
            externalAnchor.setAttribute('data-ux-external-impl', '');

            var content = document.createElement('span');
            content.setAttribute('class', 'fa fa-external-link');

            externalAnchor.appendChild(content);

            helpers.insertAfter(externalAnchor, anchor);
        }
    });
}

