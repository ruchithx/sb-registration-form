"use client";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/services/firebase";
import { Box, Button, Grid, Typography } from "@mui/material";

import Modals from "../components/Modal";
import { MuiOtpInput } from "mui-one-time-password-input";
// import { warningMessage } from "../components/helper";
// import { saveData } from "../components/RegisterForm";
import { useRouter } from "next/navigation";

import { successMessage, warningMessage } from "../components/helper";
import { onValue, ref, set } from "@firebase/database";
import { useRegister } from "../components/RegisterContext";
import next from "next/types";
import styles from "../form.module.css";
export default function Verify() {
  const router = useRouter();

  function checkVerify() {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      if (user.emailVerified) {
        // User's email is verified
        console.log("Email is verified");
        saveData();
        auth.signOut();
        router.push("/");
      } else {
        router.push("/register/check");
        warningMessage("Email is not verified");
      }
    } else {
      console.log("no user");
    }
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    color: "linear-gradient(to right, #07060d, #0e559d, #0e559d)",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  const saveData = () => {
    const starCountRef = ref(db, "user/");
    let id = 0;

    onValue(starCountRef, (snapshot) => {
      console.log([snapshot.val()]);
      id = Object.keys(snapshot.val()).length;
    });

    const registerId = `SB-${id + 1}`;

    const name: any = localStorage.getItem("name");
    const index: any = localStorage.getItem("index");
    const contactNo: any = localStorage.getItem("contactNo");
    const gmail: any = localStorage.getItem("gmail");
    const uomMail: any = localStorage.getItem("uomMail");
    const batch: any = localStorage.getItem("batch");
    const faculty: any = localStorage.getItem("faculty");
    const department: any = localStorage.getItem("department");
    const previosEx: any = localStorage.getItem("previousEx");

    const storeData = {
      name,
      index,
      contactNo,
      gmail,
      uomMail,
      batch,
      faculty,
      department,
      previousExperience: previosEx,
      registerId,
    };

    set(ref(db, "user/" + index), storeData);

    // successMessage("Data send successfully");
    localStorage.clear();
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Grid item sx={{ width: "75%" }}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontFamily: "Amenti Regular" }}
          >
            Email verification
          </Typography>
          <Typography
            className=""
            id="modal-modal-description"
            sx={{ mt: 2, mb: 3, fontFamily: "Amenti Regular" }}
          >
            receive a verification email with a unique link. Clicking the link
            confirms your uom mail address
          </Typography>

          <Typography
            sx={{
              mt: 2,
              gap: 2,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              onClick={checkVerify}
              sx={{ width: 100, borderRadius: 10 }}
              size="small"
              variant="contained"
            >
              save
            </Button>
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}
