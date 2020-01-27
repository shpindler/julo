<template>
  <nav
    :class="{
      'site-navigation--opened': opened,
      'site-navigation--closed': !opened
    }"
    class="site-navigation"
  >
    <hamburger
      v-if="$bp.isMobile"
      :opened="opened"
      class="site-navigation__btn"
      @click="toggleOpened"
    />
    <transition name="spread">
      <section v-if="opened" class="site-navigation__list">
        <site-navigation-item
          v-for="(item, i) in items"
          :key="`sn-item-${i}`"
          v-bind="item"
          :active="i === activeIndex"
        />
        <site-navigation-item v-bind="language" bordered />
        <hamburger
          v-if="$bp.isMobile"
          :opened="opened"
          class="site-navigation__btn"
          @click="toggleOpened"
        />
      </section>
    </transition>
  </nav>
</template>

<script>
import SiteNavigationItem from '@/components/SiteNavigationItem'

export default {
  name: 'SiteNavigation',
  components: {
    Hamburger: () => import('@/components/Hamburger'),
    SiteNavigationItem
  },
  data() {
    return {
      opened: !this.$bp.isMobile,
      items: [
        { text: 'Портфолио', href: '/portfolio/' },
        { text: 'Услуги', href: '/services/' },
        { text: 'Команда', href: '/team/' },
        { text: 'Контакты', href: '/contacts/' }
      ]
    }
  },
  computed: {
    activeIndex() {
      let result = 0
      this.items.forEach(({ href }, i) => {
        if (href === location.pathname) {
          result = i
        }
      })
      return result
    },
    language() {
      if (this.$route.name.startsWith('en-')) {
        return { text: 'Ru', href: '/' }
      } else {
        return { text: 'Eng', href: '/en/' }
      }
    }
  },
  methods: {
    toggleOpened() {
      this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss">
@keyframes grow {
  0% {
    top: 35px;
    right: 20px;
    width: 40px;
    height: 40px;
  }

  100% {
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }
}

@keyframes shrink {
  0% {
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }

  100% {
    top: 35px;
    right: 20px;
    display: none;
    width: 40px;
    height: 40px;
  }
}

.spread-enter, .spread-leave-to {
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.spread-enter-active {
  @include mobile {
    animation-name: grow;
  }
}

.spread-leave-active {
  @include mobile {
    animation-name: shrink;
  }
}
</style>

<style lang="scss" scoped>
.site-navigation {
  @include mobile {
    &--opened {
      height: 100vh;
    }
  }
}

.site-navigation--opened/deep/ .site-navigation__btn {
  position: relative;
  z-index: 1;
  display: none;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  cursor: pointer;

  &::before {
    content: 'Закрыть';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    font-family: "neue-haas-unica", sans-serif;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.2px;
    color: var(--slate);
  }

  @include mobile {
    display: flex;
  }
}

.site-navigation__list/deep/ .site-navigation__btn {
  position: absolute;
  bottom: 35px;
  left: 6.68%;
}

.site-navigation--closed/deep/ .site-navigation__list .site-navigation__btn {
  display: none;
}

.site-navigation--opened .site-navigation__list .site-navigation__btn {
  @include mobile {
    display: block;
  }
}

.site-navigation__list {
  display: flex;
  box-sizing: border-box;

  @include mobile {
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--white);
    overflow: hidden;
  }
}

.site-navigation--closed .site-navigation__list >/deep/ * {
  @include mobile {
    opacity: 0;
  }
}
</style>
