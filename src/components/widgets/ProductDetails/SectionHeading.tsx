import React from 'react'
import '../../../assets/css/section_heading.css'

const SectionHeading= (props: {name : string}) => {
    return (
        <div >
            <h3 className="heading">
                {props.name}
            </h3>
            <div className="line">

            </div>
        </div>
    )
}

export default SectionHeading
