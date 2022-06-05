import { useState } from "react";

const Footer = () => {
    const [show, setShow] = useState(false)

        if (show) {
            return (
                <div>prawda</div>
            )
        } else {
            return (
                <div>fałsz</div> 
            )
        }
    
   
}
 
export default Footer;