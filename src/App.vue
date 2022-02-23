<template>
  <div id="app">
    <Header/>
    <Map/>
    <Select/>
    <Flag/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Map from './components/Map.vue'
import Select from './components/Select.vue'
import Flag from './components/Flag.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Map,
    Select,
    Flag,
    Footer
}
}
</script>

<style>
#app {
  color: black;
}
</style>
