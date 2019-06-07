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
          <b-nav-form class="w-50">
            <b-form-input
              size="sm"
              class="w-100"
              placeholder="Search Companies"
            />
          </b-nav-form>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown
              text="Lang"
              right
            >
              <b-dropdown-item href="#">
                EN
              </b-dropdown-item>
              <b-dropdown-item href="#">
                ES
              </b-dropdown-item>
              <b-dropdown-item href="#">
                RU
              </b-dropdown-item>
              <b-dropdown-item href="#">
                FA
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Sign Out
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

export default {
  name: 'Header',
  data () {
    return {
      brand
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
      color: #ffffff;

      &::placeholder {
        color: rgba(255, 255, 255, .8);
      }
    }
  }
</style>
