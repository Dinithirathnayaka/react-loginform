import React, { useState } from "react";
import "./InputMenu.css";
import { useFormik } from "formik";
import addform from "../../repositories/formrepository";

function InputMenu() {
  const initialValues = {
    username: "",
    password: "",
  };

  const [isupload, setLoading] = useState(false);

  const onSubmit = (values) => {
    console.log(values);

    addform(values).then((response) => {
      console.log(response);
      setLoading(true);
      console.log(response);
    });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.username) {
      errors.username = "User Name can not be empty";
    }

    if (!values.password) {
      errors.password = "You must enter a password";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,

    onSubmit,

    validate,
  });

  return (
    <div className="card position-absolute  start-50 translate-middle  w-50 ">
      <div className="col-12">
        <div className="card-header text-center  ">LOGIN FROM</div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group ">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control  "
                id="username"
                name="username"
                placeholder="Enter Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="small text-danger">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control "
                id="password"
                name="password"
                minlength="8"
                placeholder="Enter Your Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="small text-danger">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-success mt-3 mb-3">
              Submit
            </button>
          </form>

          <div className=" text-muted d-flex ">
            <h6 className="small mar text-danger ">Remember me</h6>
            <h6 className="small text-primary">Register Here</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputMenu;
