<template>
  <section class="section container">
    <article class="grid columns is-mobile app-is-not-select">
      <section class="round-compress column is-narrow" v-for="round in roundsHide" :key="round.id" @click="showRoundsAfter(round)">
        <a class="round-title title is-5 is-primary app-is-padding-2" @click.prevent="hideRoundsBefore(round)">
          <span>{{ round.title }}</span>
        </a>
      </section>
      <div class="round column is-narrow" v-for="round in roundsShow" :key="round.id">
        <a class="round-title title is-5 is-primary app-is-padding-2" @click.prevent="hideRoundsBefore(round)">
          <span>{{ round.title }}</span>
        </a>
        <div class="match" :class="match.id" v-for="match in round.matches" :key="match.id">
          <small><router-link to="todo" v-if="match.id">21 Янв 21:00</router-link></small>
          <div class="match-block" v-if="match.id">
            <article class="match-block-team media app-is-middle">
              <figure class="media-left">
                <p class="image is-32x32">
                  <img src="https://bulma.io/images/placeholders/32x32.png">
                </p>
              </figure>
              <div class="media-content">
                <router-link to="todo" class="match-team-name" :class="{ 'is-active': match.teamFirst == teamSelected }">
                  <span @mouseover="mouseOver(match.teamFirst)" @mouseout="mouseOut(match.teamFirst)">{{ match.teamFirst }}</span>
                </router-link>
              </div>
              <div class="media-right">
                <p class="match-team-score"><b>1</b></p>
              </div>
            </article>
            <article class="match-block-team media app-is-middle">
              <figure class="media-left">
                <p class="image is-32x32">
                  <img src="https://bulma.io/images/placeholders/32x32.png">
                </p>
              </figure>
              <div class="media-content">
                <router-link to="todo" class="match-team-name" :class="{ 'is-active': match.teamSecond == teamSelected }">
                  <span @mouseover="mouseOver(match.teamSecond)" @mouseout="mouseOut(match.teamSecond)">{{ match.teamSecond }}</span>
                </router-link>
              </div>
              <div class="media-right">
                <p class="match-team-score"><b>2</b></p>
              </div>
            </article>
            <div class="match-link"></div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    name: 'TournamentGrid',
    data() {
      return {
        teamSelected: 0,

        rounds: [{
          id: 1,
          isShow: true,
          title: '1/4',
          matches: [{
            id: undefined,
          }, {
            id: 2,
            teamFirst: 'Команда 3',
            teamSecond: 'Команда 4',
            date: '21.12.2112'
          }, {
            id: 3,
            teamFirst: 'Команда 5',
            teamSecond: 'Команда 6',
            date: '21.12.2112'
          }, {
            id: 4,
            teamFirst: 'Команда 7',
            teamSecond: 'Команда 8',
            date: '21.12.2112'
          }]
        }, {
          id: 2,
          isShow: true,
          title: '1/2',
          matches: [{
            id: 5,
            teamFirst: 'Команда 1',
            teamSecond: 'Команда 3',
            date: '21.12.2112'
          }, {
            id: 6,
            teamFirst: 'Команда 6',
            teamSecond: 'Команда 8',
            date: '21.12.2112'
          }]
        }, {
          id: 3,
          isShow: true,
          title: 'Final',
          matches: [{
            id: 7,
            teamFirst: 'Команда 1',
            teamSecond: 'Команда 8',
            date: '21.12.2112'
          }]
        }]
      }
    },
    computed: {
      roundsShow(team) {
        return this.rounds.filter(it => it.isShow)
      },
      roundsHide() {
        return this.rounds.filter(it => !it.isShow)
      }
    },
    methods: {
      mouseOver(team) {
        console.log('over', team)
        this.teamSelected = team
      },
      mouseOut(team) {
        console.log('out', team)        
        this.teamSelected = 0
      },
      showRoundsAfter(round) {
        let index = this.rounds.indexOf(round)
        for (let i = index; i < this.rounds.length; i++) {
          this.rounds[i].isShow = true
        }
      },
      hideRoundsBefore(round) {
        let index = this.rounds.indexOf(round)
        for (let i = 0; i <= index; i++) {
          this.rounds[i].isShow = false
        }
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  $grid-width: 1128px;
  $round-padding: 12px;
  $match-height: 120px;
  $match-block-height: 65px;
  $link-border-width: 2px;
  $link-border-width-half: ($link-border-width / 2);
  $grey-light: #b5b5b5;
  .grid {
    overflow-x: auto;
    .round-compress .round-title {
      height: 100%;
    }
    .round-title {
      width: 100%;
      display: block;
      background-color: #E36049;
      color: white;
    }
    .match {
      width: ($grid-width - 5 * $round-padding) / 5;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      .match-block {
        width: 100%;
        position: relative;
        border: 1px solid $grey-light;
        .match-block-team {
          margin-top: 0;
          padding-top: 0;
          .match-team-name {
            color: #4a4a4a;
            &.is-active {
              color: #E36049;
            }
          }
          .match-team-score {
            margin-right: 1rem;
          }
        }
        .match-link,
        .match-link::after {
          position: absolute;
          z-index: 1;
          border-width: $link-border-width;
          border-color: $grey-light;
          width: $round-padding + $link-border-width;
          right: -$round-padding - $link-border-width;
          border-style: solid solid solid none;
        }
        .match-link::after {
          content: ' ';
        }
      }
    }
    .match:nth-child(2n+0) .match-link {
      top: $match-block-height / 2 - $link-border-width-half;
      border-bottom: none;
      &::after {
        bottom: 0;
        border-top: none;
      }
    }
    .match:nth-child(2n+1) .match-link {
      bottom: $match-block-height / 2 - $link-border-width-half;
      border-top: none;
      &::after {
        top: 0;
        border-bottom: none;
      }
    }
    .round:nth-last-of-type(1) .match-link {
      display: none;
    }
    .round:nth-of-type(1) .match {
      height: $match-height;
      .match-link {
        height: $match-height / 2 + $link-border-width;
      }
    }
    .round:nth-of-type(2) .match {
      height: $match-height * 2;
      .match-link {
        height: $match-height / 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(3) .match {
      height: $match-height * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(4) .match {
      height: $match-height * 2 * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(5) .match {
      height: $match-height * 2 * 2 * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 * 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(6) .match {
      height: $match-height * 2 * 2 * 2 * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 * 2 * 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(7) .match {
      height: $match-height * 2 * 2 * 2 * 2 * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 * 2 * 2 * 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(8) .match {
      height: $match-height * 2 * 2 * 2 * 2 * 2 * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(9) .match {
      height: $match-height * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 + $link-border-width;
      }
    }
    .round:nth-of-type(10) .match {
      height: $match-height * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2;
      .match-link {
        height: $match-height / 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 + $link-border-width;
      }
    }
  }
</style>
