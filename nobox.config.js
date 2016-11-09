/**
 * Created by likaituan on 16/10/19.
 */

var {requireJson,log} = require("ifun");
var myconfig = requireJson(`${__dirname}/my.config.js`);

module.exports = function (args) {
    var config = {
        static: {
            items: [{
                path: "/",
                dir: __dirname
            }]
        },
        port: 2001
    };

    if(args.f && myconfig.frameworkDir){
        config.static.items.unshift({
            path: "/node_modules/seekjs/",
            dir: myconfig.frameworkDir
         });
    }

    return config;
};