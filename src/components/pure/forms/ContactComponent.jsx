import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../../models/contacto.class";

const ContactComponent = ({name, lastName, email, isConnected}) => {
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <h2>Apellido: {lastName}</h2>
      <h2>Email: {email}</h2>
      <h2>Conectado: {isConnected ? "Conectado" : "Desconectado"}</h2>
    </div>
  );
};

ContactComponent.propTypes = {
  task: PropTypes.instanceOf(Contacto),
};

export default ContactComponent;
