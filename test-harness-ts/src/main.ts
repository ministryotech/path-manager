import './style.css'

import typescriptLogo from './typescript.svg'

import PathManager from 'uri-path-manager'

const tsLogo = document.querySelector('#tsLogo') as HTMLImageElement
tsLogo.src = typescriptLogo

/**
 * Sets the element with the given selector to the given value.
 * @param selector
 * @param value
 */
const setElement = (selector: string, value: string) => {
    const el = document.querySelector(selector) as HTMLElement
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
