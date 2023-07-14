import React from "react";

export default function Form(props) {
  return (
    <div className="form--flex">
        <form className="form form--grid">
          <input
            type="text"
            name="topText"
            className="form__input form__input--topText"
            onChange={(event) => props.handleChange(event)}
          />
          <input
            type="text"
            name="bottomText"
            className="form__input form__input--bottomText"
            onChange={(event) => props.handleChange(event)}
          />
          <button type="button" className="form__button" onClick={(event) => props.getNewImage(event)}>
            Get new image
          </button>
        </form>
    </div>
  );
}
