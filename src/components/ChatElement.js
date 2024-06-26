import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge";
import { SelectConversation } from "../redux/slices/app";
import { useDispatch } from "react-redux";



  
const ChatElement = ({id,name,image,msg,time,unread,online}) => {const theme=useTheme();
 const dispatch = useDispatch();

    return (
      <Box
      onClick={()=>{dispatch(SelectConversation({room_id: id}))}}
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: theme.palette.mode==="light"?"#fff":theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            {online ?
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={faker.image.avatar()} />
          </StyledBadge>:<Avatar src={faker.image.avatar()} />}
          <Stack spacing={0.3}>
            <Typography variant="subtitle">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
          </Stack>
          <Stack spacing={2} alignItems={"center"}>
  <Typography sx={{fontWeight:600}} variant="caption">
    9:36
  </Typography>
  <Badge color="primary"badgeContent={2}></Badge>
          </Stack>
          
        </Stack>
      </Box>
    );
  };

  export default ChatElement;