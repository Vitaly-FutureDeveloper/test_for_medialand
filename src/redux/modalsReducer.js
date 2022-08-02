const SET_SHOW_MODAL_DELETE_NOTE = "SET_SHOW_MODAL_DELETE_NOTE";

const initialState = {
	modalDeleteNote: {
		visibile: false,
	}
};

const modalsReducer = (state=initialState, action) => {

	switch (action.type){

		case SET_SHOW_MODAL_DELETE_NOTE: {
			const body = {
				...state,
				...state.modalDeleteNote,
			};
			body.modalDeleteNote.visibile = action.visible;
			return body;
		}

		default:
			return state;
	}
};



export const setToggleModalAC = (visible) => ({
	type: SET_SHOW_MODAL_DELETE_NOTE,
	visible
});




export default modalsReducer;