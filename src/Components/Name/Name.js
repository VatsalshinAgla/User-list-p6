
import React from 'react'

function Name({ first_name, last_name }) {
    return (
        <div>{first_name + " " + last_name}</div>
    )
}

export default Name