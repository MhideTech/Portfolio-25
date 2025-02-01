function SectionHeadline({ children }) {
  return (
    <div className="flex items-center justify-center my-8 xl:w-10/12 mx-auto">
      <div className="border-2 border-t border-gray-800 flex-grow"></div>

      <div className="transform rotate-[-9deg] bg-gray-50 px-8 py-3 text-center shadow-lg rounded-full">
        <span className="font-medium text-gray-800 text-xl">{children}</span>
      </div>

      <div className="border-2 border-t border-gray-800 flex-grow"></div>
    </div>
  );
}

export default SectionHeadline;
