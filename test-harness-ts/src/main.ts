import './style.css'

import typescriptLogo from './typescript.svg'

import WindowWrapper from 'window-wrapper'

const tsLogo = document.querySelector('#tsLogo') as HTMLImageElement
tsLogo.src = typescriptLogo

/**
 * Clickable page event.
 * @param event
 */
const clickablePageEvent = (event : Event) => {
    event.preventDefault()
    const target = event.target as HTMLElement
    const targetId = target.getAttribute('id')
    if (targetId === 'eventOnButton' || targetId === 'eventOffButton') return
    setElement('#eventTestButtonResult', "You clicked the page!")
}

/**
 * Sets the element with the given selector to the given value.
 * @param selector
 * @param value
 */
const setElement = (selector: string, value: string) => {
    const el = document.querySelector(selector) as HTMLElement
    if (el !== null) el.innerText = value
}

setElement('#currentUri', WindowWrapper.getHref())
setElement('#hostName', WindowWrapper.getHost())
setElement('#path', WindowWrapper.getPath())

const eventOnButton = document.querySelector('#eventOnButton') as HTMLButtonElement
const eventOffButton = document.querySelector('#eventOffButton') as HTMLButtonElement

eventOnButton.addEventListener('click', (event) => {
    event.preventDefault()
    eventOffButton.removeAttribute('disabled')
    eventOnButton.setAttribute('disabled', 'disabled')

    WindowWrapper.addEventListener('click', clickablePageEvent)
    setElement('#eventTestButtonResult', "Events are switched on!")
})

eventOffButton.addEventListener('click', (event) => {
    event.preventDefault()
    eventOnButton.removeAttribute('disabled')
    eventOffButton.setAttribute('disabled', 'disabled')
    WindowWrapper.removeEventListener('click', clickablePageEvent)
    setElement('#eventTestButtonResult', "Clicking won't do anything now :(")
})