import { useState } from "react";
import ResumenRegistro from "./components/ResumenRegistro";

function App() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [errors, setErrors] = useState({ nombre: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    switch (name) {
      case "nombre":
        return value.trim() === "" ? "El nombre es requerido" : "";//mi validacion para que el nombre no este vacio
      case "email":
        if (!value.trim()) return "El correo es requerido";  // Validación para que no este vacio
        return !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(value) ? "Email inválido" : "";// la expresion la saque en https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
      case "password":
        return value.length < 6 ? "La contraseña debe tener más de 6 caracteres" : "";//aqui que sea mayor a 6 caracteres
      default:
        return "";
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      nombre: validate("nombre", form.nombre),
      email: validate("email", form.email),
      password: validate("password", form.password),
    };
    setErrors(newErrors);
    if (!newErrors.nombre && !newErrors.password) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
            {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>
          <button type="submit">Registrar</button>
        </form>
      ) : (
        <ResumenRegistro form={form} />
      )}
    </div>
  );
}

export default App;

