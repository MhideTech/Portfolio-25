import { useForm, ValidationError } from "@formspree/react";

function ContactForm({ setIsFormOpen }) {
  const [state, handleSubmit] = useForm("xovjnqdk");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="w-screen h-screen flex items-center contact-form fixed top-0 z-50 p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full md:w-4/6 lg:w-1/2 mx-auto bg-gray-600 px-10 py-14 relative"
      >
        <button
          className="absolute top-3 right-5 cursor-pointer underline text-gray-200"
          onClick={() => setIsFormOpen(false)}
        >
          close
        </button>
        <div>
          <label htmlFor="name" className="block mb-2 text-xl text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="block w-full p-3 md:p-4 border-2 outline-none focus:border-gray-500"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-xl text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="block w-full p-3 md:p-4 border-2 outline-none focus:border-gray-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-xl text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Leave a message for me..."
            className="block w-full p-3 md:p-4 border-2 outline-none focus:border-gray-500"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-gray-800 py-3 rounded text-gray-200 text-xl"
        >
          Reach out to me
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
