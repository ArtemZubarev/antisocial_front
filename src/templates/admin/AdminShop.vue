<style>
  .admin_shop {
    display: flex;
    align-items: stretch;
  }
  .products-list {
    background: rgba(0,0,0,0.1);
    max-width: 200px;
    width: 200px;
  }
  .products-list__item {
    padding: 10px;
    cursor: pointer;
  }
  .products-show {
    padding: 40px;
  }
  .item__name {
    width: 400px;
  }
  .item__sizes .size {
    list-style: none;
    padding: 5px;
  }
  .item__sizes .size span {
    display: inline-block;
    width: 20px;
    text-align: center;
    margin-right: 15px;
  }
  .item__sizes .size input {
    width: 50px;
    text-align: center;
  }


</style>

<template>
  <div class="admin_shop">
    <div class="products-list">
      <button>ADD</button>
      <div class="products-list__item" v-for="product in products">
        <span>{{product.name}}</span>
      </div>
    </div>
    <div class="products-show">
      <div class="products-show__item item" v-for="product in products">
        <h2>{{product.name}}</h2>
        <input type="text" class="item__name" v-model="product.name">
        <div class="item__sizes">
          <ul>
            <li class="size"><span>s</span><input type="text" v-model="product.s_count"></li>
            <li class="size"><span>m</span><input type="text" v-model="product.m_count"></li>
            <li class="size"><span>l</span><input type="text" v-model="product.l_count"></li>
            <li class="size"><span>xl</span><input type="text" v-model="product.xl_count"></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminShop',
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
