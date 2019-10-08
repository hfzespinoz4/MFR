let persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['musica', 'cine', 'squi', 'bailar'],
    bio: function (){
        alert(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function (){
        alert('Hola, Soy '+ this.nombre[0] + '. ');
    }
};