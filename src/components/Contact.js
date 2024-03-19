const Contact = () => {
  return (
    <div>
      <h1>Contact us</h1>
      {/* <h2>Page for contact us logic</h2> */}
      <div>
        <form>
          <div>
            <input type="text" placeholder="name" />
          </div>
          <div>
            <input type="text" placeholder="email" />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
