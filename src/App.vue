<template>
  <router-view />
</template>

<script>


export default {
  name: "App",
  components: {
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body {
  padding: 0px ;
  margin: 0px ;
}

.logo {
  width: 100px;
}

.resister input,
.login input , .addResto input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  /* border: 10px rgb(238, 99, 18); */
  background-color: rgb(34, 38, 38);
  color: rgb(234, 147, 15);
}

.resister button, .addResto button {
  width: 160px;
  height: 40px;
  border: 1px skyblue;
  background-color: black;
  color: aliceblue;
  cursor: pointer;
}
</style>
