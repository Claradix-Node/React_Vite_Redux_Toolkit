import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useAppSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useAppDispatch()

    const orderedClickHandler = () => {
        dispatch(ordered(value));
        setValue(1)
    }

    const restockedClickHandler = () => {
        dispatch(restocked(value));
        setValue(1)
    }

    return (
        <div>
            <h2>Number of ice creams - {numOfIcecreams}</h2>
            <input 
                type="number" 
                value={value}
                onChange={e => setValue(+e.target.value)}
            />
            <div>
                <button onClick={orderedClickHandler}>Order ice cream</button>
                <button onClick={restockedClickHandler}>Restock ice creams</button>
            </div>
        </div>
    )
}

export default IcecreamView;