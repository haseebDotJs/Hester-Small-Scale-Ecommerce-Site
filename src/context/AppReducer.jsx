import { ACTIONS } from './ACTIONS'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD__ITEM:
            return { items: [...state.item, action.payload] }
        case ACTIONS.DELETE__ITEM:
            return { items: state.item.filter(transaction => transaction._id !== action.payload) }
        default:
            return { ...state }
    }
}
