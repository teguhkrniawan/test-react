

import contacts from '../data/contacts.json'

export const initialState = {
    data: contacts
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_person':
            return {
                data: [...state.data, action.person]
            }
        default:
            return state
    }
}
