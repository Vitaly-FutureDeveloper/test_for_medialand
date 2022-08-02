import { createSelector } from 'reselect';

const getIsVisibleDeleteModalSelector = (state) => state.modals.modalDeleteNote.visible;
export const getIsVisibleDeleteModal = createSelector(getIsVisibleDeleteModalSelector,
	(visible) => visible
);