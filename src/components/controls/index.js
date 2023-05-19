import React, { useState } from "react";
import CartModal from "../cart-modal";
import {formatMoney, plural} from "../../utils";
import "./style.css";

const Controls = ({ list, onDeleteItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice =
    list.length &&
    list.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <>
      <div className="Controls">
         <p className={'Controls-title'}>В корзине:</p>
         <p className={'Controls-products'}>
          {list.length > 0 ? `${list.length} ${plural(list.length, {one: 'товар', few: 'товара', many: 'товаров'})} ` : 'пусто'}
          {totalPrice > 0 ? `/ ${formatMoney(totalPrice)}` : ''}
        </p>
        <button onClick={() => setIsOpen(true)} style={{width: '80px'}}>Перейти</button>
      </div>
      {isOpen && (
        <CartModal
          total={formatMoney(totalPrice)}
          onClose={() => setIsOpen(false)}
          onDeleteItem={onDeleteItem}
          list={list}
        />
      )}
    </>
  );
};

export default Controls;