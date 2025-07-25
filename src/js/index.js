window.addEventListener('DOMContentLoaded',async function () {
  
  const cvTitle           = document.querySelector('#title')
  const summaryTitle      = document.querySelector('#summary-title')
  const summaryContent    = document.querySelector('#summary-content')
  const skillsTitle       = document.querySelector('#skills-title')
  const resumeTitle       = document.querySelector('#resume-title')
  const resumeContent     = document.querySelector('#resume-content')
  const contactTitle      = document.querySelector('#contact-title')
  const languagesTitle    = document.querySelector('#languages-title')
  const languagesContent  = document.querySelector('#languages-content')
  const educationTitle    = document.querySelector('#education-title')
  const educationContent  = document.querySelector('#education-content')

  const lang = new URLSearchParams(window.location.search).get('lang') || 'en'

  const data = await getData(lang)

  cvTitle.innerText = data.title
  summaryTitle.innerHTML = data.summary.title
  summaryContent.innerHTML = data.summary.content
  skillsTitle.innerHTML = data.skills.title
  contactTitle.innerHTML = data.contact.title
  languagesTitle.innerHTML = data.languages.title
  educationTitle.innerHTML = data.education.title
  resumeTitle.innerHTML = data.experience.title

  data.languages.items.forEach(function (langItem) {
    const item = createLangItem(langItem)
    languagesContent.appendChild(item)
  })

  data.education.items.forEach(function (edItem) {
    const item = createEducationItem(edItem, lang)
    educationContent.appendChild(item)
  })

  data.experience.items.forEach(function (cvItem) {
    const item = createResumeItem(cvItem, lang)
    resumeContent.appendChild(item)
  })
})

async function getData(lang) {
  const data = await fetch('/data/' + lang + '.json')
  if (!data.ok) {
    throw new Error('Error: ' + data.status)
  }
  return data.json()
}

function createResumeItem(cvItem, lang) {
  const container = document.createElement('div')
  const placeContainer = document.createElement('div')
  const title = document.createElement('div')
  const date = document.createElement('small')
  const details = document.createElement('div')
  const ul = document.createElement('ul')

  container.classList.add('xp')
  placeContainer.classList.add('xp-place')
  title.classList.add('xp-title')
  date.classList.add('xp-date')
  details.classList.add('xp-details')

  container.appendChild(placeContainer)
  placeContainer.appendChild(title)
  placeContainer.appendChild(date)
  container.appendChild(details)
  details.appendChild(ul)

  title.innerHTML = cvItem.title + ' - ' + cvItem.company
  date.innerHTML = formatDate(cvItem.date[0], lang) + ' - ' + formatDate(cvItem.date[1], lang)

  cvItem.details.forEach(detail => {
    const li = document.createElement('li')
    li.innerHTML = detail.description
    ul.appendChild(li)
  })
  return container
}

function createLangItem(langItem) {

  const li = document.createElement('li')
  li.innerHTML = langItem
  return li
}

function createEducationItem(educationItem, lang) {
  const li = document.createElement('li')
  const degree = document.createElement('strong')
  const school = document.createElement('div')
  const date = document.createElement('small')

  degree.innerHTML = educationItem.degree
  school.innerHTML = educationItem.school
  date.innerHTML = formatDate(educationItem.date[0], lang) + ' - ' + formatDate(educationItem.date[1], lang)

  li.appendChild(degree)
  li.appendChild(school)
  li.appendChild(date)
  return li
}

function formatDate(date, lang) {
  if (date === 'today') {
    return lang === 'es' ? 'Hoy' : 'Today'
  }
  const month = new Date(date + '-10').toLocaleString(lang, { month: 'short' })
  return month + ' ' + date.split('-')[0]
}