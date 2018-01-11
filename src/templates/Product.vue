<template>
  <div>
    <img :src="$remoteAddress + photo" alt="" v-for="photo in product.photos">
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
