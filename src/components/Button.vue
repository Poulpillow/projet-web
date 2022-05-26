<template>
    <button type="button" class="btn">
      <img :src="pictureused">
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
      pictureused: String
  },
}
</script>

<style scoped>

</style>
