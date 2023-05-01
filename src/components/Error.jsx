const Error = ({mensaje}) => {
    return (
        <div className="bg-red-600 rounded-lg mb-3">
            <p className="text-white text-center p-3 uppercase">
                {mensaje}
            </p>
        </div>
    );
};

export default Error
