
export const dataReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_NEW_PLAYLIST":
            return { ...state, playlists: action.payload }
        case "DELETE_PLAYLIST":
            return { ...state, playlists: action.payload }
        case "ADD_TO_PLAYLIST":
            return { ...state, playlists: action.payload }
        case "ADD_TO_HISTORY":
            return { ...state, history: action.payload }
        case "REMOVE_FROM_HISTORY":
            return { ...state, history: action.payload }
        case "CLEAR_HISTORY":
            return { ...state, history: action.payload }
        case "SHOW_MODAL":
            return { ...state, showModal: true }
        case "HIDE_MODAL":
            return { ...state, showModal: false }
    }
}