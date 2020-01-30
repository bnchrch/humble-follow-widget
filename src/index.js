import React from 'react'
import ReactDOM from 'react-dom'
import HumbleFollow from 'humble-follow-popup'

// const MESSAGE_TEXT = `
// Hey, thanks so much for reading!

// My goal to 2020 is to simply make other developers lives easier. This goal is directly affected by how many people know about what I'm doing.

// So if you enjoyed the content so far I would be thrilled if you [followed me somewhere](https://www.producthunt.com/@bnchrch), anywhere.

// Don't worry though! This is not a shakedown! You can close this pop up. No penalty. and I wont ask again.

// Thanks again for reading and I'm always open to DM's so feel free to message me directly anytime.
//         `
// const SOCIAL_ACCOUNTS = [
//   {service: 'productHunt', url: 'https://www.producthunt.com/@bnchrch'},
//   {service: 'twitter', url: 'https://twitter.com/bnchrch'},
//   {service: 'indieHackers', url: 'https://www.indiehackers.com/bnchrch/'}
// ]
// const MODAL_PROPS = {
//   title: '👋 One humble request from an Indie Dev',
//   closeText: 'Thanks, but no thanks',
//   messageText: MESSAGE_TEXT,
//   socialAccounts: SOCIAL_ACCOUNTS,
//   type: 'button',
//   buttonId: 'humbleButton'
// }

// ReactDOM.render(<HumbleFollow {...MODAL_PROPS} />, document.getElementById("root"));


      // alert('scripting')
      // window.HumbleFollow(MODAL_PROPS);

function initHumbleFollow (props) {

  console.log('running')
  const widgetElement = document.createElement('div')
  document.body.appendChild(widgetElement)
  ReactDOM.render(<HumbleFollow {...props} />, widgetElement)
}
console.log('in')
window.HumbleFollow = initHumbleFollow

// (() => {
//   console.log('binding')
//   window.HumbleFollow = initHumbleFollow
// })()


