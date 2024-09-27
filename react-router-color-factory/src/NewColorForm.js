import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function NewColorForm({ addNewColor }) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState(
        {
            color: '',
            colorHex: ''
        }
    )

    const handleChange = (evtObj) => {
        const { name, value } = evtObj.target

        console.log('name', name)
        console.log('value', value)

        setFormData(formData => (
            {
                ...formData,
                [name]: value
            }
        ))
    }

    const handleSubmit = (evtObj) => {
        evtObj.preventDefault()

        addNewColor(formData)

        setFormData({
            color: ''
        })

        navigate('/colors')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='color'>Color Name</label>
            <input
                id='color'
                type='text'
                name='color'
                value={formData.color}
                placeholder='Enter color name'
                onChange={handleChange}
            />
            <label htmlFor='colorHex'>Color Value</label>
            <input
                id='colorHex'
                type='color'
                name='colorHex'
                value={formData.colorHex}
                onChange={handleChange}
            />
            <button>Add this color value</button>
        </form>
    )

}

export default NewColorForm;