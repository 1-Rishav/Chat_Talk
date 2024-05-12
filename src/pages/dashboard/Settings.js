import React, { useState } from "react";
import { Stack, Box, IconButton, Typography, Avatar, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, PencilCircle } from "phosphor-react";
import { faker } from "@faker-js/faker";
import Shortcuts from "../../sections/settings/Shortcuts";
function Settings() {
   const theme = useTheme();
   const [openShortcuts,setOpenShortcuts]=useState(false);
   const handleOpenShortcuts=()=>{
setOpenShortcuts(true)
   }
   const handleCloseShortcuts=()=>{
setOpenShortcuts(false)
   }
  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      //onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      //onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      //onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      //onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      //onclick: () => {},
    },
    {
      key: 5,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick:handleOpenShortcuts,
    },
    {
      key: 6,
      icon: <Info size={20} />,
      title: "Help",
      //onclick: () => {},
    },
    
  ]; 
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {
          /* LeftPanel */
        }
        <Box
          sx={{
            overflowY: "scroll",
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            boxShadow: "opx opx 2px rgba(0,0,0,0.25",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color="#4B4B4B" />
              </IconButton>
              <Typography variant="h6">Settings</Typography>
            </Stack>
            {/* Profile */}
            <Stack direction="row" spacing={3}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">
                  {faker.name.fullName()}
                </Typography>
              </Stack>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant="body2">{faker.random.words()}</Typography>
            </Stack>
            {/* List of options */}
            <Stack spacing={4}>
                {list.map(({key,icon,title,onclick})=><>
                <Stack sx={{cursor:"pointer"}} onClick={onclick} spacing={4}>
<Stack direction="row" spacing={2} alignItems={"center"}>
    {icon}
    <Typography variant="body2">{title}</Typography>
</Stack>
{key!==7 && <Divider/>}
                </Stack>
                </>)}
            </Stack>
          </Stack>
        </Box>
        {
          
            /* RightPanel */
          
        }
      </Stack>
      {openShortcuts && (<Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts}/>) }
      
    </>

  );
}

export default Settings;
