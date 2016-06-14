

module.exports = {
    metalsmith_task: require('./lib/metalsmith_task'),
    startServer: function() {
        require('./server.js');
    }
};

