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
.btn {
  padding: 0;
  width: 250px;
  height: 150px;
  color: lightgrey;
}
.btn:hover {
  transform: scale(1.1)
}
</style>
