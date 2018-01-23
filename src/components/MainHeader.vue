<style>
  .header {
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
    padding: 15px 0;
    transition: 0.3s;
  }
  .header:hover {
    background: #fff;
  }
  .nav__item {
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    color: #000;
    transition: 0.1s;
    padding: 5px 10px;
    border-bottom: 1px solid rgba(255,255,255,0);
  }
  .nav__item.is-active {
    /*text-shadow: 0px 0px 3px rgba(150, 150, 150, 1);*/
    border-bottom: 1px solid black;
  }
  .slide-enter {
    opacity: 0;
    transform: translateY(-50px);
  }
  .slide-leave-to{
    opacity: 1;
    transform: translateY(0px);
  }
  @media (max-width: 760px) {
    .header {
      top: auto;
      bottom: 0;
      position: fixed;
      background: #fff;
      z-index: 10;
    }
    .header .nav {
      text-align: center;
    }
    .slide-enter {
      opacity: 0;
      transform: translateY(50px);
    }
    .slide-leave-to{
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>

<template>
  <transition name="slide" appear>
    <header class="header">
      <nav class="nav">
        <router-link class="nav__item" to="/homepage">antisocial_pro</router-link>
        <router-link class="nav__item" to="/shop">Магазин</router-link>
        <router-link class="nav__item" to="/music">Музыка</router-link>
        <!--<button @click="$emit('switchSidebar')">show/hide</button>-->
      </nav>
    </header>
  </transition>
</template>

<script>
  export default {
    name: 'MainHeader',
    data: function () {
      return {
        headerLoad: false
      }
    },
    mounted: function () {
      console.log(1)
//      this.headerLoad = true
    }
  }
</script>

