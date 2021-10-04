<template>
  <div class="page-container">
    <header class="header">
      <div class="header__wrapper box-container">
        <nav class="header__navigation">
          <ul>
            <li class="active"><a href="#">Resume</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="content">
      <div class="content__wrapper box-container">
        <section class="section my-profile">
          <div class="my-profile__avatar">
            <img src="https://avatars.githubusercontent.com/u/9919359?v=4" alt="Jesus Dominguez" title="Jesus Dominguez" />
          </div>
          <div class="my-profile__role">
            <h1 class="my-profile__name">Jesus Dominguez</h1>
            <h2 class="my-profile__role-name">Team Lead & Senior Developer</h2>
          </div>
        </section>
        <section class="section about-me">
          <h3 class="section__title">About me</h3>
          <p class="about-me__description">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta
            iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate
            has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos
            ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</p>
          <div class="about-me__highlights">
            <ul>
              <li><strong>Location:</strong>Valencia, Spain</li>
              <li><strong>Age:</strong>36 years</li>
              <li><strong>Experience:</strong>10+ years</li>
            </ul>
          </div>
        </section>
        <section class="section education">
          <h3 class="section__title">Education</h3>
          <div class="timeline">
            <ul class="timeline__list">
              <li class="timeline__item">
                <div class="event">
                  <div class="event__title">Title</div>
                  <div class="event__subtitle">Subtitle</div>
                  <div class="event__content">
                    <p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat
                      gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend
                      posures temporureture.</p>
                  </div>
                </div>
              </li>
              <li class="timeline__item">
                <div class="event">
                  <div class="event__title">Title</div>
                  <div class="event__subtitle">Subtitle</div>
                  <div class="event__content">
                    <p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat
                      gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend
                      posures temporureture.</p>
                  </div>
                </div>
              </li>
              <li class="timeline__item">
                <div class="event">
                  <div class="event__title">Title</div>
                  <div class="event__subtitle">Subtitle</div>
                  <div class="event__content">
                    <p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat
                      gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend
                      posures temporureture.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="section experience">
          <h3 class="section__title">Experience</h3>
          <div class="timeline">
            <ul class="timeline__list">
              <li class="timeline__item">
                <div class="event">
                  <div class="event__title">Title</div>
                  <div class="event__subtitle">Subtitle</div>
                  <div class="event__content">
                    <p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat
                      gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend
                      posures temporureture.</p>
                  </div>
                </div>
              </li>
              <li class="timeline__item">
                <div class="event">
                  <div class="event__title">Title</div>
                  <div class="event__subtitle">Subtitle</div>
                  <div class="event__content">
                    <p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat
                      gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend
                      posures temporureture.</p>
                  </div>
                </div>
              </li>
              <li class="timeline__item">
                <div class="event">
                  <div class="event__title">Title</div>
                  <div class="event__subtitle">Subtitle</div>
                  <div class="event__content">
                    <p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat
                      gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend
                      posures temporureture.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__wrapper box-container">
        <div class="footer__copyright">
          <p class="footer__copyright-text">© 2021 - Made with Love by Jesus Dominguez</p>
        </div>
        <div class="footer__social">
          <ul>
            <li><a href="#"><fa :icon="['fab', 'github']" /></a></li>
            <li><a href="#"><fa :icon="['fab', 'linkedin']" /></a></li>
            <li><a href="#"><fa :icon="['fab', 'twitter']" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
