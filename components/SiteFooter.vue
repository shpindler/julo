<template functional>
  <footer
    :class="[data.class, data.staticClass]"
    class="site-footer"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <section class="site-footer__section">
      <vue-container>
        <vue-row align-v="center" class="h-100">
          <vue-col cols="6" md="auto">
            <a href="tel:+74993946202" class="site-footer__contact">
              +7 (499) 394 62 02
            </a>
          </vue-col>
          <vue-col cols="6" md="auto">
            <a href="mailto:info@startjulo.ru" class="site-footer__contact">
              info@startjulo.ru
            </a>
          </vue-col>
          <vue-col cols="2" md="auto" class="ml-md-auto mt-5 mt-md-0">
            <a
              href="https://www.facebook.com/julo.digital/"
              class="site-footer__social site-footer__social--facebook"
            >
              <img src="~assets/img/facebook.svg" alt="facebook">
            </a>
          </vue-col>
          <vue-col cols="2" md="auto" class="mt-5 mt-md-0">
            <a
              href="https://www.instagram.com/julo.digital/"
              class="site-footer__social site-footer__social--instagram"
            >
              <img src="~assets/img/instagram.svg" alt="instagram">
            </a>
          </vue-col>
          <vue-col cols="2" md="auto" class="mt-5 mt-md-0">
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
  height: auto;
  padding-top: 38px;
  padding-bottom: 38px;

  @include tablet {
    height: 62px;
    padding-top: 0;
    padding-bottom: 0;
  }
}

.site-footer__contact {
  margin-bottom: 18px;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: var(--light);

  @include tablet {
    margin-bottom: 0;
    font-size: 20px;
  }
}

.site-footer__socials {
  margin-top: 38px;
  margin-left: auto;

  @include tablet {
    margin-top: 0;
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
