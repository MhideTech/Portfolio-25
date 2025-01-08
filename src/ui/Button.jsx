function Button({ children }) {
  return (
    <button type="button" className="inline-flex items-center m-0 bg-white py-2 px-5 rounded text-lg">
      {children}
    </button>
  );
}

export default Button;
