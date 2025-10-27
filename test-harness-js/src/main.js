import './style.css'

import javascriptLogo from './javascript.svg'

import PathManager from 'uri-path-manager'

document.querySelector('#jsLogo').src = javascriptLogo

/**
 * Sets the element with the given selector to the given value.
 * @param {string} selector
 * @param {any} value
 */
const setElement = (selector, value) => {
    const el = document.querySelector(selector)
    if (el !== null) el.innerText = value
}

const myPathManager = new PathManager()

setElement('#currentUri', myPathManager.href)
setElement('#hostName', myPathManager.host)
setElement('#path', myPathManager.path)

setElement('#containsSlash', myPathManager.pathContains('/') ? 'true' : 'false')
setElement('#containsFish', myPathManager.pathContains('Fish') ? 'true' : 'false')
setElement('#isSlash', myPathManager.pathIs('/') ? 'true' : 'false')
setElement('#isCat', myPathManager.pathIs('Cat') ? 'true' : 'false')
