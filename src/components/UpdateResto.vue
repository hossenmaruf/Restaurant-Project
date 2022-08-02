<template>
  <Header />

  <h1>hello, this is update restaurant page</h1>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "UpdateResto",
  components: { Header },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "UpdateResto" });
    }
  },
};
</script>
