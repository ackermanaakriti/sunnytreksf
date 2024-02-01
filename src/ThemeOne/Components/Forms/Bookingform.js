import React from "react";
import "./form.scss";
import { Container } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Bookingform = () => {
  const validationschema = Yup.object({
    trip: Yup.string().required("trip is required"),
  });

  const formik = useFormik({
    initialValues: {
      trip: "",
      dateoftravel: "",
    },
    validationSchema: validationschema,
    onSubmit: (values) => {
      console.log("form submitted with value", values);
    },
  });
  return (
    <>
      <div className="bookingform--container">
        <Container>
          <form>
            {/* <label>Trip</label>
            <input placeholder='' name='trip' onChange={formik.handleChange} value={formik.values.trip} onBlur={formik.handleBlur}/>
            {formik.touched.trip && formik.errors.trip? <div>{formik.errors.trip}</div>:null} */}
            <div className="f-div">
              <div>
                <label>Trip</label>
                <select
                  id="Trip"
                  name="trip"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.trip}
                >
                  <option value="" label="Select a trip" />
                  <option value="Langtang" label="hello" />
                  <option value="Makalu Trip" label="Makalu Trip" />
                  <option value="Annapurna Trip" label="Annapurna Trip" />
                  <option value="Mount Everest" label="Mount Everest" />
                </select>
                {formik.touched.trip && formik.errors.trip ? (
                  <div>{formik.errors.trip}</div>
                ) : null}
              </div>

              <div>
                {" "}
                <label>Date of Travel</label>
                <input
                  type="date"
                  placeholder=""
                  name="dateoftravel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dateoftravel && formik.errors.dateoftravel ? (
                  <div> {formik.errors.dateoftravel}</div>
                ) : null}
              </div>
            </div>

            <div className="secnd-div">
                
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Bookingform;
