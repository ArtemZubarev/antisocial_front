<style>
  .music {

  }
  .music__list {
    display: flex;
  }
  .music__item {
    display: flex;
  }
</style>

<template>
  <div class="music">
    <div class="music__list">
      <div class="music__item item" v-for="band in bands">
        <div class="item__img">
          <img src="" alt="">
        </div>
        <span class="item__genre">{{band.genre}}</span>
        <h2 class="item__name">{{band.name}}</h2>
        <router-link to="/music/:id" class="item__more">Больше</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Music',
    data: function () {
      return {
        bands: {}
      }
    },
    methods: {
      loadMusic: function () {
        this.$http.get(`music`).then(
          (response) => {
            this.bands = response.body
          },
          (error) => {
            console.error(error)
          }
        )
      }

    },
    mounted: function () {
      this.loadMusic()
    }
  }
</script>
