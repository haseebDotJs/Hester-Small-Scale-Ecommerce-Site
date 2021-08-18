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
    // const [color,setColor] = useState('#000')

    const add__item = (item) => {
        dispatch({ type: ACTIONS.ADD__ITEM, payload: item })
    }

    return (
        <GlobalState.Provider value={{
            modal: [showModal, setShowModal],
            modalContent: [modalContent, setModalContent],
            menuOpen: [menuOpen, setMenuOpen],
            items: state,
            add__item
            // color: [color,setColor]
        }}>
            {children}
        </GlobalState.Provider>
    )
}