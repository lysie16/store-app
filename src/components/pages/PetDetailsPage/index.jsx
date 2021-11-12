import "./styles.css"
import {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PetsOrderContext from '../../../context/petsOrderContext';


export const PetDetailsPage = (props) => {
    const{id} = useParams();

    const [pet, setPet] = useState({});

    const globalState = useContext(PetsOrderContext);

    useEffect ( () => {
        const pet = globalState.pets.find(
            (pet) => pet.id.stringValue === id
        );
    }, []) 

    if (pet) {
    return (
        <div className="pets-page">
            <h1 className="pets-title"> Pet Details {pet.name?.stringValue} </h1>
            <img src= {pet.image?.stringValue} alt="pet photo"/>
        </div>
    )
 } else {
    return <p> No Pet with this id</p>
    }
}