const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
    const {nombre,duenio,email,alta,sintomas,id}= paciente 

    const eliminar=(id)=>{
        const respuesta = confirm('Desea Eliminar este Paciente')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        // para hacer pruebas vamos a duplicar el div asi que para evitar mucho codigo lo separamos en un componente
        <div className="mx-3 bg-white shadow-md px-5 py-10 rounded-md my-2">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:<span className="font-normal normal-case"> {nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:
                <span className="font-normal normal-case"> {duenio}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo:
                <span className="font-normal normal-case">
                    {" "}
                    {email}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de Alta:
                <span className="font-normal normal-case">
                    {" "}
                    {alta}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:<span className="font-normal normal-case">{sintomas} </span>
            </p>
            <div className="flex justify-around mt-8">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md" onClick={()=>setPaciente(paciente)}>Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md" onClick={()=>eliminar(id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default Paciente
