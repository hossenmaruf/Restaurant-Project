<template>
   

       <img class="logo" src="../assets/resto.png" />



  <h1>Sign Up</h1>

   <div class= "resister" >

  <input type="text" v-model = "name"  placeholder="Enter Name" />
  <input type="text" v-model = "email"  placeholder="Enter Email" />
  <input type="password" v-model = 'password'  placeholder="Enter Password" />

  <button v-on:click="signUp" >SignUp</button>

   </div>
 
</template>

<script>
   
    import axios from 'axios'
   
export default {
  name: "SignUp",
   
    
     data (){
      return {
        name : '' ,
        email : '' ,
        password : '' 
      }
     },

     methods : {


     async signUp (){
       
         let result = await axios.post ("http://localhost:3000/users" , {
          email : this.email ,
          name : this.name ,
          password : this.password
         }) ;
           
           console.warn(result) ;
           if (result.status ==201){
            alert("signUP")
            localStorage.setItem("userinfo" , JSON.stringify(result.data))
           }
       
       }
     }

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
  color : blanchedalmond ;

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
