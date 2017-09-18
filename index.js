

module.exports = {
    metalsmith_task: require('./lib/metalsmith_task'),
    shopify_task: require('./lib/shopify_task'),
    startServer: function() {
        require('./server.js');
    }
};

