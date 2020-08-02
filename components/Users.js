import React from 'react'

function Users(props) {
    return (
        <ul className="list-group">
            {
                props.users.map(user => (
                    <li className="list-group-item list-group-item-action">
                        <h5>{user.name}</h5>
                    </li>
                ))
            }
        </ul>
    )
}

export default Users
