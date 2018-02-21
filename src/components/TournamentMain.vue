<template>
  <section class="section container">
    <section class="block">
      <p class="title is-5">Награда</p>
      <b-table :data="rewards">
        <template slot-scope="props">
          <b-table-column label="Место" width="300">
            {{ props.row.places }}
          </b-table-column>
          <b-table-column label="Награда">
            {{ props.row.reward }}
          </b-table-column>
        </template>
      </b-table>
    </section>
    <div class="columns">
      <section class="column">
        <nav class="panel">
          <p class="panel-heading">Матчи</p>
          <p class="panel-tabs">
            <a class="is-active">Прошедшие</a>
            <a>Актуальные</a>
            <a>Будущие</a>
          </p>
          <router-link to="/todo" class="panel-block" v-for="match in matches" :key="match">
            <div class="columns match-list-item is-mobile">
              <span class="column is-narrow">18:00 МСК</span>
              <span class="column has-text-centered">Команда 1</span>
              <span class="column is-2 has-text-centered">[2:0]</span>
              <span class="column has-text-centered">Команда 2</span>
            </div>
          </router-link>
          <div class="panel-block is-paddingless">
            <b-pagination class="match-pagination" size="is-small" order="is-centered" :total="page.total" :current.sync="page.current" :per-page="page.perPage"></b-pagination>
          </div>
        </nav>
      </section>
      <section class="column">
        <iframe width=100% height=446 frameborder="0" scrolling="no" src="https://player.twitch.tv/?channel=sglhs"></iframe>
      </section>
    </div>
  </section>
</template>

<script>
  import debounce from '../assets/js/debounce'
  
  export default {
    name: 'TournamentMain',
    data() {
      return {
        matches: [1, 2, 3, 4, 5, 6, 7, 8],
  
        rewards: [{
            places: '1 место',
            reward: '8000 руб'
          },
          {
            places: '2 место',
            reward: '4000 руб'
          },
          {
            places: '3-4 места',
            reward: '3000 руб'
          },
          {
            places: '5-8 места',
            reward: '1000 руб'
          }
        ],
  
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
    components: {}
  }
</script>

<style lang="scss" scoped>
  .match-list-item {
    width: 100%;
  }
  
  .match-pagination {
    margin: 0 auto;
  }
</style>
