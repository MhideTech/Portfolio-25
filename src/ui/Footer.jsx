function Footer() {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 py-16 px-4 mt-10">
      <div className="mb-6">
        <div className="flex items-center justify-center w-fit h-fit bg-gray-200 rounded-full p-3">
          <img src="src/assets/images/deal.png" alt="Handshake deal" className="w-16 m-0" />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Tell me about your next <br /> project
      </h2>

      <div className="flex space-x-4">
        <a
          href="mailto:okefolahanolamide2006@gmail.com"
          className="flex items-center px-8 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800"
        >
          Send me an email
        </a>
      </div>

      <div className="mt-12 text-center">
        <p className="text-md text-gray-500">© {date} All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
