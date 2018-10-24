import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Bookmarks from '@/components/Bookmarks';
import Page404 from '@/components/404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      component: Bookmarks
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ],
  linkActiveClass: "menu__link_light-text ",
  linkExactActiveClass: "menu__link_active",
});
