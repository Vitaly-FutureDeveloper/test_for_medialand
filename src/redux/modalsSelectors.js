import { createSelector } from 'reselect';

const getIsVisibleDeleteModalSelector = (state) => state.modals.modalDeleteNote.visibile;
export const getIsVisibleDeleteModal = createSelector(getIsVisibleDeleteModalSelector,
	(visible) => visible
);