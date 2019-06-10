<template>
  <div id="header">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-container>
        <b-navbar-brand href="#">
          <img
            :src="brand"
            alt="Brand Company"
          >
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-nav-form class="w-25">
            <b-form-input
              class="w-100"
              placeholder="Search Companies"
              type="search"
            />
          </b-nav-form>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              New Smartlist
            </b-nav-item>

            <b-nav-item-dropdown right>
              <template slot="button-content">
                Prospect
              </template>
              <b-dropdown-item href="#">
                Item 1
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Item 2
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template slot="button-content">
                Alert
              </template>
              <b-dropdown-item href="#">
                Item 1
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Item 2
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template slot="button-content">
                Learn
              </template>
              <b-dropdown-item href="#">
                Item 1
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Item 2
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <img :src="chrome" alt="">
            </b-nav-item>

            <b-nav-item-dropdown right style="margin-left: 0;">
              <template slot="button-content">
                <img :src="user" alt="">
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Sign out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import brand from 'Images/brand.png';
import chrome from 'Images/chrome.png';
import user from 'Images/user.png';

export default {
  name: 'Header',
  data () {
    return {
      brand,
      chrome,
      user
    };
  }
};
</script>

<style lang="scss" scoped>
  @import "../styles/settings";

  #header {
    .form-control {
      background-color: $dark;
      border: none;
      color: $white;

      &::placeholder {
        color: rgba(255, 255, 255, .8);
      }
    }

    .nav-item {
      text-transform: uppercase;
      &:not(:first-child) {
        margin-left: 20px;
      }
      a {
        color: $white;
        padding-left: 25px;
        padding-right: 25px;
        border-radius: 4px;
        &:hover, &:focus {
          background-color: $light;
        }
      }
    }
  }
</style>
