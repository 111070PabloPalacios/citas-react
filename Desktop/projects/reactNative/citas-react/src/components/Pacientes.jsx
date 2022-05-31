import React from 'react'

export const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

  const deleteHandler = () => {
    
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
    <span className="font-normal normal-case">{paciente.mascota}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
    <span className="font-normal normal-case">{paciente.propietario}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {' '}
    <span className="font-normal normal-case">{paciente.email}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
    <span className="font-normal normal-case">{paciente.fecha}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
    <span className="font-normal normal-case">{paciente.sintomas}</span></p>
    <div className="flex justify-evenly">
      <button type="button" className="py-2 px-10 bg-indigo-600 
      hover:bg-indigo-700 text-white font-bold uppercase"
      onClick={() => setPaciente(paciente)} >Editar</button>
      <button type="button" 
      className="py-2 px-10 bg-red-600 hover:bg-red-700 
      text-white font-bold uppercase"
      onClick={() => eliminarPaciente(paciente.id)}>Eliminar</button>
    </div>
  </div>
  )
}
