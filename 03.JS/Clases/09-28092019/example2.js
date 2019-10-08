new Vue({
    el: '#app',
    data: {
        fecha: ""
    },
    methods: {
        printDate1: function(){
            this.fecha = new Date();
        },
    },
    
    computed:{
        printDate2: function(){
            return "Current Time --> " +this.fecha;
        }
    }
})