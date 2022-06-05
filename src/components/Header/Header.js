import axios from 'axios'
import {useState, useEffect} from 'react';

const Header = () => {
let [user, setUser] = useState('')
const api = 'https://picsum.photos/1280/300'
useEffect(()=>{
    axios.get(api)
    .then(res =>{
    setUser(user = res.request.responseURL)})
    .catch (err => 
    console.log(err))
},[])


return ( 
    <header 
    style={{
    width: '100%',
    textAlign: 'center'
    }}
    className='image-container'>
    <img
    style={{
    width: '100%',
        }} className='image' src={user} alt="" />
    </header>
);
}
 
export default Header;