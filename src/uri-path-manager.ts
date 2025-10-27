// noinspection JSUnusedGlobalSymbols

import WindowWrapper from 'window-wrapper'

/**
 * A helper object for accessing and querying elements of URI paths.
 * ------------
 * Wraps window path methods for easy mocking and provides access utilities.
 * https://github.com/ministryotech/path-manager
 */
class PathManager {

    private winWrapInstance: typeof WindowWrapper

    /**
     * Instantiate a new Path Manager.
     * @param windowWrapper The WindowWrapper reference to use for path methods, defaults to an imported WindowWrapper.
     * @constructor
     */
    constructor(windowWrapper : typeof WindowWrapper = WindowWrapper) {
        this.winWrapInstance = windowWrapper || WindowWrapper
    }

    /**
     * Gets the path for the current URL.
     * @returns {string} The path.
     */
    get path(): string {
        return this.winWrapInstance.getPath()
    }

    /**
     * Gets the host for the current URI.
     * @returns {string} The host.
     */
    get host(): string {
        return this.winWrapInstance.getHost()
    }

    /**
     * Gets the full href for the current URI.
     * @returns {string} The full URI.
     */
    get href(): string {
        return this.winWrapInstance.getHref()
    }

    /**
     * Indicates if a path matches a given expectation
     * @param {string} expected The string to test against.
     * @returns {boolean} A flag, to indicate if the path matches the expectation.
     */
    pathIs(expected: string): boolean {
        const path = this.href.replace(new RegExp('/', 'g'), '')
        const testString = expected.replace(new RegExp('/', 'g'), '')
        return path.toLowerCase() === testString.toLowerCase()
    }

    /**
     * Indicates if a path contains a given substring.
     * @param {string} what The substring to look for.
     * @returns {boolean} A flag, to indicate if the path contains the substring.
     */
    pathContains(what: string): boolean {
        return this.path.toLowerCase().indexOf(what.toLowerCase()) !== -1
    }
}

export default PathManager
