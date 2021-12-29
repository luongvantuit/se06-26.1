import React from 'react'
import add from '../../../assets/img/plus_circle.svg';
import '../../../assets/css/add_image.css'
const AddImage = () => {
    return (
        <div className='add-image d-flex align-items-center justify-content-center'>
            <img src={add} alt="Add image" />
        </div>
    )
}

export default AddImage
