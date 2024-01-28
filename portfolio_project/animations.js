function about_image_animation() {
  const about_image = document.querySelector('.about_image_animation')
  const image_animation_function_pos = about_image.getBoundingClientRect().top

  const screenImagePosition = window.innerHeight

  if (image_animation_function_pos < screenImagePosition) {
    about_image.classList.add('about_image_animation_appeared')
  }
}

addEventListener('scroll', about_image_animation)

function about_paragraph_animation() {
  const about_paragraph = document.querySelector('.paragraph_animation')
  const paragraph_animation_function_pos = about_paragraph.getBoundingClientRect()
    .top

  const screenParagraphPosition = window.innerHeight

  if (paragraph_animation_function_pos < screenParagraphPosition) {
    about_paragraph.classList.add('paragraph_animation_appeared')
  }
}

addEventListener('scroll', about_paragraph_animation)

function about_contacts_animation() {
  const about_contacts = document.querySelector('.contact_field_animation')
  const contact_animation_function_pos = about_contacts.getBoundingClientRect()
    .top

  const screenContactPosition = window.innerHeight

  if (contact_animation_function_pos < screenContactPosition) {
    about_contacts.classList.add('contact_animation_appeared')
  }
}

addEventListener('scroll', about_contacts_animation)

function about_button_animation() {
  const about_button = document.querySelector('.button_animation')
  const button_animation_function_pos = about_button.getBoundingClientRect().top

  const screenbuttonPosition = window.innerHeight

  if (button_animation_function_pos < screenbuttonPosition) {
    about_button.classList.add('button_animation_appeared')
  }
}

addEventListener('scroll', about_button_animation)

function about_header_animation() {
  const about_header = document.querySelector('.about_me_header_animation')
  const header_animation_function_pos = about_header.getBoundingClientRect().top

  const screenHeaderPosition = window.innerHeight

  if (header_animation_function_pos < screenHeaderPosition) {
    about_header.classList.add('button_animation_appeared')
  }
}

addEventListener('scroll', about_header_animation)
