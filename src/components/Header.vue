<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#" v-b-toggle.sidebar-1>
        <b-img class="mr-3 mb-4 mb-md-0" :src="require('@/assets/images/sidebar/Logo.svg')" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="item in navItems" :key="item.id">
            <b-img class="mr-2" :src="require(`@/assets/images/sidebar/${item.img}`)" fluid :alt="item.alt" />
            <span class="mr-3 mb-4 mb-md-0">{{ item.name }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-nav class="ml-auto d-none d-lg-block">
        <b-nav-item>
          <b-icon-menu-button-wide v-b-toggle.sidebar-1 />
          <div>
            <b-sidebar bg-variant="primary" id="sidebar-1" aria-labelledby="sidebar-no-header-title" no-header shadow backdrop>
              <template #default="{ }">
                <div class="p-3">
                  <b-img class="mt-5 ml-4" id="sidebar-no-header-title" :src="require('@/assets/images/sidebar/Logo.svg')"  />
                  <p class="ml-4 mt-3">Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
                  <nav class="mb-3 mt-5 ml-4">
                    <b-nav vertical>
                      <b-nav-item class="mb-5" v-for="item in navItems" :key="item.id">
                        <b-img class="mr-3" :src="require(`@/assets/images/sidebar/${item.img}`)" fluid :alt="item.alt" />
                        <span class="mb-4 mb-md-0">{{ item.name }}</span>
                      </b-nav-item>
                    </b-nav>
                  </nav>
                </div>
              </template>
            </b-sidebar>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { BIconMenuButtonWide } from 'bootstrap-vue'
export default {
  data () {
    return {
      navItems: [
        {
          name: 'Home',
          img: 'Home.svg',
          alt: 'Home'
        },
        {
          name: 'Cards',
          img: 'Card.svg',
          alt: 'Card'
        },
        {
          name: 'Payments',
          img: 'Payments.svg',
          alt: 'Payments'
        },
        {
          name: 'Credit',
          img: 'Credit.svg',
          alt: 'Credit'
        },
        {
          name: 'Settings',
          img: 'Account.svg',
          alt: 'Settings'
        }
      ]
    }
  },
  components: {
    BIconMenuButtonWide
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
.navbar {
  background-color: $primary;
  padding: 1rem;
}
.nav-link {
  color: white !important;
}
.navbar-toggler-icon {
  color: white !important;
}
.blue {
  background-color: $primary;
}
.b-sidebar {
  background-color: $primary !important;
}
p {
  color: grey;
}
</style>