import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';




const GiftExpertApp = () => {

    //const categories = ['One Punch', 'Doraemon', 'Dragon Ball']

    const [categories, setCategories] = useState(['Doraemon'])

    // const handleAdd = () => {
    //     const serie = 'SpiderMan'
    //     setcategories( [ ...categories, serie ] );  //Así se agrega a una lista
    // }
    

    return (
        <>

          <h2>GiftExpertApp</h2>
          <AddCategory setCategories = { setCategories } categories = { categories } /> 
          <hr></hr> 

          <ol>
              { 

                categories.map( category =>( 

                    <GifGrid 
                        key = { category }
                        category = { category }
                    />


                 ))
              
              }
          </ol>




        </>
    )
}

export default GiftExpertApp
