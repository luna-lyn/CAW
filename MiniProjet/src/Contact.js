
import AddContact from './AddContact';
import React, { useState  } from "react";
import { contactsData } from "./mycontacts";
import "./Contact.css";


function Contact () {
     
  const [searchTerm, setSearchTerm] = useState();

  const [showList, setShowList] = useState(false);
  const [ Contacts , setContact ] = useState(contactsData);



  

  return (
    <div>
      <h3>Contacts </h3>
      
      <p>Here you can find the contacts list containing the name, number and email of each contact. Press 'Display Contacts' to show said list.<br/>
      You will also have a search bar for you to use if you want to find a specific person by name or number or email.
      <br/> If you want to add a contact, then you simply have to press on 'Create Contact', fill in the form and submit.</p>
     <AddContact setContact={setContact} class="mid"/>
    
    <React.Fragment>
            {
               showList ? (
                
                <div class="contactli">

    <ul>
    <div class="searchdiv"> 
    <h5>Search :  </h5>
    <input type='text' onChange={(event)=> {setSearchTerm(event.target.value);}} id="searchbar"></input>
    </div>
    {/* <button onClick={handleClickSearch} > Search </button> */}

          { Contacts.filter((contact)=> {

if(searchTerm == "" || searchTerm == null){
  return contact;
} else if (contact.name?.toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase())){
  return contact;
}else if (contact.email?.toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase())){
  return contact;
}else if (contact.phone?.toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase())){
  return contact;
}
  }).map((contact)=>{
                           return <li key={contact.id}>
                            <div><h3>{contact.name}</h3></div>
                            <div><h4>number: {contact.phone}</h4></div>
                              <div><strong>email:</strong> {contact.email}</div>
                    
                         
                           </li> 
                           
                   }
                   )
          }
      
      <button type='hide' onClick={() => setShowList(false)} class="btnn btn2">Hide</button>
           </ul>
           </div>

) : (
<button type='display' onClick={() => setShowList(true)} class="btnn btn2 mid">Display Contacts</button>
)

}        </React.Fragment>


    </div>
  )
}

export default Contact