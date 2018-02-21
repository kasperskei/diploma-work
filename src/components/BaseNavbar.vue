<template>
  <section class="app-has-shadow app-is-padding-2">
    <div class="container">
      <section class="columns is-multiline">
        <div class="column">
          <slot name="left"></slot>
        </div>
        <div class="column is-12-tablet is-two-thirds-desktop">
          <slot name="rigth"></slot>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'BaseNavbar',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  
</style>
