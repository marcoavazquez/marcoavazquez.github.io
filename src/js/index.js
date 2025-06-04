const langs = ['en', 'es']
let index = 0

window.addEventListener('load', function () {
  const cvContainer = document.querySelector('main')
  const cvButton = document.querySelector('#btn-cv')

  cvButton.addEventListener('click', function () {
    cvContainer.classList.toggle('hide')
    document.body.classList.toggle('expanded')
  })

  // 

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
  index = langs.indexOf(lang)
  if (index === -1) {
    index = 0
  }

  if (data) {
    cvTitle.innerText = data.title[index]
    summaryTitle.innerHTML = data.summary.title[index]
    summaryContent.innerHTML = data.summary.content[index]
    skillsTitle.innerHTML = data.skills.title[index]
    contactTitle.innerHTML = data.contanct[index]
    languagesTitle.innerHTML = data.languages.title[index]
    educationTitle.innerHTML = data.education.title[index]
    
    resumeTitle.innerHTML = data.experience.title[index]
    data.experience.items.map(item => {
      resumeContent.appendChild(createResumeItem(item, lang))
    })

    data.languages.items.map(langItem => {
      const li = document.createElement('li')
      li.innerHTML = langItem[index]
      languagesContent.appendChild(li)
    })

    data.education.items.map(item => {
      const li = document.createElement('li')
      const degree = document.createElement('strong')
      const school = document.createElement('div')
      const date = document.createElement('small')

      degree.innerHTML = item.degree[index]
      school.innerHTML = item.school
      date.innerHTML = formatDate(item.date[0], lang) + ' - ' + formatDate(item.date[1], lang)

      li.appendChild(degree)
      li.appendChild(school)
      li.appendChild(date)
      educationContent.appendChild(li)
    })
  }
})

const createResumeItem = function (item, lang) {
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

  title.innerHTML = item.title[index] + ' - ' + item.company
  date.innerHTML = formatDate(item.date[0], lang) + ' - ' + formatDate(item.date[1], lang)

  item.description.map(desc => {
    const li = document.createElement('li')
    li.innerHTML = desc[index]
    ul.appendChild(li)
  })

  return container
}

const formatDate = function (date, lang) {
  if (date === 'today') {
    return lang === 'es' ? 'Hoy' : 'Today'
  }
  const month = new Date(date + '-10').toLocaleString(lang, { month: 'short' })
  return month + ' ' + date.split('-')[0]
}