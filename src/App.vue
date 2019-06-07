<template>
  <div id="app">
    <Header />
    <b-container>
      <h1>body</h1>
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
