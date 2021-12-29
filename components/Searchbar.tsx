import React, {ChangeEvent, useState, useEffect} from 'react'
import styles from '../styles/Search.module.css'

interface Props{
filter: (str: string)=> void;
setActiveCat: (cat: string)=> void
}

const Searchbar: React.FC<Props> = ({filter, setActiveCat}) => {

    const [displayType, setDisplayType] = useState<String>('list')
    const [searchString, setString] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setString(e.target.value)
        setActiveCat('all')
        
    }

    useEffect(() => {
        filter(searchString)
    }, [searchString])

    const handleCancel = ()=>{
        setString('')
        setActiveCat('all')
    }
    return (
        <div>
            <div className={styles.wrapper}>
                <input value={searchString} className={styles.searchbox} type='text' placeholder="Search Products" onChange={handleChange} />

               {(displayType === 'grid' && searchString === '') && 
               <span className={styles.iconWrap} onClick={()=>setDisplayType('list')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: "rgba(0, 106, 244, 1)"}}>
                        <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
                    </svg>
                </span>}

               {(displayType === 'list' && searchString === '') && 
                <span className={styles.iconWrap} onClick={()=>setDisplayType('grid')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: "rgba(0, 106, 244, 1)"}}>
                        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 
                        0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 
                        1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z">    
                        </path>
                    </svg>
                </span>}

                { searchString !== '' &&
                    <span className={styles.cancelButton} onClick={handleCancel}>Cancel</span>
                }
            </div>
            
        </div>
    )
}

export default Searchbar
