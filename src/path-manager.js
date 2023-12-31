// noinspection JSUnusedGlobalSymbols

/*
    Path Manager
    ------------
    Wraps window path methods for easy mocking and provides access utilities.
    https://github.com/ministryotech/path-manager
*/
(function() {

    var root = window
    var WindowWrapper = require('window-wrapper')

    /**
     * A helper object for accessing and querying elements of URI paths.
     * @param {WindowWrapper} windowWrapper
     * @constructor
     */
    function PathManager(windowWrapper) {

        this.winWrap = windowWrapper || WindowWrapper

        /**
         * Gets the full href for the current URI.
         * @returns {string} The full URI.
         */
        this.href = function() {
            return this.winWrap.getHref()
        }

        /**
         * Gets the host for the current URI.
         * @returns {string} The host.
         */
        this.host = function() {
            return this.winWrap.getHost()
        }

        /**
         * Gets the path for the current URL.
         * @returns {string} The path.
         */
        this.path = function() {
            return this.winWrap.getPath()
        }

        /**
         * Indicates if a path contains a given substring.
         * @param {string} what The substring to look for.
         * @returns {boolean}
         */
        this.pathContains = function(what) {
            return this.path.toLowerCase().indexOf(what.toLowerCase()) !== -1
        }

        /**
         * Indicates if a path matches a given expectation
         * @param {string} expected The string to test against.
         * @returns {boolean}
         */
        this.pathIs = function(expected) {
            var path = this.winWrap.getPath().replace(new RegExp('/', 'g'), '')
            var testString = expected.replace(new RegExp('/', 'g'), '')
            return path.toLowerCase() === testString.toLowerCase()
        }
    }

    /*--------------------------------------------------------------------------*/

    // Export library
    // noinspection JSUnresolvedReference - define check for require.js module support.
    if (typeof define === 'function' && define.amd) {
        // noinspection JSUnresolvedReference - define check for require.js module support.
        define('path-manager', [], function() {
            return PathManager
        })
    } else if (typeof exports === 'object') {
        module.exports = PathManager
    } else {
        root.PathManager = PathManager
    }

})()
