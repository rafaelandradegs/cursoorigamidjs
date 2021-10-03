function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    function activeTab(index) {
      tabContent.forEach(content => {
        content.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()

function initAcordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')

  const activeClass = 'ativo'

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAcordion()

function internalNavigation() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

internalNavigation()

function initiAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowHeight = window.innerHeight * 0.5

    function animationScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowHeight < 0
        if (isSectionVisible) section.classList.add('active')
      })
    }

    animationScroll()

    window.addEventListener('scroll', animationScroll)
  }
}

initiAnimationScroll()
