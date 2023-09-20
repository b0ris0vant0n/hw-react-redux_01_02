import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, editItem, deleteItem } from './actions';

function AppContainer() {
  const items = useSelector((state) => state.items);
  const editingItemId = useSelector((state) => state.editingItem);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    console.log('Items updated:', items);
  }, [items]);

  const handleAddItem = () => {
    if (name && cost) {
      dispatch(addItem(name, Number(cost)));
      setName('');
      setCost('');
    }
  };

  const handleEditItem = (id) => {
    const editedItem = items.find((item) => item.id === id);
    if (editedItem) {
      setName(editedItem.name);
      setCost(editedItem.cost);
      dispatch(editItem(id, name, Number(cost)));
    }
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h1>Список элементов</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.cost}
            <button onClick={() => handleEditItem(item.id)}>Редактировать</button>
            <button onClick={() => handleDeleteItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      {editingItemId === null ? (
        <div>
          <h2>Добавить элемент</h2>
          <input
            type="text"
            placeholder="Наименование"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Стоимость"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <button onClick={handleAddItem}>Сохранить</button>
        </div>
      ) : (
        <div>
          <h2>Редактировать элемент</h2>
          <input
            type="text"
            placeholder="Наименование"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Стоимость"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <button onClick={() => handleEditItem(editingItemId)}>Сохранить</button>
          <button onClick={() => setName('')}>Отмена</button>
        </div>
      )}
    </div>
  );
}

export default AppContainer;
