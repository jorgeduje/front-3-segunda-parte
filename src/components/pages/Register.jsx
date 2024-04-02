import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate()

    
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      contraseña: "",
      confirmarContraseña: "",
    },
    onSubmit: (data) => {
      console.log(data);
   
    Swal.fire({
        title: "Seguro quieres registrar el usuario",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si, crear",
        denyButtonText: `no, me arrepenti`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            // LUGAR DE HACER LO QUE QUERRAMOS
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuario creado!",
                showConfirmButton: true,
                timer: 5000,
               
              })
              navigate("/login")
        } else if (result.isDenied) {
          Swal.fire("No se creo", "", "info");
        }
      });
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "El nombre debe tener por lo menos 3 caracteres")
        .max(10)
        .required("El campo es obligatorio"),
      email: Yup.string()
        .email("El email no corresponde")
        .required("El campo es requerido"),
      contraseña: Yup.string()
        .required("obligatorio")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "debe tener bla bla bla"),
      confirmarContraseña: Yup.string()
        .required("obligatorio")
        .oneOf([Yup.ref("contraseña")], "No coinciden"),
    }),
    validateOnChange: false,
  });

  console.log(values)

  return (
    <div style={{ padding: 50 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nombre"
          label="Nombre"
          variant="outlined"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          name="apellido"
          label="Apellido"
          variant="outlined"
          onChange={handleChange}
          error={errors.apellido ? true : false}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          name="contraseña"
          label="Contraseña"
          variant="outlined"
          onChange={handleChange}
          error={errors.contraseña ? true : false}
          helperText={errors.contraseña}
        />
        <TextField
          name="confirmarContraseña"
          label="Confirmar Contraseña"
          variant="outlined"
          onChange={handleChange}
          error={errors.confirmarContraseña ? true : false}
          helperText={errors.confirmarContraseña}
        />
        {/* <input type="text" className={ errors.nombre ? "input-rojo" : "input-normal" } />
         {
            errors.nombre && <span>{errors.nombre}</span>
         } */}
        <Button type="submit" variant="contained">
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default Register;
