import { createContext, useState, useReducer } from 'react'
import { ACTIONS } from './ACTIONS'
import { InitialState } from './InitialState'
import { AppReducer } from './AppReducer'
export const GlobalState = createContext(null)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState)
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)
    const [menuOpen, setMenuOpen] = useState(false)
    const [color, setColor] = useState('#000')
    // for checkout page conditonal rendering
    const [signUp, setSignUp] = useState(false)

    const subTotal = state.items.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2)

    const add__item = (item) => {
        dispatch({ type: ACTIONS.ADD__ITEM, payload: item })
    }

    const delete__item = (item) => {
        dispatch({ type: ACTIONS.DELETE__ITEM, payload: item })
    }

    // to update the quantity of items on cart page
    const update__item = (item) => {
        dispatch({ type: ACTIONS.UPDATE__ITEM, payload: item })
    }

    const changeItemsQuantity = (newQuantity, itemId) => {
        const extractItem = state.items.filter(item => item.id === itemId)
        const itemWithNewQuantity = [{ ...extractItem[0], quantity: newQuantity }]
        // create a feature in reducer to update the items, it takes updated object and replace it with old object
        update__item(itemWithNewQuantity);
    }



    return (
        <GlobalState.Provider value={{
            color: [color, setColor],
            modal: [showModal, setShowModal],
            modalContent: [modalContent, setModalContent],
            menuOpen: [menuOpen, setMenuOpen],
            signUp: [signUp, setSignUp],
            items: state,
            subTotal,
            add__item,
            delete__item,
            update__item,
            changeItemsQuantity
        }}>
            {children}
        </GlobalState.Provider>
    )
}