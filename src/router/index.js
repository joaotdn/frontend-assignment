import Vue from 'vue';
import Router from 'vue-router';

import Home from 'Pages/Home';
import CompanyData from 'Pages/CompanyData';
import CompanyTable from 'Pages/CompanyTable';
import CompanyPage from 'Pages/CompanyPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      children: [
        {
          name: 'company-data',
          path: '',
          component: CompanyData
        },
        {
          name: 'company-table',
          path: 'table',
          component: CompanyTable
        },
        {
          name: 'company-page',
          path: 'page',
          component: CompanyPage
        }
      ]
    }
  ]
});
