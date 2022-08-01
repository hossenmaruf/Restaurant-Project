<template>
  <h1>hello, this is home page</h1>
</template>

<script>
export default {
  name: "Home",  
  mounted(){
    let user = localStorage.getItem('user-info') ;
    if(user){
      this.$router.push({name: 'SignUP'})
    }
  }
};
</script>
