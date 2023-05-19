import React from "react";
import Head from "../head";
import List from "../list";
import "./style.css";

const CartModal = ({ list, onDeleteItem, onClose, total }) => {
  return (
    <div className="Cart-modal-overlay">
      <div className="Cart-modal">
         <Head title={"Корзина"}>
           <button className="Cart-modal-close" onClick={onClose}>
             Закрыть
           </button>
         </Head>
         <List list={list} onAction={onDeleteItem} actionTitle={"Удалить"} />
         <div className="Cart-modal-total">
           <strong>
             {list.length > 0 ? `Итого` : 'Корзина пуста'}
           </strong>
           <strong>
             {total == '0 ₽' & !list.length ? '' : total}
           </strong>
         </div>
         {/* <div className="Cart-modal-total">
           <strong>Итого</strong>
           <strong>{total}</strong>
         </div> */}
      </div>
    </div>
  );
};

export default CartModal;