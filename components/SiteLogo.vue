<template functional>
  <article
    :class="{
      'logo--dark': props.dark,
      'logo--light': !props.dark
    }"
    class="logo"
  >
    <a :href="props.link" class="logo__link">
      <svg
        width="35px"
        height="35px"
        viewBox="0 0 35 35"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="logo__image"
      >
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
          <g transform="translate(-125.000000, -70.000000)">
            <g transform="translate(125.000000, 70.000000)">
              <path
                d="M0,5 L5,5 L5,10 L10,10 L10,0 L15,0 L15,15 L0,15 L0,5 Z M25,
                0 L25,10 L30,10 L30,0 L35,0 L35,15 L20,15 L20,0 L25,0 Z M0,
                19.9997 L5,19.9997 L5,29.9997 L15,29.9997 L15,34.9997 L0,
                34.9997 L0,19.9997 Z M20,35 L20,20 L35,20 L35,35 L20,35 Z M25,
                29.9997 L30,29.999 L30,25 L25,25 L25,29.9997 Z"
              />
            </g>
          </g>
        </g>
      </svg>
    </a>
  </article>
</template>

<script>
export default {
  name: 'SiteLogo',
  functional: true,
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  z-index: 1;
}

.logo__image {
  transition: fill 0.4s ease;
}

.logo--light .logo__image {
  fill: #ffffff;
}

.logo--dark .logo__image {
  fill: #000000;
}
</style>
