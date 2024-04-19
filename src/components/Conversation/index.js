import { Stack,Box} from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  return (
    <Stack height={"100vh"} maxheight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />
      {/* Msg */}
      <Box width={"100%"} sx={{ flexGrow: 1,height:"100vh",overflowY:"scroll"}}>
      <Message menu={true}/>
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
