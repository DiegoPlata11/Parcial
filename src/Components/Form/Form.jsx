import React from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Form = () => {
  const [user, setUser] = useState({
    country: "",
    city: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  //console.log(user);

  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const countryIsValid = user.country.length > 2;
    const cityIsValid = user.city.length > 5;

    if (!countryIsValid || !cityIsValid) {
      setError(true);

      if (!countryIsValid || !cityIsValid) {
        setErrorMessage("Por favor chequea que la información sea correcta");
      }
      return;
    }

    setIsLogged(true);
    console.log("data: ", user);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="country"
          placeholder="Ingresa tu pais"
          onChange={(e) => handleChange(e, "country")}
        />

        <input
          type="text"
          name="city"
          placeholder="Ingresa tu ciudad"
          onChange={(e) => handleChange(e, "city")}
        />

        {error && errorMessage.includes("favor chequea") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}
        <button type="submit">Enviar</button>
      </form>

      {isLogged && (
        <Card country={user.country} city={user.city} />
      )}
    </div>
  );
};
export default Form;
