<template>
  <div id="flag">
    <Button :pictureused="picture" @click.native="showModal(); callapi()" />

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :prop_country="country"
      :post="post"
      :country_name="name"
    />
  </div>
</template>

<script>
import Modal from './Modal.vue'
import Button from './Button.vue'
import axios from "axios"

export default {
  name: 'Flag',
  props: {
      picture: String,
      name: String,
      country: String,
  },
  components: {
    Modal,
    Button
  },
  data() {
      return {
        isModalVisible: false,
        post: null,
        countrylink: null
      };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    callapi() {
      this.countrylink=this.country
      axios
      .get('https://newsapi.org/v2/top-headlines?country=' + this.countrylink + '&apiKey=6f5a5bb64f5d48a28c95a100594231ea')

      // If out of request use this one :
      // .get('https://newsapi.org/v2/top-headlines?country=' + this.countrylink + '&apiKey=8839b49b1628405d90760d4384c02658')

      .then(res => {
          this.post = res.data.articles;
          console.dir(this.post)
      })
    }
  },
}
</script>
