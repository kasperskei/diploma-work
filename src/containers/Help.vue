<template>
  <section>
    <BaseHero>
      <p slot="rigth" class="title">Помощь</p>
    </BaseHero>
  
    <article class="section container is-widescreen">
      <div class="columns">
        <section class="column"> 
          <b-field label="Email">
            <b-input type="email" v-model.lazy.trim="email"></b-input>
          </b-field>
          <b-field label="Сообщение">
            <b-input type="textarea" minlength="10" maxlength="1000" v-model.lazy.trim="message"></b-input>
          </b-field>
          <button class="button is-primary" :class="{ 'is-loading': isSending }" :disabled="!isValid" @click="sendMessage">Отправить</button>
        </section>
        <div class="column is-narrow">
          <div class="app-is-vertical-line is-hidden-mobile"></div>
          <hr class="is-hidden-tablet" />
        </div>
        <div class="column">
          <ul class="" v-for="question in questions" :key="question">
            <li><a @click="showModal(question)">Вопрос {{ question }}</a></li>
          </ul>
        </div>
      </div>
    </article>
  
    <b-modal :active.sync="isShowModal">
      <div class="box">
        <article>{{ questionSelected }}</article>
      </div>
    </b-modal>
  </section>
</template>

<script>
  import BaseHero from '../components/BaseHero.vue'

  export default {
    name: 'Help',
    data() {
      return {
        email: '',
        message: '',
        isSending: false,
        isShowModal: false,
        questionSelected: undefined,
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      }
    },
    computed: {
      isValid() {
        return true
      }
    },
    methods: {
      sendMessage() {
        if (!this.isValid) {
          return this.$toast.open({
            message: 'Введены некорректные данные',
            type: 'is-danger'
          })
        }
  
        this.$toast.open({
          message: 'Сообщение отправленно',
          type: 'is-success'
        })
      },
      showModal(question) {
        this.questionSelected = question
        this.isShowModal = true
      },
    },
    components: {
      BaseHero,
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
