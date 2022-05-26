<template>
    <footer>
        <h3>Clémence Voegelé | 2022 | All right reserved</h3>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
    background: #a9f1df9f;
    padding: 1%;
    border-top: 4px solid #ffffff;
}

@media (max-width: 599px) {
    footer>h3 {
    transform: scale(0.6)
  }
}

@media (min-width: 600px) and (max-width: 904px) {
    footer>h3 {
    transform: scale(0.7)
  }
}

@media (min-width: 905px) and (max-width: 1229px) {
    footer>h3 {
    transform: scale(0.8)
  }
}  
@media (min-width: 1230px) and (max-width: 1505px) {
    footer>h3 {
    transform: scale(0.9)
  }
}
</style>