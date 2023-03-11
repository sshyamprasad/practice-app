import React from 'react'
import DisplayItem from './DisplayItem'
const DisplayForm = (props) => {
    return (
        <div>
            <ul>
                {
                    props.userIds.map((user)=>{
                        return <DisplayItem key={user.id} user={user}/>
                    })
                }                
            </ul>
        </div>
    )
}

export default DisplayForm