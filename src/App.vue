<template>
  <div id="app">
    <Header/>
    <Flags/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Flags from './components/Flags.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Flags,
    Footer
  }
}
</script>

