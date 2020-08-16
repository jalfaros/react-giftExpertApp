import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories, categories }) => {


    const [inputValue, setinputValue] = useState(''); //Undefined

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ( inputValue.trim().length > 2 ){
            setCategories([inputValue, ...categories]) // Se agrega al Array 
            setinputValue('');
        }
    }

    return (

        <form onSubmit = { handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>


    )
}


AddCategory.propTypes = {

    setCategories : PropTypes.func.isRequired,
    categories    : PropTypes.array.isRequired

}

export default AddCategory
