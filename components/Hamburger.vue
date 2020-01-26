<template functional>
  <div
    :class="[data.class, data.staticClass, {
      'hamburger--opened': props.opened,
      'hamburger--closed': !props.opened
    }]"
    class="hamburger"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div class="hamburger__icon">
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  functional: true,
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger__icon {
  width: 20px;
  height: 10px;
  margin: auto;
}

.hamburger__line {
  width: 20px;
  height: 2px;
  margin: 0 auto;
  margin-bottom: 2px;
  background-color: var(--dark-grey);
  transform-origin: center;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;

  &:last-of-type {
    margin-bottom: 0;
  }
}

@keyframes lineOneToCross {
  0% {
    transform: translate(0, 0) rotate(0);
  }

  50% {
    transform: translate(0, 200%) rotate(0);
  }

  100% {
    transform: translate(0, 200%) rotate(45deg);
  }
}

@keyframes lineTwoToCross {
  50%,
  100% {
    visibility: hidden;
  }
}

@keyframes lineThreeToCross {
  0% {
    transform: translate(0, 0) rotate(0);
  }

  50% {
    transform: translate(0, -200%) rotate(0);
  }

  100% {
    transform: translate(0, -200%) rotate(-45deg);
  }
}

.hamburger--opened .hamburger__line {
  &:first-of-type {
    animation-name: lineOneToCross;
  }

  &:nth-of-type(2) {
    animation-name: lineTwoToCross;
  }

  &:last-of-type {
    animation-name: lineThreeToCross;
  }
}

@keyframes lineOneToHamburger {
  0% {
    transform: translate(0, 200%) rotate(45deg);
  }

  50% {
    transform: translate(0, 200%) rotate(0);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}

@keyframes lineTwoToHamburger {
  50%,
  100% {
    visibility: visible;
  }
}

@keyframes lineThreeToHamburger {
  0% {
    transform: translate(0, -200%) rotate(-45deg);
  }

  50% {
    transform: translate(0, -200%) rotate(0);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}

.hamburger--closed .hamburger__line {
  &:first-of-type {
    animation-name: lineOneToHamburger;
  }

  &:nth-of-type(2) {
    animation-name: lineTwoToHamburger;
  }

  &:last-of-type {
    animation-name: lineThreeToHamburger;
  }
}
</style>
