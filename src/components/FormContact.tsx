import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { useForm } from "react-hook-form";

interface IFormInputs {
  name: string;
  email: string;
  project: string;
  companyName: string;
  companyWebsite: string;
}

function encode(data: any) {
  return Object.keys(data)
    .map((key: any) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const FormContact = () => {
  const [submiting, setSubmiting] = useState(false);

  const { handleSubmit, register, watch, reset } = useForm<IFormInputs>();
  const onSubmit = (data: IFormInputs) => {
    setSubmiting(true);

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contato",
        ...data,
      }),
    })
      .then(() => {
        setSubmiting(false);
        reset();
      })
      .then(() => navigate("/sucesso"))
      .catch(error => alert(error));

    console.log(data);
  };

  console.log(watch(["name", "email", "project"]));

  return (
    <StyledForm
      name="contato"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/sucesso"
      onSubmit={handleSubmit(onSubmit)}
      id="form-contact"
    >
      {/* Netlify Form - just for the bots */}
      <input type="hidden" name="form-name" value="contato"></input>
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      {/* end Netlify Form */}

      <fieldset>
        <h2>Estarei ansioso para ouvir suas ideias sobre seu projeto</h2>
        <div className="input-wrapper">
          <input {...register("name")} type="text" data-empty={!watch("name")} />
          <label htmlFor="name">Qual seu nome?</label>
        </div>
        <div className="input-wrapper">
          <input {...register("email")} type="email" data-empty={!watch("email")} />
          <label htmlFor="name">Qual seu email?</label>
        </div>
        <div className="input-wrapper">
          <input
            {...register("companyName")}
            type="text"
            data-empty={!watch("companyName")}
          />
          <label htmlFor="name">Qual o nome da sua empresa?</label>
        </div>
        <div className="input-wrapper">
          <input
            {...register("companyWebsite")}
            type="text"
            data-empty={!watch("companyWebsite")}
            placeholder="exemplo.com.br"
          />
          <label htmlFor="name">Qual o site, se houver?</label>
        </div>
      </fieldset>

      <fieldset>
        <h2>Me conte um pouco sobre seu projeto</h2>
        <p>Brevemente descreva o que seu projeto tem de melhor</p>
        <div className="input-wrapper">
          <textarea
            {...register("project")}
            placeholder="Descreva seu projeto..."
            data-empty={!watch("project")}
          />
        </div>
      </fieldset>

      <fieldset>
        {/* <h2>Com o que posso te ajudar?</h2>
        <div className="input-wrapper">
          <input
            {...register("check")}
          
            placeholder="Descreva seu projeto..."
            data-empty={!watch("check")}
          />
        </div> */}
      </fieldset>

      <button type="submit" disabled={submiting}>
        Submit
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  fieldset {
    margin: 0 0 1rem 0;
    padding: 0;
    border: none;

    h2 {
      margin-bottom: 1rem;

      @media screen and (min-width: 600px) {
        font-size: 1.8em;
      }
    }

    .input-wrapper {
      position: relative;
      overflow: hidden;

      input,
      textarea {
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 1.8rem;
        color: black;
        font-size: inherit;
        font-size: 1em;
        font-family: inherit;
        background: #f5f5f5;
        border: none;
        border-radius: 0.25rem;

        &:focus {
          outline: ${({ theme }) => theme.palette.primary.main} auto 5px;
          outline-offset: -2px;

          &::placeholder {
            visibility: visible;
          }
        }

        &:focus ~ label,
        &[data-empty="false"] ~ label {
          font-size: 0.7em;
          transform: translateY(-190%);
        }

        @media screen and (min-width: 600px) {
          margin-bottom: 1rem;
          padding: 2.5rem 2rem 1.5rem;
        }
      }

      input::placeholder {
        visibility: hidden;
      }

      label,
      textarea::placeholder {
        position: absolute;
        top: 50%;
        left: 2rem;
        color: #3a3a3a;
        font-size: 0.9em;
        white-space: nowrap;
        transform: translateY(-80%);
        transition: transform 0.2s, font-size 0.2s;
        user-select: none;
        pointer-events: none;
      }

      textarea {
        min-height: 10rem;
        max-height: 30rem;
        padding-top: 1rem;

        &::placeholder {
          transform: translateY(5%);
        }
      }
    }
  }
`;

export default FormContact;
