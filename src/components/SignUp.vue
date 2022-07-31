<template>
   

       <img class="logo" src="../assets/resto.png" />



  <h1>Sign Up</h1>

   <div class= "resister" >

  <input type="text" placeholder="Enter Name" />
  <input type="text" placeholder="Enter Email" />
  <input type="password" placeholder="Enter Password" />

  <button>SignUp</button>

   </div>
 
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style>
.logo {
  width: 100px;
}

.resister input {
  width : 300px ;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  /* border: 10px rgb(238, 99, 18); */
  background-color: rgb(34, 38, 38);

}

.resister button {
   
   width: 160px;
   height: 40px;
   border: 1px skyblue;
   background-color: black;
   color: aliceblue;
   cursor: pointer;


}
</style>
