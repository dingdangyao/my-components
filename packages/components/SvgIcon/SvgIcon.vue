<template>
  <svg class="svgClass" aria-hidden="true">
    <use :xlink:href="this.iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      iconName: `#${this.iconClass}`
    };
  }
};
</script>

<style scoped>
.svgClass {
  width: 5em;
  height: 5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
