<template>
    <div>    
       <div>
         <h3> Sign On </h3>
      </div>
      <div>
         <label for="fname">First Name:</label>
         <input type="text" id="fname" v-model="newFirstName">
         <p> {{invalidFirstName}} </p>
         <br>
       </div>
       <div>
         <label for="lname">Last Name:</label>
         <input type="text" id="lname" v-model="newLastName">
         <p> {{invalidLastName}} </p>
         <br>
       </div>
       <div>
         <label for="mail">Email:</label>
         <input type="email" id="mail" v-model="newEmail">
         <p> {{invalidEmail}} </p>
         <br>
       </div>
       <div>
         <label for="age">Age:</label>
         <input type="number" id="age" v-model="newAge">
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
                
                if (Number(this.newAge) <= 0) {
                    this.invalidAge = "Tu edad debe ser mayor a cero";
                } else if (Number(this.newAge) > 110) {
                    this.invalidAge = "Tu edad debe ser menor a ciento diez (110)";
                } else if (Number(this.newAge) > 0 && this.newAge < 110) {
                    this.invalidAge = "";
                }  else {
                    this.invalidAge ="Este campo es requerido";
                }
                
                if (this.newEmail === "") {
                    this.invalidEmail = "El correo electrónico es obligatorio";
                }

                this.invalidFirstName = this.isFirstNameValid
                    ? ""
                    : "Este campo es requerido, por favor ingresa tu nombre"
                
                this.invalidLastName = this.isLastNameValid
                    ? ""
                    : "Este campo es requerido, por favor ingresa tu apellido"
            },
        }
    }
</script>

<style>
    p{
        color: red;
        font-style: italic;
    }
</style>