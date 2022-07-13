import React, { useState, useEffect } from "react";

// Declaro el componente
const Clock = (props) => {

   // useState el cual presente el estado inicial del componente
   const [state, setState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "Martincorena",
  });

  // función useEffect el cual presente su funcionalidad, en este caso cambiar el elemento día +1 cada segundo
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setState((prevState) => ({
      ...prevState,
      fecha: new Date(),
      edad: prevState.edad + 1,
    }));
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;
