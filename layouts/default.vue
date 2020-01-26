<template>
  <section class="default-layout">
    <site-header />
    <section class="site-content">
      <nuxt />
    </section>
    <site-footer />
  </section>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black);
}

.default-layout >/deep/ .site-footer {
  margin-top: auto;
}
</style>
