import React from "react";

const Form = props => (
  <div className="row">
    <form style={{ margin: "0 auto", marginTop: "25px", width: "300px" }}>
      <input
        onChange={props.click}
        className="form-control form-control-sm is-invalid"
        style={{ paddingLeft: 8 }}
        placeholder="Search a Movie"
      />

      <div>
        <input
          style={{ marginLeft: 100 }}
          onChange={props.check}
          type="checkbox"
        />
        <label>&nbsp; IMDB > 7</label>
      </div>
    </form>
  </div>
);

export default Form;
