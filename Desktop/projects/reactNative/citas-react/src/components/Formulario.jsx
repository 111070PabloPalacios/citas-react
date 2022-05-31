import React, {useEffect, useState} from "react";
import { Error } from "./Error";

export const Formulario = ({setPacientes, setPaciente, pacientes, paciente}) => {

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  },[paciente])

  const handleSubmit = (e) => {
    e.preventDefault();
    if([mascota,propietario,email,fecha,sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      mascota, 
      propietario, 
      email, 
      fecha, 
      sintomas
  }

  if(paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

  } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
  }

  clearForm();
  }

  const clearForm = () => {
    setMascota('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="mc:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit} >
        {error && <Error mensaje="Todos los campos son obligatorios"/>}
        <div className="mb-5">
          <label htmlFor="mascota" 
          className="block text-grey-700 font-bold uppercase">
            NOMBRE MASCOTA
          </label>
          <input type="text" id="mascota" placeholder="Nombre de la mascota" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
          value={mascota} onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-grey-700 font-bold uppercase">
            NOMBRE PROPIETARIO
          </label>
          <input type="text" id="propietario" placeholder="Nombre del propietario" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
          value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-grey-700 font-bold uppercase">
            E-mail
          </label>
          <input type="email" id="email" placeholder="E-mail" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
          value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-grey-700 font-bold uppercase">
            Alta
          </label>
          <input type="date" id="alta" placeholder="E-mail" 
          className="border-2 w-full p-2 mt-2 rounded"
          value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-grey-700 font-bold uppercase">
            Sintomas
          </label>
          <textarea id="sintomas" placeholder="Sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
          value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
        </div>
        <input type="submit" 
        value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
        hover:bg-indigo-700 cursor-pointer trasition-colors"/>
      </form>
    </div>
  );
};
