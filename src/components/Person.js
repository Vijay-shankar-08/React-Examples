import React from 'react'

function Person({ persons }) {
    return (
        <>
            <ol>
                {persons.name} =
                {persons.description}
            </ol>
        </>
    )
}

export default Person