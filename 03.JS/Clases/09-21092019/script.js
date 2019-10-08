

// Componentes e Vue

Vue.component('task-item', {
    template: `
    <li>Todo Item </li>
    `
    /*template: `
    <li>
        <h6> Task Number {{index}} </h6>
        <p>{{ task.name}} </p>
        <p v-if="task.done"> Task done </p>
        <p v-else> Task isn-t done </p>
    </li>     
    ` //Se escribe siempre com backtip*/
})

new Vue ({
    el: '#app',
    data: {
        message: 'Hola Mundo!',
        tooltipMessage: `Hovered element at ${new Date()}`,
        showFirstMessage: true,
        tasklist: [
            {
                name: 'First Task',
                done: true
            },
            {
                name: 'Second Task',
                done: true
            },
            {
                name: 'Thrid Task',
                done: false
            }
        ]
    }
});