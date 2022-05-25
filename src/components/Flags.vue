<template>
  <div id="flags">
    <Flag v-for="flag in flags" :key="flag.pays" :pays="flag.pays" :country="flag.country" :picture="flag.picture"/>
  </div>
</template>

<script>
import Flag from './Flag.vue'
import flags from '@/flagsdata.js'

export default {
  name: 'Flags',
  components: {
    Flag
  },
  data() {
    return {
      flags: flags,
    }
  },
}
</script>

<style scoped>
#flags {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

#flags>* {
    margin: 25px;
    justify-self: center;
    align-self: center;
    transition: 0.4s;
}
</style>