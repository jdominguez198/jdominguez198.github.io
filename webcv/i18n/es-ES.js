export default {
  navigation: {
    resume: 'CV',
    whatIDo: 'Lo que hago',
    contact: 'Contacto'
  },
  contact: {
    title: '¡Contáctame!',
    description: '¿Eres un <strong>Técnico de Selección</strong> y piensas que encajo en una posición que estás promoviendo? ¿Eres un <strong>Desarrollador</strong> y quieres colaborar conmigo en un proyecto genial? ¿Tienes alguna <strong>sugerencia</strong> para mejorar mi web?<br><br>Puedes contactar conmigo a través de cualquiera de las redes sociales en las que estoy o simplemente rellena el siguiente formulario para mandarme un mensaje:',
    form: {
      name: {
        label: 'Tu nombre',
        placeholder: 'Escribe tu nombre completo aquí',
        errorMessage: 'Debes de escribir tu nombre completo para contactarte, ¡por favor!'
      },
      email: {
        label: 'Tu email',
        placeholder: 'Escribe tu correo electrónico aquí',
        errorMessage: 'Si no indicas tu correo electrónico, ¿como voy a responderte?'
      },
      message: {
        label: 'Escribe el mensaje',
        placeholder: 'Escribe tu mensaje completo aquí',
        errorMessage: '¿Sin texto? ¿Seguro? Vamos, no seas tan tímid@...'
      },
      submit: {
        label: 'Enviar mensaje'
      }
    },
    recaptchaError: 'Hubo un error con ReCaptcha. Recarga la página y vuelve a intentarlo',
    recaptchaPolicy: '* Este sitio está protegido por reCAPTCHA y la {0} de Google y se aplican sus {1}.',
    recaptchaPolicyPrivacyLink: 'Política de Privacidad',
    recaptchaPolicyTermsLink: 'Términos del Servicio',
    response: {
      ok: 'Tu mensaje se ha enviado correctamente. ¡Gracias!',
      ko: 'Hubo un error enviando tu mensaje. ¿Puedes intentarlo de nuevo?',
      error: 'Hubo un error enviando tu mensaje. ¿Puedes intentarlo de nuevo?'
    }
  }
}
