<template>
    <header>
        <h1>What's New ?</h1>
        <h2>Click on a country to check its daily news !</h2>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
    background-color: #a9f1df9f;
    box-shadow: 0px 11px 30px 0px #00000065;
    padding: 20px 5px 20px 5px;
    text-align: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    outline: 3px solid rgb(255, 255, 255);
    outline-offset: -15px;
    z-index: 2;
}

header>h1 {
    margin: 0;
}
</style>
