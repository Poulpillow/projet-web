<template>
    <div class="news">
      <h1>Articles</h1>
      <ul>
        <li v-for="(value, key) in post" :key="key">
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </li>
      </ul>
    
      <Transition name="modal">
        <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <button class="modal-default-button" @click="$emit('close')">
              Back
              </button>
              <div class="modal-header">
                <slot name="header"></slot>
              </div>
              <div class="modal-body">
                <slot name="body"></slot>
              </div>
              <div class="modal-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'News',
  data() {
    return {
      post: null,
    };
  },
  created: function() {
    axios
      .get('https://newsapi.org/v2/top-headlines?' + 'country=fr&' + 'apiKey=8839b49b1628405d90760d4384c02658')
      .then(res => {
        this.post = res.data.articles;
        console.dir(this.post)
      })
  }
}
</script>

<style scoped>
* {
  background-color: lightgreen;
}
</style>