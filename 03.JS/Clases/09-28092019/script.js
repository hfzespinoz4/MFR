Vue.component('task-item', {
    /*
    El span Task Done! y el botón se mostrarán únicamente si
    la tarea se ha realizado tomando en cuenta lo indicado en el checkbox*/ 
    template: `
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
    props:['tarea']
})  

new Vue({
    el: '#app',
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
                id: this.taskList.length,
                name: this.nameTask,
                done: false
            });
        },   
        removeTask: function(id){
            alert("Hello World! estoy en la posición " + id)
            this.taskList = this.taskList.filter( x => x.id !== id);

        }
    }
})