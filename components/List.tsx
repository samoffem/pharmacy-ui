import React, {useState} from 'react'
import styles from '../styles/List.module.css'
import { ProductInterface } from '../Data/ProductInterface'

interface Props {
    products: ProductInterface [];
    categoryFilter: (cat: string)=> void;
    active: string;
    setActiveCat: (cat: string)=> void
}

const List: React.FC<Props> = ({products, categoryFilter, active, setActiveCat}) => {

    

    const handleCategory = (cat: string)=>{
        setActiveCat(cat)
        categoryFilter(cat)
    }
    return (
        <div>

            <div className={styles.wrapper}>
                <div className={styles.categories}>
                    <span onClick={()=>handleCategory('all')} className={`${styles.category} ${active === 'all'? styles.active: ''}`}>All</span>
                    <span onClick={()=>handleCategory('vitamin')} className={`${styles.category} ${active === 'vitamin'? styles.active: ''}`}>Vitamins</span>
                    <span onClick={()=>handleCategory('pain killer')} className={`${styles.category} ${active === 'pain killer'? styles.active: ''}`}>Pain Killers</span>
                    <span onClick={()=>handleCategory('anti malaria')} className={`${styles.category} ${active === 'anti malaria'? styles.active: ''}`}>Anti malaria</span>
                    <span onClick={()=>handleCategory('antibiotic')} className={`${styles.category} ${active === 'antibiotic'? styles.active: ''}`}>Antibiotics</span>
                </div>

                <div className={styles.listWrap}>
                    {products.map((product, index)=>(
                        <div className={styles.listItem} key={index}>
                            <span className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(45, 87, 226, 1)"}}>
                                    <path d="M11.13,4.41l4.23,4.23L14.3,9.7,10.06,5.46,8.29,7.23l4.24,4.24-1.06,1.06L7.23,8.29,5.46,10.06,9.7,14.3,8.64,15.36,4.41,11.13C1.86,14,1.55,18,3.79,20.21a5.38,5.38,0,0,0,3.85,1.5,8,8,0,0,0,5.6-2.47l6-6c2.87-2.87,3.31-7.11,1-9.45S14,1.86,11.13,4.41Z">
                                    </path>
                                </svg>
                            </span>
                            <div className={styles.itemName}>
                                <p>{product.brandName}</p>
                                <p>400mg</p>
                            </div>
                        </div>
                    ))}

                    {products.length === 0 &&
                        <p className={styles.notFound}>NOT FOUND</p>
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default List
