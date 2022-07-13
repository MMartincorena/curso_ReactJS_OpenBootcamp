import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../../models/contacto.class";

const ComponenteB = ({ name, lastName, email, isConnected }) => {
  const [isUserConnected, setIsUserConnected] = useState(true);
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <h2>Apellido: {lastName}</h2>
      <h2>Email: {email}</h2>
      <h2>Conectado: {isUserConnected ? "Conectado" : "Desconectado"}</h2>

      <button
        onClick={() => {
          if (isUserConnected) {
            setIsUserConnected(false);
          } else {
            setIsUserConnected(true);
          }
        }}
      >
        Cambiar estado
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  task: PropTypes.instanceOf(Contacto),
};

export default ComponenteB;
