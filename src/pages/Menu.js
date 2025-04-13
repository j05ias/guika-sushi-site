import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <div>
    <h1>Cardápio</h1>
    <ul>
      <li>Temaki Salmão - R$ 42,90 <button>Adicionar</button></li>
      <li>Combo 1 - 18 Peças - R$ 50,00 <button>Adicionar</button></li>
    </ul>
    <Link to="/cart">Ir para o carrinho</Link>
  </div>
);

export default Menu;