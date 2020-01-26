<template functional>
  <footer
    :class="[data.class, data.staticClass]"
    class="site-footer"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <section class="site-footer__section">
      <vue-container>
        <vue-row align-h="between" align-v="center">
          <vue-col tag="section" cols="auto" class="site-footer__contacts">
            <a href="tel:+74993946202" class="site-footer__contact">
              +7 (499) 394 62 02
            </a>
            <a href="mailto:info@startjulo.ru" class="site-footer__contact">
              info@startjulo.ru
            </a>
          </vue-col>
          <vue-col tag="section" cols="auto" class="site-footer__socials">
            <a
              href="https://www.facebook.com/julo.digital/"
              class="site-footer__social site-footer__social--facebook"
            >
              <img src="~assets/img/facebook.svg" alt="facebook">
            </a>
            <a
              href="https://www.instagram.com/julo.digital/"
              class="site-footer__social site-footer__social--instagram"
            >
              <img src="~assets/img/instagram.svg" alt="instagram">
            </a>
            <a
              href="https://vk.com/startjulo"
              class="site-footer__social site-footer__social--vkontakte"
            >
              <img src="~assets/img/vkontakte.svg" alt="vkontakte">
            </a>
          </vue-col>
        </vue-row>
      </vue-container>
    </section>
    <section class="site-footer__section">
      <vue-container>
        <section class="site-footer__copyright copyright">
          Copyright {{ new Date().getFullYear() }} ©
        </section>
      </vue-container>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  functional: true
}
</script>

<style lang="scss" scoped>
.site-footer__section {
  &:first-of-type {
    background-color: var(--dark);
  }

  &:last-of-type {
    padding: 10px 0;
  }
}

.site-footer__section:first-of-type .container {
  height: 62px;

  @include tablet {
    height: auto;
    padding: 38px 0;
  }
}

.site-footer__contact {
  font-size: 20px;
  letter-spacing: 0.1px;
  color: var(--light);

  @include tablet {
    margin-bottom: 18px;
    font-size: 16px;
  }
}

.site-footer__socials {
  @include tablet {
    margin-top: 38px;
  }
}

.site-footer__social {
  height: 22px
}

.site-footer__copyright {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: var(--grey);
}
</style>
