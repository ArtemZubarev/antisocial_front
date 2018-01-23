<style>
  img {
    width: 100%;
    transition: 0.2s;
  }
  .product {
    display: flex;
    width: calc(100% - 400px);
  }
  .sidebar {
    position: fixed;
    right: 0;
    width: 400px;
    border-left: 1px solid black;
    transition: 0.3s;
    padding-left: 25px;
  }
  .sidebar-slide-enter {
    opacity: 0;
    transform: translateX(400px);
  }
  .sidebar-slide-leave-to{
    opacity: 1;
    transform: translateX(0px);
  }
  .list-complete-enter, .list-complete-leave {
    opacity: 0;
    transform: translateY(50px);
  }
  @media (max-width: 1025px) {
    .content {
      margin: 0;
    }
    .product {
      display: block;
      width: 80%;
    }
    .sidebar {
      display: block;
      position: relative;
    }
  }
</style>

<template>
  <div class="product">
    <div class="content">
      <transition-group name="list-complete"
                        tag="div">
        <img :src="$remoteAddress + photo" alt="" v-for="photo in product.photos" v-bind:key="photo">
      </transition-group>

    </div>
    <transition name="sidebar-slide" appear>
      <div class="sidebar">
        <h1>{{product.name}}</h1>
        <h3>{{product.category_name}}</h3>
        <input type="radio" name="size" v-if="product.s_count"> S
        <input type="radio" name="size" v-if="product.m_count"> m
        <input type="radio" name="size" v-if="product.l_count"> l
        <input type="radio" name="size" v-if="product.xl_count"> xl
        <br>
        <input type="number">
        <br>
        <button>В корзину</button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Shop',
    data: function () {
      return {
        product: {}
      }
    },
    methods: {
      loadProduct: function () {
        this.$http.get(`products/${this.$route.params.id}`).then(
          (response) => {
            this.product = response.body
            console.log(this.product)
          },
          (error) => {
            console.error(error)
          }
        )
      }
    },
    mounted: function () {
      this.loadProduct()
    }
  }
</script>
