export const addItem = (name, cost) => ({
  type: 'ADD_ITEM',
  payload: { name, cost },
});

export const editItem = (id, name, cost) => ({
  type: 'EDIT_ITEM',
  payload: { id, name, cost },
});

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  payload: { id },
});
