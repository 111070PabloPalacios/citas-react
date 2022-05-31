import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'
import { Formulario } from './components/Formulario'


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id  !== id);
    setPacientes(pacientesActualizados);
  }

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Formulario setPacientes={setPacientes} setPaciente={setPaciente} pacientes={pacientes} paciente={paciente}/>
      <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} 
      eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  )
}

export default App
