export default {
  navigation: {
    resume: 'Resume',
    whatIDo: 'What I Do',
    contact: 'Contact'
  },
  contact: {
    title: 'Contact me!',
    description: 'Are you a <strong>Recruiter</strong> and you think I can fit on a position you\'re promoting? Are you a <strong>Developer</strong> and want to collaborate with me on a some exciting project? Have you any <strong>suggestions</strong> to improve my site?<br><br>Well, you can contact me in any of the social networks or just send me a message using the following form:',
    form: {
      name: {
        label: 'Your Name',
        placeholder: 'Type your full name',
        errorMessage: 'You should type your full contact name, please!'
      },
      email: {
        label: 'Your Email',
        placeholder: 'Type yor email address',
        errorMessage: 'If you don\'t type your email address, how I will reply you?'
      },
      message: {
        label: 'Type your message',
        placeholder: 'Type your detailed message',
        errorMessage: 'No message? Really? Come on, don\'t be so shy...'
      },
      submit: {
        label: 'Submit message'
      }
    },
    recaptchaError: 'There was an error with ReCaptcha. Reload the site and try again',
    recaptchaPolicy: '* This site is protected by reCAPTCHA and the Google {0} and {1} apply.',
    recaptchaPolicyPrivacyLink: 'Privacy Policy',
    recaptchaPolicyTermsLink: 'Terms of Service',
    response: {
      ok: 'Your message has been sent successfully. Thank you!',
      ko: 'There was an error sending your message. Could you please try again?',
      error: 'There was an error sending your message. Could you please try again?'
    }
  }
}
