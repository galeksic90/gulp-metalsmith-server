
var glob = require("glob");
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;


module.exports = {
    run: function (baseDir, config, callback) {

        if (!config) {
            return callback();
        }

        console.log('SHOPIFY TASK', baseDir, config);

        var options = {
            cwd: baseDir,
            root: baseDir,
            debug: false,
            nodir: true,
        };

        glob("**/*.liquid.html", options, function (err, files) {

            if (err && !files || !files.length) {
                return callback();
            }

            files.forEach(function(baseFilename) {
                var file = path.join(baseDir, baseFilename);
                fs.renameSync(file, file.replace('.liquid.html', '.liquid'));
            });

            if (!config.exec) {
                return callback();
            }

            exec(config.exec, { cwd: baseDir }, function(err, stdout, stderr) {

                console.log(stdout, stderr);

                callback();
            });
        });
    }
};

