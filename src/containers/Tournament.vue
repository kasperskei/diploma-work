<template>
  <section>
    <BaseHero>
      <div slot="rigth" class="columns">
        <div class="column">
          <div class="media">
            <figure class="media-left is-hidden-mobile">
              <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </p>
            </figure>
            <div class="media-content">
              <p class="title">Название турнира</p>
              <p class="subtitle">
                <b-icon icon="gamepad-variant"></b-icon>
                <router-link to="/todo">HearthStone</router-link>
                <b-icon icon="account-multiple"></b-icon>
                <router-link to="/todo">1x1</router-link>
              </p>
              <div class="columns">
                <div class="column is-narrow">
                  <p>До конца регистрации: <b>2 часа</b></p>
                  <button class="button-participate button is-success is-fullwidth">Участвовать</button>
                </div>
                <div class="column is-narrow is-hidden-mobile">
                  <div class="app-is-vertical-line"></div>
                </div>
                <div class="column">
                  <p>Начало: 28 Янв 12:00 МСК</p>
                  <p>Призовой фонд: 5000 руб</p>
                  <p>Участники: 72 / 256</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div slot="left" class="tournament-preview-image-block">
        <img class="tournament-preview-image app-is-image" src="https://bulma.io/images/placeholders/256x256.png">
      </div>
    </BaseHero>
  
    <router-view></router-view>
  </section>
</template>

<script>
  import BaseHero from '../components/BaseHero'
  
  import debounce from '../assets/js/debounce'
  
  export default {
    name: 'Video',
    data() {
      return {
        tournaments: [1, 2, 3, 4, 5, 6],
  
        search: {
          text: '',
          discipline: undefined,
          isLoading: false,
        },
  
        page: {
          total: 100,
          current: 5,
          perPage: 6,
        }
      }
    },
    methods: {
      getAsyncData: debounce(function() {
        this.search.data = []
        this.search.isLoading = true
      }, 500)
    },
    mounted() {},
    components: {
      BaseHero,
    }
  }
</script>

<style lang="scss" scoped>
  .button-participate {
    margin-top: 6px;
  }
  
  .tournament-preview-image-block {
    margin-bottom: -40px;
    .tournament-preview-image {
      height: 200px;
    }
  }
</style>
