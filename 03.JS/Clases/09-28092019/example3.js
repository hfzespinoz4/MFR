Vue.component('sign-up-form', {
    data: function() {
      return {
       count: 1
    }},
    methods: {
      addOne: function() {
        this.count++;
      }
    },
    template: `
     <div>    
        <div>
          <h2> Sign On>
          <br>
          <label>first name {{count}}</label>
          <button @click="addOne">Add one</button>
          <p></p>
       </div>
       <div>
          <label for="user-fname">First Name:</label>
          <input type="text" id="fname" value="First Name">
          <p> </p>
          <br>
        </div>
        <div>
          <label for="user-lname">Last Name:</label>
          <input type="text" id="lname" value="Last Name">
          <p> </p>
          <br>
        </div>
        <div>
          <label for="user-mail">Email:</label>
          <input type="email" id="mail" value="user@email.com">
          <p> </p>
          <br>
        </div>
        <div>
          <label for="user-age">Age:</label>
          <input type="text" id="user-age" value="Age">
          <p> </p>
          <br>
        </div>
        <br>
        <input type=button> Sing On </input>
       </div>
     `,
});

new Vue({
  el:'#app',

})