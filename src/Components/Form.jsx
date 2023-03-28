import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Form = ({ name }) => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Enter Name For {name}
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            It should be little exciting
          </div>
        </div>
        {name === "Card" && (
          <div className="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Link For The Video
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        )}

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
