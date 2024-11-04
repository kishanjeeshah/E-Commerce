import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    comment: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(form);
    alert("Thank you for sending your details. We will contact you soon.");
    setForm({ name: "", email: "", number: "", comment: "" });
  }

  return (
    <div>

      <div className="flex justify-center p-16">
        <div className="md:w-1/2 border-gray-400 py-5 border-y">
          <div className="text-4xl py-5">Contact Us</div>

          <form onSubmit={submitHandler}>
            <div className="sm:flex justify-between w-full mb-5 sm:space-x-10">
              <label className="w-1/2" htmlFor="name">
                Name
                <input
                  className="border border-gray flex rounded border-gray-400 w-full"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={changeHandler}
                  required
                />
              </label>

              <label className="w-1/2" htmlFor="email">
                Email
                <input
                  className="border border-gray flex rounded border-gray-400 w-full"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}
                  required
                />
              </label>
            </div>

            <label className="w-full mb-5" htmlFor="number">
              Phone Number
              <input
                className="border border-gray flex rounded border-gray-400 w-full"
                type="tel"
                name="number"
                value={form.number}
                onChange={changeHandler}
                required
              />
            </label>

            <label className="w-full mb-5" htmlFor="comment">
              Write about us
              <textarea
                className="border border-gray flex rounded border-gray-400 w-full h-20"
                name="comment"
                value={form.comment}
                onChange={changeHandler}
                required
              />
            </label>

            <label className="flex justify-center items-center p-5">
              <input
                className="bg-orange-600 py-2 px-5 rounded-lg font-semibold text-white"
                type="submit"
                value="Submit"
              />
            </label>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Contact;
