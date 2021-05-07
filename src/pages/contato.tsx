import React, { useState } from "react";
import { navigate } from "gatsby";

function encode(data: any) {
  return Object.keys(data)
    .map((key: any) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contato = () => {
  /**
   * local state to get all current form values
   */
  const [formValues, setFormValues] = useState({});

  /**
   * Function to handle all the changes and store the current value
   *
   * @TODO re-type 'e' param
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Submit function
   *
   * The function prevents de default behavior
   * and fetches a POST method to current Netlify Form
   *
   * @param e the form
   *
   * https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    /** @TODO re-type 'form' */
    const form: any = e.target;

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formValues,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  return (
    <div>
      <form
        name="contato"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/sucesso"
        onSubmit={handleSubmit}
        id="contato-page-form"
      >
        {/* Netlify Form - just for the bots */}
        <input
          type="hidden"
          name="form-name"
          value="contato"
          onChange={handleChange}
        ></input>
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        {/* end Netlify Form */}

        <label>
          Your Name: <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Your Email: <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Your Role:{" "}
          <select name="role" multiple onSelect={handleChange}>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
        <label>
          Message: <textarea name="message" onChange={handleChange}></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
