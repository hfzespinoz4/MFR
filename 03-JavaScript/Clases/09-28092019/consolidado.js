Vue.component('task-item', {
    /*el span TaskDone y el botón se mostrarán únicamente
    si se ha realizado la tarea, considerando el estado del
    checkbox*/
    template:`
        <li>
            <input type="checkbox" v-model="tarea.done">
            <span> {{ tarea.id }} </span>
            <span> {{ tarea.name}} </span>
            <span v-if="tarea.done"> Task Done! </span>
            <button 
                v-if="tarea.done"
                @click="$emit('remove', tarea.id)"
                > Borrar </button>         
        </li>
    `,
})

new Vue({
    el: '#app1',
    data: {
        nameTask:"",
        taskList: [
            {   
                id: 0,
                name: 'First task',
                done: true
            },
            {
                id: 1,
                name: 'Second Task',
                done: true
            },
            {
                id: 2,
                name: 'Third Task',
                done: false
            }
        ]
    },
    methods:{
        createTask: function(){
            this.taskList.push({
                id: this.taskList.lenght,
                name: this.nameTask,
                done: false
            });
        },
        removeTask: function(id){
            alert("Task Number " + id + " will be removed from the list")
            this.taskList = this.taskList.filter ( x => x.id !== id);
        }
    }
})

new Vue({
    el:'#app2',
    data:{
        fecha: ""
    },
    methods: {
        printDate1: function(){
            this.fecha = new Date();
        },
    },

    computed: {
        printDate2: function(){
            return `Current Time -> ${this.fecha}`;
        }
    }
})

Vue.component('sign-up-form',{
    data: function(){
        return {
            count: 1
        }
    },
    methods: {
        addOne: function(){
            this.count++;
        }
    },
    template: `
    <div>    
       <div>
         <h3> Sign On </h3>
      </div>
      <div>
         <label for="user-fname">First Name:</label>
         <input type="text" id="fname" value="First Name">
         <p id="error-fname"> </p>
         <br>
       </div>
       <div>
         <label for="user-lname">Last Name:</label>
         <input type="text" id="lname" value="Last Name">
         <p id="error-lname"> </p>
         <br>
       </div>
       <div>
         <label for="user-mail">Email:</label>
         <input type="email" id="mail" value="user@email.com">
         <p id="error-email"> </p>
         <br>
       </div>
       <div>
         <label for="user-age">Age:</label>
         <input type="text" id="user-age" value="Age">
         <p id="error-age"> </p>
         <br>
       </div>
       <br>
       <button> Sing On </button>
      </div>
    `,
});

new Vue({
    el: '#app3',
    methods: {
        validateName: function (){
            let test = this.mail.value.length === 0 || emailRegExp.test(this.mail.value);
            this.mail
           

        }
    }
})

/*
 <br>
         <label>first name {{count}}</label>
         <button @click="addOne">Add one</button>
         <p></p>
         */