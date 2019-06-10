<template>
  <div id="app">
    <Header />
    <b-container class="pt-3">
      <b-row>
        <b-col>
          <b-breadcrumb :items="breadcrumbItems" />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          md="3"
        >
          <b-row>
            <b-col cols="12">
              <div class="w-100 nav-company">
                <b-link :to="{name: 'company-data'}">
                  Company Data
                </b-link>
                <b-link :to="{name: 'company-table'}">
                  Company Table
                </b-link>
                <b-link :to="{name: 'company-page'}">
                  Company Page
                </b-link>
              </div>
            </b-col>
          </b-row>
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
import { mapGetters } from 'vuex';
import { UPDATE_BREADCRUMB } from 'Store/actions.type';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  computed: {
    ...mapGetters(['breadcrumbItems']),
    breadcrumb () {
      return this.$store.dispatch(UPDATE_BREADCRUMB, { text: this.$route.meta.text, active: true });
    }
  },

  watch: {
    $route () {
      this.breadcrumb();
    }
  },

  mounted () {
    this.breadcrumb();
  }
};
</script>

<style></style>
