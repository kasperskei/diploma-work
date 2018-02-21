<template>
  <footer class="footer">
    <div class="container">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered" v-for="social in socials" :key="social.id">
          <router-link :to="social.link">
            <div class="app-is-middle">
              <b-icon size="is-large" :icon="social.icon"></b-icon>
              <div class="social-detail is-hidden-mobile">
                <p class="is-size-6">{{ social.title }}</p>
                <p class="is-size-7">{{ social.subtitle }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
    data() {
      return {
        socials: [{
          id: 1,
          title: 'Читайте Вконтакте',
          subtitle: '999 999 уже в сообществе',
          icon: 'vk-box',
          link: 'https://vk.com/',
        }, {
          id: 2,
          title: 'Смотрите на twitch',
          subtitle: '999 999 смотрят нас',
          icon: 'twitch',
          link: 'https://www.twitch.tv/',
        }, {
          id: 3,
          title: 'Смотрите на YouTube',
          subtitle: '999 999 подписчиков',
          icon: 'youtube-play',
          link: 'https://www.youtube.com/',
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social-detail {
    margin-left: 0.5rem;
    text-align: left;
  }
</style>
