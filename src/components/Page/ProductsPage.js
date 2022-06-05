import roza from '../../images/roza.jpg'
import stokrotka from '../../images/stokrotka.jpg'
import niezapominajka from '../../images/niezapominajka.jpg'
import tulipan from '../../images/tulipan.jpg'
import { useEffect, useState, useRef } from 'react'
import LoadingIcon from './LoadingIcon'

const productsData = [
    {
        id: 1,
        name: 'Róża',
        img: roza,
        prize: 34.12,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe deserunt alias facere! Inventore soluta quia dicta placeat maiores officiis, ducimus, ab reiciendis libero aliquam exercitationem, eligendi cupiditate maxime alias.'
    },
    {
        id: 2,
        name: 'Stokrotka',
        img: stokrotka,
        prize: 12.56,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe deserunt alias facere! Inventore soluta quia dicta placeat maiores officiis, ducimus, ab reiciendis libero aliquam exercitationem, eligendi cupiditate maxime alias.'
    },
    {
        id: 3,
        name: 'Niezapominajka',
        img: niezapominajka,
        prize: 8.76,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe deserunt alias facere! Inventore soluta quia dicta placeat maiores officiis, ducimus, ab reiciendis libero aliquam exercitationem, eligendi cupiditate maxime alias.'
    },
    {
        id: 4,
        name: 'Tulipan',
        img: tulipan,
        prize: 89.85,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe deserunt alias facere! Inventore soluta quia dicta placeat maiores officiis, ducimus, ab reiciendis libero aliquam exercitationem, eligendi cupiditate maxime alias.'
    }
]



const ProductsPage = () => {
    const products = productsData.map((product)=> {
        return(
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: 20,
                gap: 30
            }} key={product.id}>
            <img style={{
                maxWidth: '100%',
                height: '100%',
            }} src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <p>cena: {product.prize}</p>
                <p>{product.description}</p>
            </div>
        </div>)
    })
    let [flower, setFlower] = useState([])
    let [value, setValue] = useState('')
    const changeValue = (e) => {
        value = e.target.value
        setValue(value)
    }
    const btnChange = () => {
        const flowers = [...productsData]
        console.log(value)
    }
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=> {
            setLoading(false)
        },1000)
    },[])
    return (
        <>
        {loading ? <LoadingIcon/> : 
        <>
        <h2 style={{textAlign: 'center', marginTop: 50, marginBottom: 30}}>Nasze produkty</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <input type="text" value={value} onChange={changeValue}  style={{padding: 5, marginRight: 30}} />
        <button onClick ={btnChange} style={{backgroundColor: 'rgb(150, 108, 223)', color: 'white', borderRadius: 10, borderColor: 'rgb(120, 75, 199)'}}>Szukaj kwiatuszka</button>
        </div>
        {products}
        </>
        }
        </>
     );
     
}
 
export default ProductsPage;