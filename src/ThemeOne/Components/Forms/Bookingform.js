import React from "react";
import "./form.scss";
import { Container, Grid } from "@mui/material";
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
           
              <Grid container  >
              <Grid xs={6}>

                <label>Trip <span>*</span></label>
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
                  <div className="error">{formik.errors.trip}</div>
                ) : null}
              </Grid>
              <Grid xs={6}>
                {" "}
                <label>Date of Travel <span>*</span></label>
                <input
                  className="date-input"
                  type="number"
                  placeholder=""
                  name="dateoftravel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dateoftravel && formik.errors.dateoftravel ? (
                  <div> {formik.errors.dateoftravel}</div>
                ) : null}
              </Grid>
              </Grid>
            

         
              <Grid container>
              <Grid xs={4}>
                {" "}
                <label>No of adults <span>*</span></label>
                <input
                  className="second-div-input"
                  type="number"
                  placeholder=""
                  name="noofadults"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dateoftravel && formik.errors.dateoftravel ? (
                  <div> {formik.errors.dateoftravel}</div>
                ) : null}
              </Grid>
              <Grid xs={4}>
                {" "}
                <label>No of childrens <span>*</span></label>
                <input
                  className="second-div-input"
                  type="number"
                  placeholder=""
                  name="noofchildren"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dateoftravel && formik.errors.dateoftravel ? (
                  <div> {formik.errors.dateoftravel}</div>
                ) : null}
              </Grid>
              <Grid xs={4}>
                {" "}
                <label>Trip Duration <span>*</span></label>
                <input
                  className="second-div-input"
                  type="number"
                  placeholder=""
                  name="tripduration"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dateoftravel && formik.errors.dateoftravel ? (
                  <div> {formik.errors.dateoftravel}</div>
                ) : null}
              </Grid>
              </Grid>
           
          
              <Grid container>
              <label>More Informaton <span>*</span></label>
              <textarea rows={5} placeholder='Eg. I want to know more about your'></textarea>
        
            </Grid>
           
              <Grid container>
              <Grid xs={6}>
                <label>Full Name <span>*</span></label>
                <input
                  className="fullname"
                  type="text"
                  placeholder=""
                  name="dateoftravel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.trip && formik.errors.trip ? (
                  <div>{formik.errors.trip}</div>
                ) : null}
              </Grid>
              <Grid xs={6}>
                {" "}
                <label>Email <span>*</span></label>
                <input
                  className="email"
                  type="email"
                  placeholder=""
                  name="dateoftravel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dateoftravel && formik.errors.dateoftravel ? (
                  <div> {formik.errors.dateoftravel}</div>
                ) : null}
              </Grid>
        
            </Grid>
          
              <Grid container>
              <Grid xs={6}>
                <label>Nationality <span>*</span></label>
                <select
                  id="natoinality"
                  name="nationality"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.trip}
                >
                  <option value="" label="Select option" />
                  <option value="Langtang" label="hello" />
                  <option value="Makalu Trip" label="Makalu Trip" />
                  <option value="Annapurna Trip" label="Annapurna Trip" />
                  <option value="Mount Everest" label="Mount Everest" />
                </select>
                {formik.touched.trip && formik.errors.trip ? (
                  <div>{formik.errors.trip}</div>
                ) : null}
              </Grid>
              <Grid xs={6}>
                {" "}
                <label>Phone Number <span>*</span></label>
                <input
                  className="phonenumber"
                  type="number"
                  placeholder=""
                  name="dateoftravel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dateoftravel && formik.errors.dateoftravel ? (
                  <div> {formik.errors.dateoftravel}</div>
                ) : null}
              </Grid>
           
            </Grid>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Bookingform;
