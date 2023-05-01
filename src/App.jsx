import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    //Implementando localstorage recuerda que solo puedes guardar strings
    //Escribimos en localstorage cuando haya cambios en pacientes con useEffect 
    //Escribir en localStorage con localStorage.setItem('nombre', 'valor')
    //Leer en localstorage con localStorage.getItem('nombre')
    //Eliminar en localstorage con localStorage.removeItem('nombre')
    //Limpiar localstorage con localStorage.clear()

    useEffect(() => {
        const obtenerLS = () => {
            //como localStorage solo puede guardar strings, lo convertimos a arreglo con JSON.parse
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            setPacientes(pacientesLS);
            console.log(pacientesLS);
        }
        obtenerLS();
    }, [])
    

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])
    

    const eliminarPaciente = (id) => {
        // filter no muta el arreglo original
        const pacientesActualizados = pacientes.filter(
            (paciente) => paciente.id !== id
        );
        setPacientes(pacientesActualizados);
    };

    // const tomaValor = (valor) => {
    //     console.log(valor);
    // };
    return (
        <div className="container mx-auto mt-20">
            <Header
            // tomaValor={tomaValor}
            />
            <div className="mt-12 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />

                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
