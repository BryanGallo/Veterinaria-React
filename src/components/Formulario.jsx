import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState("");
    const [duenio, setDuenio] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setDuenio(paciente.duenio);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36).substring(2);

        return random + fecha;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, duenio, email, alta, sintomas].includes("")) {
            return setError(true);
        }
        setError(false);

        const objetoPaciente = {
            nombre,
            duenio,
            email,
            alta,
            sintomas,
        };

        if (paciente.id) {
            //editando registro
            // console.log(objetoPaciente);
            // console.log(paciente);
            objetoPaciente.id=paciente.id;
            //Generamos un nuevo arreglo e iteramos sobre los pacientes y a su ves identificamos el registro que estas editando
            //y en caso de que pacienteState.id sea igual a paciende.id retornamos el objeto paciento si no retornamos el paciente del state
            const pacienteActualizados= pacientes.map((pacienteState)=>{
                return pacienteState.id === paciente.id ? objetoPaciente : pacienteState
            })
            // console.log(pacienteActualizado);
            
            setPacientes(pacienteActualizados)

            setPaciente({})
        } else {
            //nuevo registro
            objetoPaciente.id=generarId();
            // console.log(objetoPaciente);
            //no podemos hacer push porque eso modifica el arreglo original, esto no se hace en react
            //aqui nosotros debemos usar metodos inmutables
            setPacientes([...pacientes, objetoPaciente]);
        }

        //Limpiar el formulario
        setNombre("");
        setDuenio("");
        setEmail("");
        setAlta("");
        setSintomas("");
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg my-5 text-center">
                Añade Pacientes y{" "}
                <span className="text-indigo-600 font-bold ">
                    Administralos
                </span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 "
                onSubmit={handleSubmit}>
                {error && <Error mensaje="Todos los campos son obligatorios" />}
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block font-bold text-gray-700 uppercase">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la Mascota"
                        className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="duenio"
                        className="block font-bold text-gray-700 uppercase">
                        Nombre Dueño
                    </label>
                    <input
                        type="text"
                        id="duenio"
                        placeholder="Nombre del Dueño"
                        className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
                        value={duenio}
                        onChange={(e) => {
                            setDuenio(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block font-bold text-gray-700 uppercase">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="bg@hotmail.com"
                        className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block font-bold text-gray-700 uppercase">
                        Alta
                    </label>
                    <input
                        type="date"
                        id="alta"
                        className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={(e) => {
                            setAlta(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block font-bold text-gray-700 uppercase">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => {
                            setSintomas(e.target.value);
                        }}></textarea>
                </div>

                <input
                    type="submit"
                    className="p-3 border-2 w-full mt-2 rounded-md bg-indigo-600 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? "EDITAR PACIENTE" : "AGREGAR PACIENTE"}
                />
            </form>
        </div>
    );
};

export default Formulario;
