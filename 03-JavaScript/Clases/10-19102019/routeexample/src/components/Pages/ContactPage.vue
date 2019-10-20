<template>
    <div>    
       <div>
         <h3> Sign On </h3>
      </div>
      <div>
         <label for="user-fname">First Name:</label>
         <input type="text" id="fname" value="First Name" v-model="newFirstName">
         <p> {{invalidFname}} </p>
         <br>
       </div>
       <div>
         <label for="user-lname">Last Name:</label>
         <input type="text" id="lname" value="Last Name" v-model="newLastName">
         <p> {{invalidLname}} </p>
         <br>
       </div>
       <div>
         <label for="user-mail">Email:</label>
         <input type="email" id="mail" value="user@email.com" v-model="newEmail">
         <p> </p>
         <br>
       </div>
       <div>
         <label for="user-age">Age:</label>
         <input type="text" id="user-age" value="Age" v-model="newAge">
         <p> {{invalidAge}} </p>
         <br>
       </div>
       <br>
       <button @click="validate"> Sing On </button>
      </div>
</template>

<script>
    export default {
        name: "ContactPage",
        data: () => {
            return{
                newFirstName: "",
                invalidFirstName: "",
                newLastName: "",
                invalidLastName: "",
                newEmail: "",
                invalidEmail:"",
                newAge:"",
                invalidAge:"",
            };
        },
   
        computed:{
            isFirstNameValid() {
                return this.newFirstName !=="";
            },

            isLastNameValid(){
                return this.newLastName !=="";
            }
        },

        methods:{
            validate: function() {
                this.invalidFirstName = this.isFirstNameValid
                ? ""
                : "Este campo es requerido, por favor ingresa tu nombre"
            
                this.invalidLastName = this.isLastNameValid
                ? ""
                : "Este campo es requerido, por favor ingresa tu apellido"

               /* function validateEmail() {
                    let i="";
                    for (i=0; i<100; i++){
                        if (this.newEmail.value.charAt(i)=="@") {
                                return ""
                        }
                        return "El correo debe contener un @ ";                        
                    }
                }*/

                function validateAge() {
                    if (this.newAge < 0 || this.newAge > 110 || this.newAge === ""){
                        return "Tu edad debe ser entre 0 y 110; este campo es requerido"
                    }
                }

              //  validateEmail();
                validateAge();
            }
        }
    }
</script>

<style>
    p{
        color: red;
        font-style: italic;
    }
</style>