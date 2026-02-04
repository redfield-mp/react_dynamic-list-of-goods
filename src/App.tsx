import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [currentGoods, setCurrentGoods] = useState<Good[]>([]);

  const handleClickAll = useCallback(() => {
    getAll().then(goods => {
      setCurrentGoods(goods);
    });
  }, []);

  const handleClickFirstFive = useCallback(() => {
    get5First().then(goods => {
      setCurrentGoods(goods);
    });
  }, []);

  const handleClickRed = useCallback(() => {
    getRedGoods().then(goods => {
      setCurrentGoods(goods);
    });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClickAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClickRed}>
        Load red goods
      </button>

      <GoodsList goods={currentGoods} />
    </div>
  );
};
