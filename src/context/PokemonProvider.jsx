import { Children, useState } from "react"
import { PokemonContext } from "./PokemonContext"


export const PokemonProvider = ({ children }) => {


    const [offset, setOffset] = useState(0)

    const getAllPokemon = async(limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch('${baseURL}pokemon?limit=${limit}&offset=${offset}')
        const data = await res.json();
    }

    
    return (
        <PokemonContext.Provider value={{
            numero: 0
        }}>
            {children}
        </PokemonContext.Provider>
    )
}