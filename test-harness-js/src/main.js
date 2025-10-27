import './style.css'

import javascriptLogo from './javascript.svg'

import WindowWrapper from 'window-wrapper'

document.querySelector('#jsLogo').src = javascriptLogo

document.querySelector('#currentUri').innerText = WindowWrapper.getHref()
document.querySelector('#hostName').innerText = WindowWrapper.getHost()
document.querySelector('#path').innerText = WindowWrapper.getPath()

/**
 * Clickable page event.
 * @param {Event} event
 */
const clickablePageEvent = (event) => {
    event.preventDefault()
    //TS const target = event.target as HTMLElement
    // noinspection JSUnresolvedReference
    const targetId = event.target.getAttribute('id')
    if (targetId === 'eventOnButton' || targetId === 'eventOffButton') return
    document.querySelector('#eventTestButtonResult').innerText = "You clicked the page!"
}

document.querySelector('#eventOnButton').addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('#eventOffButton').removeAttribute('disabled')
    document.querySelector('#eventOnButton').setAttribute('disabled', 'disabled')

    WindowWrapper.addEventListener('click', clickablePageEvent)
    document.querySelector('#eventTestButtonResult').innerText = "Events are switched on!"
})

document.querySelector('#eventOffButton').addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('#eventOnButton').removeAttribute('disabled')
    document.querySelector('#eventOffButton').setAttribute('disabled', 'disabled')
    WindowWrapper.removeEventListener('click', clickablePageEvent)
    document.querySelector('#eventTestButtonResult').innerText = "Clicking won't do anything now :("
})