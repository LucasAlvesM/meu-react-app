import React from 'react';
import './style.css';
function Cards() {

  return (
    <div className="card-container">
      <img className="img1" src="../images/render-proj-executivo-2.jpg" alt="*" />
      <p> ARQUITETURA REVIT </p>
      <p>Carga Horária - 40 horas</p>
      <p>Preço - R$ 990,00 </p>
      <button className="btn1">Informações</button>
    </div>
  );
}
export default Cards;
