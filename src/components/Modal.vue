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
            End of articles
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Modal',
    props: {
      prop_country: String,
      post: Array
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
</script>

<style>
  .modal-backdrop {
    /* position: -webkit-sticky; */
    position: absolute;
    /* top: 60%; */
    left: 50vw;
   min-height: 40vh;
    width: 100vw;
    transform: translate(-50%,-25%);
    /* background-color: rgba(0, 0, 0, 0.3); */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    position: fixed; 
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
    height: 60vh;
    width: 90vw;
    overflow-y: auto;
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