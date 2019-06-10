<template>
  <div id="app">
    <Header />
    <b-container class="pt-3">
      <b-row>
        <b-col
          cols="12"
          md="3"
          class="nav-company p-0"
        >
          <b-link :to="{name: 'company-data'}">
            Company Data
          </b-link>
          <b-link :to="{name: 'company-table'}">
            Company Table
          </b-link>
          <b-link :to="{name: 'company-page'}">
            Company Page
          </b-link>
        </b-col>

        <b-col
          cols="12"
          md="9"
        >
          <router-view />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from 'Components/Header';
import Footer from 'Components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
