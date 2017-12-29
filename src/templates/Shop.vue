<style>
  .shop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  .shop:after {
    content: "";
  }
  .shop__item {
    width: 300px;
    text-align: center;
    transition: 0.2s
  }
  .shop__item.help {
    visibility: hidden;
    height: 0;
    padding: 0;
    margin: 0;
    border-top-width: 0;
    border-bottom-width: 0;
  }
  .shop__item h3 {
    text-transform: uppercase;
    font-size: 12px;
  }
  .shop__item p {
    font-size: 10px;
  }
  .shop__item img {
    width: 100%;
  }

  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(5px);
  }

  @media (max-width: 760px) {
    .shop {
      justify-content: space-around;
    }
  }
</style>

<template>
  <div>
    <h1>Магазин</h1>
    <transition-group class="shop" name="list-complete" tag="div" >
        <div class="shop__item" v-bind:key="product.name" v-for="product in products">
          <img :src="$remoteAddress + product.preview"  alt="">
          <h3>{{product.name}}</h3>
          <p>{{product.category_name}}</p>
        </div>
        <div class="shop__item help" v-bind:key="1"></div>
        <div class="shop__item help" v-bind:key="2"></div>
        <div class="shop__item help" v-bind:key="3"></div>
        <div class="shop__item help" v-bind:key="4"></div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'Shop',
    data: function () {
      return {
        products: []
      }
    },
    methods: {
      loadProjects: function () {
        this.$http.get('products').then(
          (response) => {
            this.products = response.body
            console.log(this.products)
          },
          (error) => {
            console.error(error)
          }
        )
      }
    },
    mounted: function () {
      this.loadProjects()
    }
  }
</script>

