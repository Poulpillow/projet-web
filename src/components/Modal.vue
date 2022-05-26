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
            The 20 most recent articles of {{country_name}}
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
            Page of news
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
      country_name: String,
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
    position: absolute;
    left: 50vw;
    min-height: 40vh;
    width: 100vw;
    transform: translate(-50%,-25%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    font-family: sans-serif;
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
    color: #00aced;
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
    min-width: 90vw;
    max-width: 90vw;
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
    color: #00aced;
    background: transparent;
  }

  .btn-green {
    color: white;
    background-color: #00aced;
    border: 1px solid #00aced;
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

  * {
    font-weight: bold;
  }
</style>