import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Bem-vindo ao Guika Sushi</h1>
    <p>O melhor delivery japonês da quebrada!</p>
    <Link to="/menu">Ver Cardápio</Link>
  </div>
);

export default Home;