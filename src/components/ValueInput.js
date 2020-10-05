import React, {useState} from 'react'

const ValueInput = () => {
    const [value, setValue] = useState(1)

    const increaseValue = () => {
        setValue(prevValue => prevValue + 1)
    }

    const decreaseValue = () => {
        setValue(prevValue => prevValue - 1)
    }

    const validateInput = (e) => {
        if(value > 5) {
            alert('You can not select more than 5')
        }else if (value < 0) {
            alert('Value can not be negative or zero')
        }
    }
    return(
        <div className='value-input'>
            <button onClick={decreaseValue}>-</button>
            <input type='number' value={value} />                
            <button onClick={increaseValue}>+</button>
        </div>
    )
}

export default ValueInput