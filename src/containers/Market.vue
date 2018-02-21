<template>
  <section>
    <BaseHero>
      <p slot="rigth" class="title">Магазин</p> 
    </BaseHero>
  
    <section class="app-has-shadow app-is-padding-2">
      <nav class="level container">
        <div class="level-left">
          <b-field class="level-item">
            <b-input placeholder="Search..." type="search" icon="magnify" v-model="search.text" :loading="search.isLoading" @input="getAsyncData"></b-input>
          </b-field>
        </div>
  
        <div class="level-right">
          <p class="level-item">
            <b-dropdown position="is-bottom-left">
              <div class="button is-text" slot="trigger">
                <span>Все</span>
                <b-icon icon="chevron-down"></b-icon>
              </div>
              <b-dropdown-item>Все</b-dropdown-item>
              <b-dropdown-item>Не все</b-dropdown-item>
              <b-dropdown-item>Другие</b-dropdown-item>
            </b-dropdown>
          </p>
        </div>
      </nav>
    </section>
  
    <article class="section container is-widescreen">
      <section class="columns is-multiline">
        <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-narrow" v-for="product in products" :key="product">
          <a @click="showModal(product)">
            <div class="card app-is-lift">
              <div class="card-image">
                <figure class="image is-3by2">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-6">
                  <router-link to="/todo">Товар {{product}}</router-link>
                </p>
                <p class="subtitle is-6">21.12.2112</p>
              </div>
            </div>
          </a>
        </div>
      </section>
  
      <nav class="level">
        <div class="level-item has-text-centered">
          <b-pagination order="is-centered" :total="page.total" :current.sync="page.current" :per-page="page.perPage" />
        </div>
      </nav>
    </article>
  
    <b-modal :active.sync="isShowModal">
      <div class="box">
        <article>{{ productSelected }}</article>
      </div>
    </b-modal>
  </section>
</template>

<script>
  import BaseHero from '../components/BaseHero'
  
  import debounce from '../assets/js/debounce'
  
  export default {
    name: 'Market',
    data() {
      return {
        isShowModal: false,
  
        productSelected: undefined,
        products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  
        search: {
          text: '',
          discipline: undefined,
          isLoading: false,
        },
  
        page: {
          total: 100,
          current: 5,
          perPage: 12,
        }
      }
    },
    methods: {
      getAsyncData: debounce(function() {
        this.search.data = []
        this.search.isLoading = true
      }, 500),
      showModal(product) {
        this.productSelected = product
        this.isShowModal = true
      },
    },
    mounted() {},
    components: {
      BaseHero,
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
