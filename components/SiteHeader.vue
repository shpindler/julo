<template>
  <article class="site-header">
    <vue-container>
      <vue-row align-h="between" align-v="center">
        <vue-col cols="auto">
          <site-logo />
        </vue-col>
        <vue-col cols="auto">
          <site-navigation />
        </vue-col>
      </vue-row>
    </vue-container>
  </article>
</template>

<script>
import SiteLogo from '@/components/SiteLogo'
import SiteNavigation from '@/components/SiteNavigation'

export default {
  name: 'SiteHeader',
  components: {
    SiteLogo,
    SiteNavigation
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 20;
  min-height: 35px;

  @include tablet {
    top: 35px;
  }
}
</style>
