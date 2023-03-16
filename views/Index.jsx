import React from 'react'

function Index(props) {

    return (
        <div>
            <h1>See All The Pokemon!</h1>
            <ul>
                {props.pokemons.map((item, index) => 
                    <li key={index}>
                        <a href={`/pokemon/${item._id}`}><strong>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/pokemon/new">Add Pokemon</a>
        </div>
    )
}

export default Index