import { Stack, Typography } from "@mui/material";
import React from "react";
import VerifyForm from "../../sections/auth/VerifyForm";

function verify() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography>Please verify OTP</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">
            Sent to email (rajrishav011@gmail.com)
          </Typography>
        </Stack>
      </Stack>
      <VerifyForm />
    </>
  );
}

export default verify;
