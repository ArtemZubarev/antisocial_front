<style>
 .sidebar {
   flex-shrink: 0;
   width: 0px;
   overflow: hidden;
   transition: 0.5s;
   border-left: none;
 }
  .sidebar.active {
    width: 500px;
    border-left: 1px solid #333;
  }
</style>

<template>
  <div class="sidebar" :class="{ active: sidebar_active }">
    <h1>sidebar</h1>
  </div>
</template>
<script>
  export default {
    name: 'Sidebar',
    data: function () {
      return {
      }
    },
    props: ['sidebar_active']
  }
</script>
