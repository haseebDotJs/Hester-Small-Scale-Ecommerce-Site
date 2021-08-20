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
    const [color,setColor] = useState('#000')

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
    
    console.log('state', state);

    return (
        <GlobalState.Provider value={{
            color: [color,setColor],
            modal: [showModal, setShowModal],
            modalContent: [modalContent, setModalContent],
            menuOpen: [menuOpen, setMenuOpen],
            items: state,
            add__item,
            delete__item,
            update__item
        }}>
            {children}
        </GlobalState.Provider>
    )
}