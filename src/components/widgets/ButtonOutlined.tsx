import React from 'react'
import '../../assets/css/button_outlined.css'

const ButtonOutlined = (props: { name: string }) => {
    return (
        <div>
            <div className="button__outlined">{props.name}</div>
        </div>
    )
}

export default ButtonOutlined
