

import React, { useState, useEffect } from "react";
import "./App.css";
import "./AddContact.css";



function AddContact  ({setContact})  {

    // const [contactsData, setContacts] = useState(() => JSON.parse(localStorage.getItem('contactsData')) || []);
    // // jason.parse hadi 
    //   useEffect(() => {
    //     localStorage.setItem('contactsData', JSON.stringify(contactsData));
    //   }, [contactsData]);
    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name && !phone && !email) {
            alert("no content");
            return;
        } else {
            alert("you added a contact");
        }
        let contact = {
            id:  Math.floor(Math.random()*1000  ),
            name: name,
            phone: phone,
            email: email
        };
    
        setContact((prev)=> {

          return [ ...prev,contact]
    })
         
          setName("")
          setPhone("")
          setEmail("")

         

    };
    return (
        <React.Fragment>
            {
                showForm ? (<div class="formConn">
                <h2>Fill-in the contact information</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={name} type="text" onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input value={phone} type="tel" pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" onChange={(e) => setPhone(e.target.value)} placeholder="must contain 10 numbers" required></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div class="fbtnn">
                    <button type="submit" class='fbtnbtnn'>Add</button>
                    <button onClick={() => setShowForm(false)} class='fbtnbtnn'>Cancel</button>
                    </div>
                </form>
                </div>
                ) : (<button onClick={() => setShowForm(true)}  class="bbtn btn1">Create Contact</button>
                )
            }

        </React.Fragment>
    );
}
export default AddContact;





















// import React, { useState, useEffect } from "react";
// import "./App.css";
// import "./AddContact.css";



// function AddContact  ({setContact})  {

//     const [showForm, setShowForm] = useState(false);

// const initialName = String(window.localStorage.getItem('name'))
// const initialPhone = String(window.localStorage.getItem('phone'))
// const initialEmail = String(window.localStorage.getItem('email'))

//     const [name, setName] = useState(initialName);
//     const [phone, setPhone] = useState(initialPhone);
//     const [email, setEmail] = useState(initialEmail);
// //    useEffect(() => {
// //     window.localStorage.setItem('name', initialName )
// //     window.localStorage.setItem('phone', initialPhone )
// //     window.localStorage.setItem('email', initialEmail )
// //  })
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!name && !phone && !email) {
//             alert("no content");
//             return;
//         } else {
//             alert("you added a task");
//         }
//         let contact = {
//             id:  Math.floor(Math.random()*1000  ),
//             name: name,
//             phone: phone,
//             email: email,
//         };

//         setContact((prev)=> {
//           return [ ...prev,contact]
//     })
//         //   setName(name)
//         //   setPhone(phone)
//         //   setEmail(email)
     

//     }; 
//     // 
//     useEffect(() => {
//            window.localStorage.setItem('name', name )
//            window.localStorage.setItem('phone', phone )
//            window.localStorage.setItem('email', email )


//      })
//     return (
//         <React.Fragment>
//             {
//                 showForm ? (<div class="formConn">
//                 <h2>Fill-in the contact information</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label>Name</label>
//                         <input  value={name} type="text" onChange={(e) => setName(e.target.value)} required></input>
//                     </div>
//                     <div>
//                         <label>Phone</label>
//                         <input value={phone} type="tel" onChange={(e) => setPhone(e.target.value)} required></input>
//                     </div>
//                     <div>
//                         <label>Email</label>
//                         <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} required></input>
//                     </div>
//                     <div class="fbtnn">
//                     <button type="submit" class="fbtnbtnn">Add</button>
//                     <button type="stop" onClick={() => setShowForm(false)} class="fbtnbtnn">Discord</button>
//                     </div>
//                 </form>
//                 </div>
//                 ) : (<button type='add' onClick={() => setShowForm(true)} class="bbtn btn1">Add new contact</button>
//                 )
//             }

//         </React.Fragment>
//     );
// }
// export default AddContact;