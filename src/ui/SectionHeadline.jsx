function SectionHeadline({ children }) {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="border-t border-gray-300 flex-grow"></div>

      <div className="transform rotate-[-11deg] bg-white px-8 py-3 text-center shadow-lg rounded-full">
        <span className="font-medium text-gray-800 text-xl">{children}</span>
      </div>

      <div className="border-t border-gray-300 flex-grow"></div>
    </div>
  );
}

export default SectionHeadline;
