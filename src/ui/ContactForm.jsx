function ContactForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message"></textarea>
      <button type="submit">Reach out to me</button>
    </form>
  );
}

export default ContactForm;
