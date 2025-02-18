
function ResumenRegistro({ form }) {
    return (
      <div>
        <h2>Datos Registrados:</h2>
        <p>Nombre: {form.nombre}</p>
        <p>Email: {form.email}</p>
        <p>Contraseña: {form.password}</p>
      </div>
    );
  }
  
  export default ResumenRegistro;
  