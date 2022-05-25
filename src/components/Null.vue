<template>
  <div class="flag">
    <h1>Drapeaux</h1>
    <img
        id="show-modal"
        @click="showModal = true"
        v-bind:src="flag"
        v-on:click="redirect_to_login"
    >

    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false">
        <template #header>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "./News.vue";

export default {
  name: 'Flag',
  prop: {
    flag: require("../assets/Flags/fr.png"),
  },
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  }
}
</script>

<style scoped>
* {
  background-color: lightgoldenrodyellow;
}
</style>
