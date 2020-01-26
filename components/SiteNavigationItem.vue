<template functional>
  <div
    :class="[data.class, data.staticClass, {
      'site-navigation-item--active': props.active,
      'site-navigation-item--bordered': props.bordered
    }]"
    class="site-navigation-item"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <a :href="props.href">{{ props.text }}</a>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigationItem',
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.site-navigation-item {
  height: 18px;
  font-size: 0;

  &--bordered {
    position: relative;
    bottom: 3px;
    padding: 2px 4px 5px 4px;
    border: 1px solid var(--slate);
    transition: all 0.5s ease-in-out;

    &:hover {
      border-color: var(--watermelon);
      background-color: var(--white);
      transition: all 0.15s ease-in-out;
    }
  }

  @include mobile {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.site-navigation-item:not(:last-of-type) {
  margin-right: 30px;

  @include tablet {
    margin-right: 10px;
  }
}

.site-navigation-item a {
  font-size: 16px;
  letter-spacing: 0.2px;
  text-align: justify;
  color: var(--slate);
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: var(--light);
    color: var(--watermelon);
    transition: all 0.15s ease-in-out;
  }

  @include mobile {
    font-family: "neue-haas-unica", sans-serif;
    font-size: 16px;
    letter-spacing: 0.2px;
    color: var(--black);
  }
}

.site-navigation-item.site-navigation-item--active > a {
  background-color: transparent;
  color: var(--white);

  @include mobile {
    color: var(--black);
  }
}

.site-navigation-item--bordered a {
  &:hover {
    background-color: transparent;
  }
}
</style>
