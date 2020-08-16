import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false  
                })
            })
        
    })



    return state; //Devuelve la data del State

}

