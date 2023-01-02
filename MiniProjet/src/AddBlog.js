
import React, { useState, useEffect } from "react";
import "./App.css";
import "./AddBlog.css";



function AddBlog  ({setBlog})  {

    // const [contactsData, setContacts] = useState(() => JSON.parse(localStorage.getItem('contactsData')) || []);
    // // jason.parse hadi 
    //   useEffect(() => {
    //     localStorage.setItem('contactsData', JSON.stringify(contactsData));
    //   }, [contactsData]);
    const [showFform, setShowFform] = useState(false);

    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!subject && !description && !date) {
            alert("no content");
            return;
        } else {
            alert("you added a blog post");
        }
        let blog = {
            id:  Math.floor(Math.random()*1000  ),
            subject: subject,
            description: description,
            date: date
        };
    
        setBlog((prevv)=> {

          return [ ...prevv,blog]
    })
         
          setSubject("")
          setDescription("")
          setDate("")

         

    };
    return (
        <React.Fragment>
            {

                showFform ? (<div class="formCon">
                    <h2>Fill-in the blog post information</h2>
                <form onSubmit={handleSubmit}>
                <div class="user-box">

                    <div>
                        <label>Subject</label>
                        <input value={subject} type="text" onChange={(e) => setSubject(e.target.value)} required></input>
                    </div>
                   



                    <div>
                        <label>Description</label>
                        <input value={description} type="text" onChange={(e) => setDescription(e.target.value)} required></input>
                    </div>
                    <div>
                        <label>Date</label>
                        <input value={date} type="date" onChange={(e) => setDate(e.target.value)} required></input>
                    </div>
                    <div class="fbtn">
                    <button type="submit" class="fbtnbtn">Add</button>
                    <button type='stop' onClick={() => setShowFform(false)} class="fbtnbtn">Cancel</button>
                    </div>
                    </div>
                </form>
                </div>
                ) : (<button type='add'onClick={() => setShowFform(true)} class="btn btn4">Add a new blog post</button>
                )
            }

        </React.Fragment>
    );
}
export default AddBlog;
