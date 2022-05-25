<template>
  <div id="app">
    <Header/>
    <Flags/>
    <Footer/>
  </div>
</template>

<script>
import Flags from './components/Flags.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Flags,
    Header,
    Footer
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

