<style>
  * {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: lighter;
  }
  #app {
    color: #2c3e50;
    min-height: 100vh;
  }
  .wrap {
    display: flex;
    align-items: stretch;
    height: 100%;
    margin-top: 60px;

  }
  .content {
    margin: 0 10%;
    height: 100%;
    flex-grow: 2;
    transition: 0.5s;
    margin-top: 50px;
  }
  .content.without_margin {
    margin: 50px 0 0 0
  }

</style>

<template>
  <div id="app" >
    <admin-header v-if="$route.path == '/admin'"/>
    <main-header v-else @switchSidebar="sidebar_active = !sidebar_active"/>
    <!--<router-view/>-->
    <div class="wrap">
      <div class="content" :class="{ without_margin:sidebar_active }">
        <router-view/>
      </div>
      <sidebar v-if="$route.path !== '/admin'" :sidebar_active="sidebar_active"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        sidebar_active: true
      }
    },
    methods: {
      getPath: function () {
        console.log(this.$route.path)
      }
    },
    mounted: function () {
      this.getPath(function () {
        console.log('admin')
      })
    }
  }
</script>


