const Paciente = ({paciente, setPaciente, pacientes, setPacientes, eliminarPaciente}) => {
   const {nombreMascota, nombrePropietario, email, fechaAlta, sintomas, id} = paciente

   const handleElminarPaciente = () => {
       const respuesta = confirm('Deseas eliminar el paciente seleccionado?')

       if(respuesta){
        eliminarPaciente(id)
       }
   }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
        <span className="font-normal normal-case">{nombreMascota}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
        <span className="font-normal normal-case">{nombrePropietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
        <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {""}
        <span className="font-normal normal-case">{fechaAlta}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
    </p>
    <div className="flex justify-between">
        <button type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={() => setPaciente(paciente)}>
            Editar
        </button>
        <button type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handleElminarPaciente}
        >
            Eliminar
        </button>
    </div>
    </div>
  )
}
export default Paciente