import React from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import StarredMessage from "../../components/StarredMessage";
const GeneralApp = () => {
  const theme = useTheme();
  const { slidebar } = useSelector((store) => store.app);
  console.log(slidebar);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      {
        <Box
          sx={{
            height: "100%",
            width: slidebar.open
              ? "calc(100vw - 740px)"
              : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f0f4fa"
                : theme.palette.background.paper,
          }}
        >
          {/* Conversation */}
          <Conversation />
        </Box>
      }
      {slidebar.open && 
         (() => {
          switch (slidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessage/>;
            case "SHARED":
              return <SharedMessage />;
            default:
              break;
          }
        })() }
    </Stack>
  );
};

export default GeneralApp;
