

import AddBlog from './AddBlog';
import React, { useState  } from "react";
import { blogsData } from "./myposts";
import "./Blog.css";
import Likess from "./Likess";
import Cards from "./Cards";



function Blog() {


  const [showList, setShowList] = useState(false);




  const [ Blogs , setBlog ] = useState(blogsData)

  return (
    <div>
       <h3>Blog</h3>
    
   
    
        <p>This part of the page is the blog part, here you will get to know some of my favorite hobbies i spent my free time doing.<br/><br/> while using this page you have the option to consult already existing blog posts with the "Display" button, react to them by liking them and seeing how many times they're being liked and you can also add new blog posts on your by filling the form that pops up when clicking on the "Add a new blog post" Button.
        <br/><br/>Here are some of my favorite hobbies i enjoy practising:
        </p>
        <div class="cardsd"><Cards/></div>
        <AddBlog setBlog={setBlog}/>
        <React.Fragment>
            {
               showList ? (
    <ul>
      
          { Blogs.map((blog)=>{
                           return <li key={blog.id}>
                            <h3>{blog.subject}</h3>
                              <p className='desc'>{blog.description}</p>
                              <div className='date'><strong>{blog.date}</strong></div>
                              <div className="container2">

</div>

<Likess/>
                           </li> 
                   })}
      
      
      <button type='hide' onClick={() => setShowList(false)} class="bttn btn3 sp">Hide</button> 
           </ul>
           
           ) :  (
            <button type ='display' onClick={() => setShowList(true)} class="bttn btn3">Display</button>
            )
            
            }        </React.Fragment>
         
            
    </div>
  )
}

export default Blog