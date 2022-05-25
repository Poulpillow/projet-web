<template>
  <div id="flag">
    <button type="button" class="btn" @click="showModal">
      <img :src="picture">
    </button>

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :prop_country="pays"
    />
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'Flag',
  props: {
      picture: String,
      country: String,
      pays: String
  },
  components: {
    Modal
  },
  data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
}
</script>

<style scoped>
.btn {
  padding: 0;
  width: 250px;
  height: 150px;
}
img {
    max-width: 100%;
    height: 100%;
}
</style>
