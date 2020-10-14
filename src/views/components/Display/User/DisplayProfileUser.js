import React from 'react'

const DisplayProfileUser = ({ name, email }) => {
    return (
        <div>
            <h1>Welcome {name}</h1>
            <h2>This is your Email: {email}</h2>
        </div>
    )
}

export default DisplayProfileUser
