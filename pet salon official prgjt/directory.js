function display(){
    //travel the salon.pets
    document.getElementById('pets').innerHTML="";
    for(var i=0;i<salon.pets.length;i++){
        var aPet= salon.pets[i];

     if(aPet.service==="full"){
       aPet.price=30;
     }else if(aPet.service === "shower"){
       aPet.price=25;
     }else if(aPet.service === "nails"){
       aPet.price=15;
     }else if(aPet.service==="hair"){
       aPet.price=20;
     }
    //create a tmp
  var tmp =`<div id="${aPet.id}" class="pet">
  <h3> ${aPet.name} </h3>
   <p> ${aPet.age} </p>
   <p> ${aPet.gender} </p>
   <p> ${aPet.breed} </p>
   <p> ${aPet.service} </p>
   <p> ${aPet.price} </p> 
   <p> ${aPet.ownerName} </p>
   <p> ${aPet.contactPhone} </p>
   <button onclick="deletePet(${aPet.id})" class="btn btn-danger">delete</button>
  <div/>`; 
  console.log(tmp);                                                  
  document.getElementById('pets').innerHTML+=tmp;
}
updateProfits();                                                                                                                                                                                                                                                   

}

function displayTable(aPet){
  if(aPet.service==="full"){
    aPet.price=30;
  }else if(aPet.service === "shower"){
    aPet.price=25;
  }else if(aPet.service === "nails"){
    aPet.price=15;
  }else if(aPet.service==="hair"){
    aPet.price=20;
  }
  var icon="";
  if(aPet.type==="dog"){
    icon="🐕";
  }else if(aPet.type==="cat"){
    icon==="🐈";
  }else if(aPet.type==="bird"){
    icon="🐦";
  }else {
    icon="🔍";
  }

  var row=document.createElement('tr');
  row.innerHTML=`
      
          <td> ${aPet.name} </td>
          <td> ${aPet.age} </td>
          <td> ${aPet.gender} </td>
          <td> ${icon} </td>
          <td> ${aPet.breed} </td>
          <td> ${aPet.service} </td>
          <td> ${aPet.price} </td>
          <td> ${aPet.ownerName} </td>
          <td> ${aPet.contactPhone} </td>
      `;

       document.querySelector('#petTable').appendChild(row);
       updateProfits();

}
   