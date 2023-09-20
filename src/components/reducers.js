const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'UPDATE_ITEM':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
const editingItemReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_EDITING_ITEM': // Обновим обработку действия
      return action.payload;
    case 'ADD_ITEM':
    case 'DELETE_ITEM':
      return null;
    default:
      return state;
  }
};


export { itemsReducer, editingItemReducer };
