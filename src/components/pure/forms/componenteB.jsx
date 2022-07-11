import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../../models/contacto.class";

const ContactComponent = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: {contacto.name}</h2>
      <h2>Apellido: {contacto.lastName}</h2>
      <h2>Email: {contacto.email}</h2>
      <h2>Contacto: {contacto.conect ? "Conectado" : "Desconectado"}</h2>
    </div>
  );
};

ContactComponent.propTypes = {
  task: PropTypes.instanceOf(Contacto),
};

export default ContactComponent;
