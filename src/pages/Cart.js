import React from "react";
import { Link } from "react-router-dom";

const Cart = () => (
  <div>
    <h1>Carrinho</h1>
    <p>Você ainda não adicionou nada.</p>
    <Link to="/menu">Voltar ao Cardápio</Link>
  </div>
);

export default Cart;