import Vue from 'vue'
import Router from 'vue-router'

// const Main = () => import('@/containers/Main')
// const Market = () => import('@/containers/Market')
// const Video = () => import('@/containers/Video')
// const Tournament = () => import('@/containers/Tournament')
// const TournamentMain = () => import('@/components/TournamentMain')
// const TournamentGrid = () => import('@/components/TournamentGrid')
// const Tournaments = () => import('@/containers/Tournaments')
// const Help = () => import('@/containers/Help')
// const NotFound = () => import('@/containers/NotFound')

import Main from '@/containers/Main'
import Market from '@/containers/Market'
import Video from '@/containers/Video'
import Tournament from '@/containers/Tournament'
import TournamentMain from '@/components/TournamentMain'
import TournamentGrid from '@/components/TournamentGrid'
import Tournaments from '@/containers/Tournaments'
import Help from '@/containers/Help'
import NotFound from '@/containers/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: Tournaments,
    },
    {
      path: '/tournaments/:id',
      name: 'tournament',
      component: Tournament,
      children: [
        {
          name: 'tournament-main',
          path: '',
          component: TournamentMain
        },
        {
          name: 'tournament-grid',
          path: 'grid',
          component: TournamentGrid
        },
        {
          name: 'tournament-rules',
          path: 'rules',
          component: NotFound
        },
        {
          name: 'tournament-members',
          path: 'members',
          component: NotFound
        }
      ]
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
