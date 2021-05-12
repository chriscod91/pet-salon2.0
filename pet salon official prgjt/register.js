const salon={
    name:"the fashion pet",
    address:{
        street:"av. university",
        number:"212-k",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
    }

//var salonnanme=salon.name;
//var salonnumber=salon.address.number;
var {name,address:{street,number}}=salon;// object structuring

document.getElementById('footer-info').innerHTML=`
 <p> ${name} ${street} ${number} </p>
`;

function displaytext(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}
var counter=0;
// create the object constructor
class pets{
    constructor(name,age,gender,type,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.type=type
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.price=0;
        this.id=counter++;
    }
}

//create 3 pets
//add contact and owner name

//create the register function

     //read from inputs and store information into vars 
var inputName = $('#petName');
var inputAge = $('#petAge');
var inputGender = $('#petGender');
var inputType = $('#petType');
var inputBreed = $('#petBreed');
var inputService = $('#petService');
var inputOwner = $('#ownerName');
var inputPhone = $('#ownerPhone'); 
var inputPayment = $('#payment');
     //create a generic object and pass the info of the vars 
     function register(){
     //push the object into the array
     var thePet = new pets
     ($('#petName').val(),
        $('#petAge').val(),
        $('#petGender').val(),
        $('#petType').val(),
        $('#petBreed').val(),
        $('#petService').val(),
        $('#ownerName').val(),
        $('#ownerPhone').val());
      console.log(thePet);
     
     //clear the inputs
     salon.pets.push(thePet);
     clear();
     //displayTable(thePet);
     display();
}

function clear(){ 
       inputName.val("");
       inputAge.val("");
       inputBreed.val("");
       inputGender.val("");
       inputOwner.val("");
       inputPhone.val("");
        
}

function updateProfits(){
      var profit=0;
      for(var i=0;i<salon.pets.length;i++){
          profit=profit+salon.pets[i].price;
      }
      document.getElementById('profits').innerHTML=`profits = $${profit}.00`;
}
function deletePet(petId){
    // select the card with the pet
    var card=$('#'+petId)
    console.log('delete pet'+petId)
    //select the pet in the array 
   var indexDelete;
   for(var i=0;i<salon.pets.length;i++){
       var selected=salon.pets[i];
       if(selected.id===petId){
           indexDelete=i;
           break;
       }
       console.log(i);
   }
   //delete the pet from the array
   salon.pets.splice(indexDelete,1);
   //delet the pet from the html
   card.remove();
   updateProfits();

}
   
function searchPet(){
    //add the search input, and the search button 
    //get the value from the input 
    var ss=$('#searchPet').val();
    /// change the css to display the results
    salon.pets.forEach(aPet=>{
        if(aPet.name.toLowerCase().includes(ss.toLowerCase())||
        aPet.service.toLowerCase().includes(ss.toLowerCase())
        ){
        $('#'+aPet.id).removeClass('unactive');
    }else{
       $('#'+aPet.id).addClass('unactive');
    }
    });                                                            
} 

    var pet1 = new pets("scooby",50,"male","dog","dane","hair","shaggy","555-555-5555");
    var pet2 = new pets("scrappy",50,"male","dog","mixed","full","shaggy","555-555-5555");
    var pet3 = new pets("tweety",70,"male","bird","canarian","nails","bugs bunny","888-888-8888",);
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3);

    function init(){
        console.log("executed");
   ///displayTable(pet1);
    ///displayTable(pet2);
    ///displayTable(pet3);
    display();

    $('#register-btn').click(register);
    $('#search-btn').on('click',searchPet);
    $('#ownerPhone').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            register();
        }
    });
    $('#searchPet').on('keyup',searchPet);
    
}



