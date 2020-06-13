const themeInfo = {
  version: '0.0.4',
  author: 'Akiko Takano',
  url: 'https://github.com/akiko-pusu/redmine_theme_kodomo',
  name: 'Kodomo Redmine tea rose color version',
  description: 'Redmine theme for kids and children tea rose color version.'
}

// Script to append "Great Job!" message when access the closed issue.
const setCloseRibbon = () => {
  const closedIssue = document.querySelector('div#content div.issue.closed')
  if (closedIssue) {
    let ribbon = document.createElement('div')
    ribbon.setAttribute('class', 'ribbon-content')

    let ribbonContent = document.createElement('span')
    ribbonContent.setAttribute('class', 'ribbon')
    ribbonContent.innerHTML = '★ Great Job ★'

    ribbon.appendChild(ribbonContent)
    document.body.appendChild(ribbon)
  }
}

const displayChangeSets = () => {
  let changeSets = document.querySelectorAll('div#issue-changesets > div.changeset')
  if (changeSets == undefined) {
    return false
  }

  for (let i = 0; i < changeSets.length; i++) {
    let changeSet = changeSets[i]
    if　(changeSet.style.display == "block") {
      changeSet.style.display ="none"
    } else {
      changeSet.style.display = "block"
    }
  }
}

const setIssueStyle = () => {
  if (document.body.classList.contains('controller-issue') || document.body.classList.contains('action-show')) {
    const changeSetheader = document.querySelector('div#issue-changesets > h3')
    if (changeSetheader) {
      changeSetheader.addEventListener('click', displayChangeSets, false)
    }
  }
}

let preventEvent = true

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function waitAction (event) {
  let wrapper = document.getElementById('wrapper')
  if (wrapper && preventEvent) {
    setLoadingHtml()
    let message = 'Great work!'
    if (this.action === 'login') {
      message = 'Welcome!'
    }

    event.preventDefault()
    event.stopPropagation()
    displayLoading(message)
    await sleep(3000)
    preventEvent = false
    event.target.click()
  }
}

const setThemeInfo = () => {
  let footer = document.querySelector('div.bgr') ? document.querySelector('div.bgr') : document.querySelector('div#footer')
  if (footer) {
    let infoText = ''
    const classList = document.body.classList
    if (classList.contains('controller-account') ||
        classList.contains('controller-welcome') ||
        (classList.contains('controller-admin') && classList.contains('action-info'))) {
      infoText = '<div class="theme_description"><pre>'
      for (let key in themeInfo) {
        infoText = infoText + key + ' : ' + themeInfo[key] + '\n'
      }
      infoText = infoText + '</pre></div>'
    }

    let beforeText = '/ Theme: <span id="theme_info">Kodomo Redmine tea rose' + infoText + '</span> version'
    footer.innerHTML += beforeText

    // hide Wiki
    let wiki = document.querySelector('body.controller-welcome.action-index div#content div.splitcontentleft > .wiki')
    if (wiki != undefined && wiki.innerText === '') {
      wiki.setAttribute('style', 'display: none;')
    }
  }
}

const displayLoading = (message) => {
  let target = document.getElementById('loading')
  let wrapper = document.getElementById('wrapper')
  target.setAttribute('style', 'display: block;')
  wrapper.setAttribute('style', 'opacity: 0.3;')

  let loadingMsg = document.getElementById('loading_msg')
  if (loadingMsg) {
    loadingMsg.textContent = message
  }
}

const setLoading = (event) => {
  let loginLink = document.querySelector('input#login-submit')
  let logoutLink = document.querySelector('a.logout')

  if (loginLink) {
    loginLink.addEventListener('click', { action: 'login', handleEvent: waitAction }, false)
  }
  if (logoutLink) {
    logoutLink.addEventListener('click', { action: 'logout', handleEvent: waitAction }, false)
  }
}

// IE11 not support literal..... ;-(
let setLoadingHtml = () => {
  let loaderHtml = '<div class="sk-fading-circle" id="loading">' +
    '<div class="sk-circle1 sk-circle"></div>' +
    '<div class="sk-circle2 sk-circle"></div>' +
    '<div class="sk-circle3 sk-circle"></div>' +
    '<div class="sk-circle4 sk-circle"></div>' +
    '<div class="sk-circle5 sk-circle"></div>' +
    '<div class="sk-circle6 sk-circle"></div>' +
    '<div class="sk-circle7 sk-circle"></div>' +
    '<div class="sk-circle8 sk-circle"></div>' +
    '<div class="sk-circle9 sk-circle"></div>' +
    '<div class="sk-circle10 sk-circle"></div>' +
    '<div class="sk-circle11 sk-circle"></div>' +
    '<div class="sk-circle12 sk-circle"></div>' +
    '<span id="loading_msg"></span>' +
    '<div class="float"><div class="float-logo"></div></div>' +
    '</div>'

  let wrapper = document.getElementById('wrapper')
  if (wrapper) {
    wrapper.insertAdjacentHTML('afterend', loaderHtml)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setThemeInfo)
  document.addEventListener('DOMContentLoaded', setCloseRibbon)
  document.addEventListener('DOMContentLoaded', setLoading)
  document.addEventListener('DOMContentLoaded', setIssueStyle)
}
