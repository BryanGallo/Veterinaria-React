import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    //RETO 2
    // useEffect(() => {
    //     if (pacientes.length >0) {
    //         console.log('Nuevo Paciente');
    //     }
    // }, [pacientes]);
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado de Pacientes
                    </h2>
                    <p className="text-lg my-5 text-center">
                        Administra tus{" "}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>

                    {/* {pacientes.map((paciente, index) => {
                        return (
                            <Paciente
                                //siempre que vayas a mostar un listo .map debemos tener un key unico de la siguiente manera pero es una mala practica
                                key={index}
                                paciente={paciente}
                            />
                        );
                    })} */}
                    {pacientes.map((paciente) => {
                        return (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        );
                    })}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay Pacientes
                    </h2>
                    <p className="text-lg my-5 text-center">
                        Comienza agregando pacientes{" "}
                        <span className="text-indigo-600 font-bold">
                            y apareceran en este lugar
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
