
import { Link } from "react-router-dom";
//import Cpllapsible react package
import Collapsible from 'react-collapsible';
//hooks
import {useState} from 'react'

const Boxx = ({ id , title , abstract , body}) => {

    //state 
    const [showAbstract , SetShowAbstract ] = useState(true) 

    return (

        <Collapsible
        className="blog-preview" 
        trigger={"+ " + title}
        triggerWhenOpen= {" - " + title}
        triggerSibling = { showAbstract && abstract} 
        triggerTagName = 'h2'
        onOpening = {()=> SetShowAbstract(false)}
        onClosing = {()=> SetShowAbstract(true) }
         >
           <p>
              {body}
           </p>

           <Link className="bloglink"  to={'/blogs/' + id }>  { 'برو به صفحه این مطلب' + [' -> ']} </Link>
     
     </Collapsible>
    );
}
 
export default Boxx;