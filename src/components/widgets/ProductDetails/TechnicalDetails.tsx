import React from 'react'
import '../../../assets/css/tech_details.css'
const TechnicalDetails = (props: {name: string, content:string}) => {
    return (
        <div>
            <div className="technical_details ">
                <div className="details detail1">
                    <div className="tech_label">
                        {props.name}
                    </div>
                    <div className="tech_content">
                        {props.content}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TechnicalDetails
