function About() {
  return (
    <section className="text-gray-800 py-16 grid grid-cols-2 md:grid-cols-3 items-center lg:gap-10 xl:gap-36 w-11/12 xl:w-10/12 mx-auto gap-10">
      <div className="col-span-3 md:col-span-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-red-400 to-red-100 text-transparent bg-clip-text">
          I take no hidden shortcuts, <br />
          only clear paths to excellence.
        </h1>
        <p className="text-gray-600 mt-4 lg:text-base xl:text-lg leading-relaxed">
          I<span className="symbol">&apos;</span>m a Software Engineer with a
          strong background in web and mobile app development, based in Lagos,
          Nigeria. As a Tech Instructor, I am passionate about teaching and
          mentoring aspiring developers, helping them build a solid foundation
          in programming and software development. I also have an eye for UI
          <span className="symbol">/</span>UX design, ensuring that the products
          I work on are both functional and visually appealing.
        </p>
        <p className="text-gray-600 mt-4 lg:text-base xl:text-lg leading-relaxed">
          Beyond coding, I enjoy traveling, researching, and exploring the
          internet to stay updated with the latest trends in technology. I have
          a deep interest in AI<span className="symbol">/</span>ML, building
          innovative solutions, collaborating on open
          <span className="symbol">-</span>source projects, and continuous
          learning to expand my knowledge and expertise.
        </p>
      </div>

      <div className="col-span-3 md:col-span-1 relative flex justify-center xl:justify-end">
        <div
          //   src="/mnt/data/image.png"
          //   alt="Profile"
          className="w-80 h-96 object-cover bg-red-100 rounded-lg shadow-lg"
        ></div>
        <div className="absolute -left-1 xl:-left-28 top-20 bg-white px-4 py-2 rounded-full flex items-center shadow-lg">
          <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
          <span className="text-black font-medium">Experience Designer</span>
        </div>
        <div className="absolute -right-5 xl:-left-10 bottom-20 bg-white px-4 py-2 rounded-full flex items-center shadow-lg w-fit">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-black font-medium">Mark J. Collins</span>
        </div>
      </div>
    </section>
  );
}

export default About;
