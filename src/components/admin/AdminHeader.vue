<style>
  .admin-header {
    position: fixed;
    width: 100%;
    top: 0;
    padding: 15px 0;
    transition: 0.2s;
    border-bottom: 1px solid #000
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
</style>
<template>
  <header class="admin-header">
    <nav class="nav">
      <router-link class="nav__item" to="/">Вернуться на главную</router-link>
      <router-link class="nav__item" to="/admin/shop">Товары</router-link>
      <router-link class="nav__item" to="/admin/music">Музыка</router-link>
    </nav>
  </header>
</template>
