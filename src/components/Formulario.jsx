import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombreMascota , setNombreMascota] = useState("");
  const [nombrePropietario , setNombrePropietario] = useState("");
  const [email , setEmail] = useState("");
  const [fechaAlta , setFechaAlta] = useState("");
  const [sintomas , setSintomas] = useState("");
  const [error , setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombreMascota(paciente.nombreMascota)
      setNombrePropietario(paciente.nombrePropietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente] )

  const generarId = () =>{
    const random = Math.random().toString().substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha;
  }

  const handleSubmit = (e) => { 
    e.preventDefault();

    if( [nombreMascota,nombrePropietario,email,fechaAlta,sintomas].includes("") ){
      
      setError(true);
      return;
    }else{
      const objPaciente = {
        nombreMascota,
        nombrePropietario,
        email,
        fechaAlta,
        sintomas
      }

      if(paciente.id){
       //editando el registro
       objPaciente.id = paciente.id

       const nuevoArregloPacientes = pacientes.map(pacienteState => (
         pacienteState.id === paciente.id ? objPaciente : pacienteState
       ) )
       setPacientes(nuevoArregloPacientes)
       setPaciente({})

      }else{
        objPaciente.id = generarId();
        setPacientes([
          ...pacientes,
          objPaciente
        ])
      }


      setError(false);

      //reiniciar el formulario
      setNombreMascota("")
      setNombrePropietario("")
      setEmail("")
      setFechaAlta("")
      setSintomas("")

    }
 
  }

  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center"> Seguimientos Pacientes </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
        </p> 

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mx-5"
          onSubmit={handleSubmit}>
            {error && <Error><p>Todos los campos son obligatorios.</p></Error>}
            <div className="mb-5">
                <label htmlFor="nombreMascota" className="block text-gray-700 uppercase font-bold">
                  Nombre Mascota:
                </label>
                <input 
                id="nombreMascota"
                  type="text"
                  placeholder="Nombre de la Mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={nombreMascota}
                  onChange={(e) => (setNombreMascota(e.target.value))  }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase font-bold">
                  Nombre Propietario:
                </label>
                <input 
                id="nombrePropietario"
                  type="text"
                  placeholder="Nombre del Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={nombrePropietario}
                  onChange={(e) => (setNombrePropietario(e.target.value))  }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                  Email:
                </label>
                <input 
                id="email"
                  type="email"
                  placeholder="Email contacto propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={email}
                  onChange={(e) => (setEmail(e.target.value))  }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold">
                  Fecha de Alta:
                </label>
                <input 
                id="fechaAlta"
                  type="date"
                  placeholder="Fecha de alta"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={fechaAlta}
                  onChange={(e) => (setFechaAlta(e.target.value))  }
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                  Síntomas:
                </label>
                <textarea 
                id="sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Describe los síntomas"
                value={sintomas}
                onChange={(e) => (setSintomas(e.target.value))  }
                />
            </div>

            <input type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors mb-10" 
            value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
        </form>
      </div>
  )
}

export default Formulario