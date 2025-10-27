// noinspection JSUnusedGlobalSymbols

/*
    Path Manager
    ------------
    Wraps window path methods for easy mocking and provides access utilities.
    https://github.com/ministryotech/path-manager
*/

import WindowWrapper from 'window-wrapper'

/**
 * A helper object for accessing and querying elements of URI paths.
 */
class PathManager {

    /**
     * Instantiate a new Path Manager.
     * @param {WindowWrapper} windowWrapper
     * @constructor
     */
    constructor(windowWrapper) {
        this.winWrap = windowWrapper || WindowWrapper
    }

    /**
     * Gets the path for the current URL.
     * @returns {string} The path.
     */
    get path() {
        return this.winWrap.getPath()
    }

    /**
     * Gets the host for the current URI.
     * @returns {string} The host.
     */
    get host() {
        return this.winWrap.getHost()
    }

    /**
     * Gets the full href for the current URI.
     * @returns {string} The full URI.
     */
    get href() {
        return this.winWrap.getPath()
    }

    /**
     * Indicates if a path matches a given expectation
     * @param {string} expected The string to test against.
     * @returns {boolean}
     */
    pathIs(expected) {
        const path = this.href.replace(new RegExp('/', 'g'), '')
        const testString = expected.replace(new RegExp('/', 'g'), '')
        return path.toLowerCase() === testString.toLowerCase()
    }

    /**
     * Indicates if a path contains a given substring.
     * @param {string} what The substring to look for.
     * @returns {boolean}
     */
    pathContains(what) {
        return this.path.toLowerCase().indexOf(what.toLowerCase()) !== -1
    }
}

export default PathManager
