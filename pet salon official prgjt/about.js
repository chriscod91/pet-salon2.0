class about {
  constructor(name, telephone, email, message) {
    this.name = name;
    this.telephone = telephone;
    this.email = email;
    this.message = message; 
  }
}

function send() { 
  var newMessage = about
      ($("#name").val(),
       $("#telephone").val(),
       $("#email").val(),
       $("#message").val(),


  );

  console.log(newMessage);
  
}


$("#enter-btn").on('click',send);
