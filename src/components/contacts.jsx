function Contacts() {
  return (
    <>
      <div id="Contatti" className=" pb-2 scroll-smooth"></div>

      <div className="text-2xl flex justify-center pt-15 p-5">
        <h3>Contattami:</h3>
      </div>

      <div className="flex items-center justify-center bg-[#101010]">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-1/1 md:w-1/2 text-center p-4 mb-27 bg-[#101010] border-2 border-green-900 text-[#FFFFF0] rounded-lg"
        >
          <input
            type="hidden"
            name="access_key"
            value="a3e729dd-1f61-47ed-a069-3ffbdde1b500"
          />

          <div className="mb-4">
            <label htmlFor="name" className="block text-md font-semibold mb-2">
              Nome/Azienda
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 bg-[#101010] border-2 border-[#50C878] text-[#FFFFF0] rounded focus:outline-none focus:ring-2 focus:ring-[#50C878]"
              placeholder="Nome"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-md font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 bg-[#101010] border-2 border-[#50C878] text-[#FFFFF0] rounded focus:outline-none focus:ring-2 focus:ring-[#50C878]"
              placeholder="E-mail"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-md font-semibold mb-2"
            >
              Messaggio
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 bg-[#101010] border-2 border-[#50C878] text-[#FFFFF0] rounded focus:outline-none focus:ring-2 focus:ring-[#50C878]"
              placeholder="Scrivi un messaggio!"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-green-900 text-[#FFFFF0] rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#50C878] cursor-pointer"
          >
            Scrivimi!
          </button>
        </form>
      </div>
    </>
  );
}

export default Contacts;
