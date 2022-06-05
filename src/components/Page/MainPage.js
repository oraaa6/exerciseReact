import MainDescription from "./MainDescription";
import axios from 'axios'
import {useEffect, useState} from 'react';
import styles from './MainPage.module.css'

const MainPage = () => {
let [beer, setBeer] = useState({
    image: '',
    name: '',
    brewed: '',
    description: ''
})

useEffect(()=> {
    axios.get('https://api.punkapi.com/v2/beers?ids=1')
    .then(res => {
        setBeer({
            image: res.data[0].image_url,
            name: res.data[0].name,
            brewed: res.data[0].first_brewed,
            description: res.data[0].description 
        })})
},[])

    return ( 
        <>
        <div className={styles.beer}>
            <img className={styles.beer__image} src={beer.image} alt="" />
            <MainDescription name={beer.name} brewed={beer.brewed} description={beer.description}  />
        </div>
        </>
     );
}
 
export default MainPage;