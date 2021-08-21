import React, { useContext } from 'react'
import { GlobalState } from '../../context/GlobalState'

const Checkout = () => {
    const { items: { items } } = useContext(GlobalState)
    return (
        <div>
            Checkout page
        </div>
    )
}

export default Checkout
