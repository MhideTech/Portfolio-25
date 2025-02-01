function About() {
  return (
    <section className="text-gray-800 py-16 grid grid-cols-2 md:grid-cols-3 items-center gap-36 w-10/12 mx-auto">
      <div className="grid-cols-1 md:col-span-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-red-400 to-red-100 text-transparent bg-clip-text">
          I take no hidden shortcuts, <br />
          only clear paths to excellence.
        </h1>
        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          At vero eos et accusamus et odio dignissimos ducimus praesentium
          voluptatum corrupti quos dolores quas molestias excepturi sint
          occaecati cupiditate provident qui officia deserunt mollitia animi, id
          est laborum et dolorum.
        </p>        
        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          At vero eos et accusamus et odio dignissimos ducimus praesentium
          voluptatum corrupti quos dolores quas molestias excepturi sint
          occaecati cupiditate provident qui officia deserunt mollitia animi, id
          est laborum et dolorum.
        </p>        
      </div>

      <div className="col-span-1 relative flex justify-end bg-blue-100">
        <div
          //   src="/mnt/data/image.png"
          //   alt="Profile"
          className="w-80 h-96 object-cover bg-red-100 rounded-lg shadow-lg"
        ></div>
        <div className="absolute -left-28 top-20 bg-white px-4 py-2 rounded-full flex items-center shadow-lg">
          <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
          <span className="text-black font-medium">Experience Designer</span>
        </div>
        <div className="absolute -left-10 bottom-20 bg-white px-4 py-2 rounded-full flex items-center shadow-lg">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-black font-medium">Mark J. Collins</span>
        </div>
      </div>
    </section>
  );
}

export default About;
