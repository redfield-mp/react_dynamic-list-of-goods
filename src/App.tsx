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
    getAll()
      .then(goods => {
        setCurrentGoods(goods);
      })
      .catch(error => {
        throw new Error('Failed to load all goods', error);
      });
  }, []);

  const handleClickFirstFive = useCallback(() => {
    get5First()
      .then(goods => {
        setCurrentGoods(goods);
      })
      .catch(error => {
        throw new Error('Failed to load first five goods', error);
      });
  }, []);

  const handleClickRed = useCallback(() => {
    getRedGoods()
      .then(goods => {
        setCurrentGoods(goods);
      })
      .catch(error => {
        throw new Error('Failed to load red goods', error);
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
