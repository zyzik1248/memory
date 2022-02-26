const Button = ({type, label, onClick}) => {
  return (
    <button
      type={type | 'button'}
      className="tracking-widest font-semibold bg-green-500 py-2 px-16 text-white text-xl rounded-md border-2 border-green-700 transition ease-in-out duration-300 hover:bg-green-600"
      onClick={()=> onClick && onClick()}
    >
      {label}
    </button>
  );
};

export default Button;
