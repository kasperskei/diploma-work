<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns" :class="{ 'is-vcentered': isVerticalCentered }">
          <div class="column">
            <slot name="rigth"></slot>
          </div>
          <div class="column is-narrow is-hidden-touch">
            <slot name="left"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-boxed">
        <div class="container">
          <ul>
            <li class="is-active">
              <router-link to="/lol">Empty</router-link>
            </li>
            <li v-for="item in menuList" :key="item">
              <router-link :to="item.link">item.name</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'BaseHero',
    props: {
      menuList: Array,
      isVerticalCentered: Boolean,
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
