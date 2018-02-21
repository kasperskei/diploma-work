<template>
  <nav class="navbar is-black">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'main' }">GameLeague</router-link>
        <!-- <router-link class="logo navbar-item" :to="{ name: 'main' }">
          <img src="../assets/images/logo.svg" alt="SGL">
        </router-link> -->
  
        <div class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" v-for="link in links" :key="link.name" :to="link">{{ link.title }}</router-link>
        </div>
  
        <div class="navbar-end">
          <router-link class="navbar-item" to="/todo">
            <b-icon icon="bell-outline"></b-icon>
          </router-link>
          <router-link class="navbar-item" to="/todo">
            kasperskei
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'TheHeader',
    data() {
      return {
        links: [{
          title: 'Турниры',
          name: 'tournaments',
        }, {
          title: 'Видео',
          name: 'video',
        }, {
          title: 'Магазин',
          name: 'market',
        }, {
          title: 'Помощь',
          name: 'help',
        }, {
          title: 'Тупик',
          name: 'not-found',
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    background-color: transparent !important;
  }
</style>
