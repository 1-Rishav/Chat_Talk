import { Link, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import {Link as RouterLink} from "react-router-dom"

import React from 'react'
import NewPasswordForm from '../../sections/auth/NewPasswordForm'

function NewPassword() {
  return (
    <>
    <Stack spacing={2} sx={{mb:5,position:"relative"}}>
        <Typography variant="h3" paragraph>
            reset Password
        </Typography>

        <Typography sx={{color:"text.secondary",mb:5}}>
            Please set your new password
        </Typography>

    </Stack>
    <NewPasswordForm/>
    <Link component={RouterLink} to="/auth/login" color="inherit" variant="subtitle2" sx={{mt:3,mx:"auto",alignItems:"center" , display:"inline-flex"}}>
    <CaretLeft/>
    Return to sign in
    </Link>
    </>
  )
}

export default NewPassword