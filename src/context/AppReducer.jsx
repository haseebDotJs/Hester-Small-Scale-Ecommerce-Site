import { ACTIONS } from './ACTIONS'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD__ITEM:
            return { items: [...state.items, action.payload] }
        case ACTIONS.DELETE__ITEM:
            return { items: state.items.filter(item => item.id !== action.payload.id) }
        case ACTIONS.UPDATE__ITEM:
            return { items: state.items.map(item => action.payload.find(itemToReplace => itemToReplace.id === item.id) || item)}
        default:
            return { ...state }
    }
}
