<template>
  <section>
    <BaseHero>
      <p slot="rigth" class="title">Новости</p>
    </BaseHero>
  
    <article class="section container is-widescreen">
      <section class="columns is-multiline">
        <div class="column is-half-tablet" v-for="item in news" :key="item">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img class="" src="https://bulma.io/images/placeholders/128x128.png">
              </p>
            </figure>
  
            <div class="media-content">
              <p class="title is-5 is-marginless">
                <router-link to="/todo">Новость</router-link>
              </p>
              <p class="subtitle is-6 is-marginless"><small>21.12.2112</small></p>
  
              <div class="content">
                И снова субботняя DotA2, но теперь с новым призовым фондом! 15 000 рублей были разыграны в субботу. Кто стал победителем?
              </div>
  
              <b-taglist>
                <!-- <b-tag type="is-dark" rounded>21.12.2112</b-tag> -->
                <b-tag rounded>Общее</b-tag>
                <b-tag rounded>История из жизни</b-tag>
              </b-taglist>
            </div>
          </article>
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
  
  export default {
    name: 'Main',
    data() {
      return {
        news: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        search: {
          text: '',
          data: [],
          isLoading: false,
        },
        page: {
          total: 100,
          current: 5,
          perPage: 12,
        }
      }
    },
    components: {
      BaseHero
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
