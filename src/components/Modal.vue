<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            Articles
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            Back
          </button>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <ul>
                <li v-for="(value, key) in post" :key="key">
                <h3>{{ value.title }}</h3>
                <p>{{ value.description }}</p>
                <a :href="value.url">
                  <button>See more</button>
                </a>
                </li>
            </ul>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            Articles
          </slot>

        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";

  export default {
    name: 'Modal',
    props: {
      prop_country: String,
    },
    methods: {
      close() {
        this.$emit('close');
      },
      function() {
        this.country=this.prop_country
        axios
        .get('https://newsapi.org/v2/top-headlines?country=' + this.country + '&apiKey=8839b49b1628405d90760d4384c02658')
        .then(res => {
            this.post = res.data.articles;
            console.dir(this.post)
        })
    }
    },
    data() {
    return {
      post: null,
      country: null,
    };
    },
    watch: {
      country: function(newCountry) {
        localStorage.setItem("country", newCountry)
      }
    },
    created: function() {
      this.function();
    } 
  };
</script>

<style>
  .modal-backdrop {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 60%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>