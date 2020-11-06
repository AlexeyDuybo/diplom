const openModalWindow = () => ({
    type: 'OPEN_MODAL_WINDOW',
}) as const;

const closeModalWindow = () => ({
    type: 'CLOSE_MODAL_WINDOW',
}) as const;

const toggleModalWindow = () => ({
    type: 'TOGGLE_MODAL_WINDOW',
}) as const;

export {
    openModalWindow,
    closeModalWindow,
    toggleModalWindow,
};
