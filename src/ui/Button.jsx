function Button({ children, setIsFormOpen }) {
  return (
    <button
      onClick={() => setIsFormOpen(true)}
      type="button"
      className="inline-flex items-center m-0 bg-gray-800 text-gray-50 py-2 px-5 rounded-full flex-shrink-0 text-lg"
    >
      {children}
    </button>
  );
}

export default Button;
