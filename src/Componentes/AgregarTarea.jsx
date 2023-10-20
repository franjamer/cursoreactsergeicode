import React from 'react'
import { useState } from 'react'

    const AgregarTarea = ({agregarTarea}) => {

        const [inputValue, setInputValue] = useState('')

        const onInputChange = ({target}) => {
            setInputValue(target.value)
           
        }

        const onSubmit = (event)=>{
            event.preventDefault()
          agregarTarea(inputValue)
        }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Ingresa Tarea Nueva'
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
        
    )
}
export default AgregarTarea