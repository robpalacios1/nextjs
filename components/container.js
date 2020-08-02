import React from 'react'
import Navigation from './navigation'

function Container(props) {
    return (
        <div>
            <Navigation />
            <div>
                { props.children }
            </div>
        </div>
    )
}

export default Container
