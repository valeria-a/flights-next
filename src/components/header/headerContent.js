"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react"


const HeaderContent = async () => {


    return(

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div">
              Sun Airlines
            </Typography>
            <Box sx={{flexGrow: 1}}>
            </Box>
            <Stack direction={'column'}>
                <button onClick={() => signIn()}>Login</button>
            </Stack>
          </Toolbar>
        </AppBar>
        </Box>

    )
}

export default HeaderContent;