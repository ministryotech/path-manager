/*
    Path Manager
    ------------
    Wraps window path methods for easy mocking and provides access utilities.

    https://github.com/ministryotech/path-manager
*/
(function() {

    const root = window
    const winWrap = require("window-wrapper")

    function PathManager(windowWrapper) {
        this.winWrap = windowWrapper || winWrap

        this.href = function() {
            return this.winWrap.getHref()
        }

        this.host = function() {
            return this.winWrap.getHost()
        } 

        this.path = function() {
            return this.winWrap.getPath()
        }

        this.pathContains = function(string) {
            return this.winWrap.getPath().toLowerCase().indexOf(string.toLowerCase()) !== -1
        }
    
        this.pathIs = function(string) {
            const path = this.winWrap.getPath().replace(new RegExp("/", "g"), "")
            const testString = string.replace(new RegExp("/", "g"), "")
            return path.toLowerCase() === testString.toLowerCase()
        }
    }

    // Exports to the global scope
    if (typeof define === "function" && define.amd) {
        define("window-wrapper", [], function() { return PathManager })
    } else if (typeof exports === "object") {
        module.exports = PathManager
    } else {
        root.PathManager = PathManager
    }
    
})()