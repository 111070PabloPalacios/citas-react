import React from 'react'
import { Pacientes } from './Pacientes'
import { Title,subtitle,subtitleText } from './styles'
export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
    {pacientes && pacientes.length ? (
      <>
      <h2 className={Title}>Listado pacientes</h2>
      <p className={subtitle}>
        Administra tus {' '}
        <span className={subtitleText}>pacientes y citas</span>
      </p>
      {pacientes.map((x) => (
        <Pacientes key={x.id} paciente={x} 
        setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      ))}
      </>
    ) : (
      <>
      <h2 className={Title}>No hay pacientes</h2>
      <p className={subtitle}>
        Añade pacientes y apareceran {' '}
        <span className={subtitleText}>en este lugar</span>
      </p>
      </>
    )}
    </div>
  )
}
