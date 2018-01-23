<style>
  .nav-effect {
    position: absolute;
  }
</style>

<template>
  <svg class="nav-effect" :width="radius * 2 + 2" :height="radius * 2 + 2" xmlns="http://www.w3.org/2000/svg">
    <g>
      <title>Layer 1</title>
      <ellipse stroke="#d1373a" :ry="radius" :rx="radius" id="svg_4" cy="24" cx="24" stroke-width="1.5" fill="#d1373a"/>
    </g>
    <animateTransform attributeName="transform" attributeType="XML"
                      type="scale"
                      from="1" to="100"
                      begin="click" dur="0.3s"
                      additive="sum"/>
  </svg>
</template>

<script>
  export default {
    data: function () {
      return {
        radius: 23
      }
    },
    methods: {
      activateAnimation: function () {
        this.radius = 2000
      }
    }
  }
</script>
