<template>
  <div id="flags">
    <Flag v-for="flag in flags" :key="flag.country" :country="flag.country" :name="flag.name" :picture="flag.picture"/>
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

@media (max-width: 599px) {
    #flags {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 600px) and (max-width: 904px) {
    #flags {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 905px) and (max-width: 1229px) {
    #flags {
        grid-template-columns: 1fr 1fr 1fr;
    }
}  
@media (min-width: 1230px) and (max-width: 1505px) {
#flags {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

}
</style>