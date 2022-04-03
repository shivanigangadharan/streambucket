
export const dataReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_NEW_PLAYLIST":
            return { ...state, playlists: action.payload }
        case "DELETE_PLAYLIST":
            return { ...state, playlists: action.payload }
        case "SHOW_MODAL":
            return { ...state, showModal: true }
        case "HIDE_MODAL":
            return { ...state, showModal: false }
    }
}