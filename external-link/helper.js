module.exports = {

    searchDataInNode: function (start, dataAttr) {
        var self = this;

        var result = [];

        if (start && start.childNodes) {
            var nodes = start.childNodes;
            for (var i = 0; i < nodes.length; ++i) {
                var node = nodes[i];
                if (node.nodeType === 1) {
                    if (node.dataset && node.dataset[dataAttr]) {
                        result.push(node);
                    }
                    result = result.concat(self.searchDataInNode(node, dataAttr));
                }
            }
        }

        return result;
    },

    /*
     http://stackoverflow.com/a/4793630/4774651
     */
    insertAfter: function (newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
};