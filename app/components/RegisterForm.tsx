"use client";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ToastContainer } from "react-toastify";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";

import "react-toastify/dist/ReactToastify.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRegister } from "./RegisterContext";
import { registration, successMessage, warningMessage } from "./helper";
import { db } from "@/services/firebase";
import { useState } from "react";
import Modal from "./Modal";
import Modals from "./Modal";

const RegisterForm = () => {
  const {
    handleTelephone,
    handleGmail,
    handleUomMail,
    handleBatch,
    handleFaculty,
    handleDepartment,
    handleChange,
    handleName,
    handleIndex,
    name,
    index,
    mobileNumber,
    gmail,
    uomMail,
    batch,
    faculty,
    department,
    checked,
    showModal,
    setShowModal,
    clearForm,
    clearPIN,
    setRandomNumber,
    checkPIN,
    enterPinButton,
    setEnterPinButton,
    sendOTP,
    setOtp,
  }: any = useRegister();

  async function submitForm(e: any) {
    e.preventDefault();

    const data = {
      name,
      index,
      telephone: mobileNumber,
      gmail,
      uomMail,
    };
    if (!batch || !faculty || !department) {
      warningMessage("Fill the form");
      return;
    }

    const result = registration.safeParse(data);
    if (!result.success) {
      const formatedError = result.error.format();
      const nameError = formatedError.name?._errors || "";
      const telephoneError = formatedError.telephone?._errors || "";
      const gmailError = formatedError.gmail?._errors || "";
      const indexError = formatedError.index?._errors || "";
      const uomMailError = formatedError.uomMail?._errors || "";
      if (nameError) {
        warningMessage(nameError[0]);
        return;
      } else if (telephoneError) {
        warningMessage(telephoneError[0]);
        return;
      } else if (gmailError) {
        warningMessage(gmailError[0]);
        return;
      } else if (indexError) {
        warningMessage(indexError[0]);
        return;
      } else if (uomMailError) {
        warningMessage(uomMailError[0]);
        return;
      }
    }
    try {
      let checkUser = false;

      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        const user = Object.values(doc.data()).includes(uomMail);
        if (user === true) {
          warningMessage("This email address already registered to the system");
          checkUser = true;
        }
      });
      if (checkUser) return;
      if (!checked) {
        warningMessage("Confirm your details");
        return;
      }
      sendOTP();
    } catch (e) {
      console.log(e);
    }
  }

  async function saveData() {
    const check = checkPIN();
    if (!check) {
      warningMessage("Your pin number is wrong");
      return;
    }
    const querySnapshot = await getDocs(collection(db, "user"));
    const id = querySnapshot.docs.length + 1;

    const storeData = {
      name,
      index,
      telephone: mobileNumber,
      gmail,
      uomMail,
      batch,
      faculty,
      department,
      id: `I-${id}`,
    };

    await setDoc(doc(db, "user", index), storeData);
    successMessage("Data send successfully");
    localStorage.clear();
    clearForm();
    setEnterPinButton(false);
    clearPIN();
    setShowModal(false);
    setOtp("");
    return true;
  }

  return (
    <div>
      {showModal && <Modals fn={saveData} />}
      <form onSubmit={submitForm}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="start"
          spacing={2}
          mb={3}
        >
          <Grid item sx={{ width: "75%" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              size="small"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => handleName(e)}
              required
              InputProps={{
                sx: { borderRadius: 10 },
              }}
            />
          </Grid>
          <Grid item sx={{ width: "75%" }}>
            <TextField
              fullWidth
              InputProps={{ sx: { borderRadius: 10 } }}
              id="outlined-basic"
              size="small"
              label="Index"
              required
              variant="outlined"
              value={index}
              onChange={(e) => handleIndex(e)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              InputProps={{ sx: { borderRadius: 10 } }}
              id="outlined-basic"
              size="small"
              required
              label="Contact Number(Whatsapp)"
              variant="outlined"
              value={mobileNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleTelephone(e)
              }
            />
          </Grid>

          <Grid item sx={{ width: "75%" }}>
            <TextField
              fullWidth
              InputProps={{ sx: { borderRadius: 10 } }}
              id="outlined-basic"
              size="small"
              required
              label="University Email(sample@uom.lk)"
              variant="outlined"
              value={uomMail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleUomMail(e)
              }
            />
          </Grid>
          <Grid item sx={{ width: "75%" }}>
            <TextField
              fullWidth
              InputProps={{ sx: { borderRadius: 10 } }}
              id="outlined-basic"
              size="small"
              label="Gmail"
              required
              variant="outlined"
              value={gmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleGmail(e)
              }
            />
          </Grid>

          <Grid item sx={{ width: "75%" }}>
            <FormControl sx={{ width: 220 }} size="small">
              <InputLabel id="demo-simple-select-label">Batch</InputLabel>
              <Select
                inputProps={{ sx: { borderRadius: 10 } }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Batch"
                value={batch}
                sx={{ borderRadius: 10 }}
                onChange={(e: any) => handleBatch(e)}
              >
                <MenuItem value="Batch 19">Batch 19</MenuItem>
                <MenuItem value="Batch 20">Batch 20</MenuItem>
                <MenuItem value="Batch 21">Batch 21</MenuItem>
                <MenuItem value="Batch 22">Batch 22</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ width: "75%" }}>
            <FormControl sx={{ width: 220 }} size="small">
              <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
              <Select
                sx={{ borderRadius: 10 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Faculty"
                onChange={(e: any) => handleFaculty(e)}
                value={faculty}
                inputProps={{ sx: { borderRadius: 10 } }}
              >
                <MenuItem value="Faculty Of Architecture">
                  Faculty Of Architecture
                </MenuItem>
                <MenuItem value=" Faculty Of Engineering">
                  Faculty Of Engineering
                </MenuItem>
                <MenuItem value=" Faculty Of Business">
                  Faculty Of Business
                </MenuItem>
                <MenuItem value="Faculty Of Information technology">
                  Faculty Of Information technology
                </MenuItem>
                <MenuItem value="Faculty Of Medicine">
                  Faculty Of Medicine
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ width: "75%" }}>
            <FormControl sx={{ minWidth: 220 }} size="small">
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                sx={{ borderRadius: 10 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Department"
                onChange={(e: any) => handleDepartment(e)}
                value={department}
              >
                <MenuItem value="Bio Medical Engineering">
                  Bio Medical Engineering
                </MenuItem>
                <MenuItem value="Electronic and Telecommunication Engineering">
                  Electronic and Telecommunication Engineering
                </MenuItem>
                <MenuItem value="Electrical Engineering">
                  Electrical Engineering
                </MenuItem>
                <MenuItem value="Mechanical Engineering">
                  Mechanical Engineering
                </MenuItem>
                <MenuItem value="Civil Engineering">Civil Engineering</MenuItem>
                <MenuItem value="Material Science Engineering">
                  Material Science Engineering
                </MenuItem>
                <MenuItem value="Chemical and Process Engineering">
                  Chemical and Process Engineering
                </MenuItem>
                <MenuItem value="Transport Management and Logistics Engineering">
                  Transport Management and Logistics Engineering
                </MenuItem>
                <MenuItem value="Textile and Apparel Engineering">
                  Textile and Apparel Engineering
                </MenuItem>
                <MenuItem value="Earth Resource Engineering">
                  Earth Resource Engineering
                </MenuItem>
                <MenuItem value="Computer Science & Engneering">
                  Computer Science & Engneering
                </MenuItem>
                <MenuItem value="Information Technology">
                  Information Technology
                </MenuItem>
                <MenuItem value="Interdisciplinary Study">
                  Interdisciplinary Study
                </MenuItem>
                <MenuItem value="Computational Mathematics">
                  Computational Mathematics
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ width: "100%" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="I confirm that I have entered the details correctly"
              checked={checked}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ width: "75%" }}>
            <Button
              type="submit"
              sx={{ width: 200, borderRadius: 10 }}
              size="small"
              variant="contained"
            >
              Save details
            </Button>
            {enterPinButton && (
              <Button
                onClick={() => setShowModal(true)}
                sx={{ width: 200, borderRadius: 10, mt: 2 }}
                size="small"
                variant="contained"
              >
                Enter PIN
              </Button>
            )}
          </Grid>

          <div></div>
        </Grid>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
