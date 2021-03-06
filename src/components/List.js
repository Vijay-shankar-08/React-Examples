import React from 'react'
import Person from './Person'
function List() {
    const items = [
        {
            id: 1,
            name: "vijay",
            description: "React developer"

        },
        {
            id: 2,
            name: "Madhu",
            description: "Angular developer"

        },
        {
            id: 3,
            name: "Deepika",
            description: "Python developer"

        },
        {
            id: 4,
            name: "shabir",
            description: "Angular developer"

        },
        {
            id: 5,
            name: "Athesh",
            description: "React developer"

        },
    ]
    const EmployeeList = items.map(person => <Person key={person.id} persons={person} />)

    return (
        <>
            {EmployeeList}
        </>
    )
}


export default List