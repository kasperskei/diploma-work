<template>
  <section>
    <BaseHero>
      <p slot="rigth" class="title">Турниры</p>
    </BaseHero>
  
    <BaseNavbar>
      <b-field slot="left">
        <b-input placeholder="Search..." type="search" icon="magnify" v-model="search.text" :loading="search.isLoading" @input="getAsyncData"></b-input>
      </b-field>
      <section slot="rigth" class="columns is-multiline is-mobile">
        <div class="column is-narrow">
          <b-field>
            <p class="control">
              <span class="button is-static">Дисциплина</span>
            </p>
            <p class="control">
              <b-dropdown v-model="search.discipline" position="is-bottom-left">
                <div class="button" slot="trigger">
                  <span>{{ search.discipline || 'Все' }}</span>
                  <b-icon icon="chevron-down"></b-icon>
                </div>
                <b-dropdown-item>Все</b-dropdown-item>
                <b-dropdown-item v-for="discipline in disciplines" :key="discipline" :value="discipline">
                  {{ discipline }}
                </b-dropdown-item>
              </b-dropdown>
            </p>
          </b-field>
        </div>
        <div class="column is-narrow">
          <b-field>
            <p class="control">
              <span class="button is-static">Формат</span>
            </p>
            <p class="control">
              <b-dropdown position="is-bottom-left">
                <div class="button" slot="trigger">
                  <span>Все</span>
                  <b-icon icon="chevron-down"></b-icon>
                </div>
                <b-dropdown-item>Все</b-dropdown-item>
                <b-dropdown-item>Dota</b-dropdown-item>
                <b-dropdown-item>Gwint</b-dropdown-item>
                <b-dropdown-item>WoT</b-dropdown-item>
              </b-dropdown>
            </p>
          </b-field>
        </div>
      </section>
    </BaseNavbar>
  
    <article class="section container is-widescreen">
      <section class="columns is-multiline is-variable is-8">
        <div class="column is-12-tablet is-half-desktop" v-for="tournament in tournaments" :key="tournament">
          <article class="media">
            <div class="media-content">
              <div class="columns">
                <div class="column">
                  <p class="title is-5 is-marginless">
                    <router-link to="/todo">SGL HS Cup #26</router-link>
                  </p>
                  <p class="subtitle is-6 is-marginless">
                    <b-icon icon="gamepad-variant" size="is-small"></b-icon>
                    <router-link to="/todo">HearthStone</router-link>
                    <b-icon icon="account-multiple" size="is-small"></b-icon>
                    <router-link to="/todo">1x1</router-link>
                  </p>
                  <p>Начало: 28 Янв 12:00 МСК</p>
                  <p>Призовой фонд: 5000 руб</p>
                  <p>Участники: 72 / 256</p>
                </div>
                <div class="column is-narrow">
                  <p>До конца регистрации:</p>
                  <p><b>2 часа</b></p>
                  <br>
                  <button class="button is-success is-fullwidth">Участвовать</button>
                </div>
              </div>
            </div>
          </article>
          <hr class="tournaments-hr" />
        </div>
      </section>
  
      <nav class="level">
        <div class="level-item has-text-centered">
          <b-pagination order="is-centered" :total="page.total" :current.sync="page.current" :per-page="page.perPage" />
        </div>
      </nav>
    </article>
  </section>
</template>

<script>
  import BaseHero from '../components/BaseHero'
  import BaseNavbar from '../components/BaseNavbar'
  
  import debounce from '../assets/js/debounce'
  
  export default {
    name: 'Video',
    data() {
      return {
        tournaments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        disciplines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  
        search: {
          text: '',
          textConfirmed: '',
          discipline: '',
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
        this.search.textConfirmed = this.search.text
        this.search.isLoading = true
      }, 500)
    },
    mounted() {},
    components: {
      BaseNavbar,
      BaseHero,
    }
  }
</script>

<style lang="scss" scoped>
  .tournaments-hr {
    margin-bottom: 0;
  }
  
  .tournament-preview-image {
    height: 110px;
    width: 110px;
  }
</style>
