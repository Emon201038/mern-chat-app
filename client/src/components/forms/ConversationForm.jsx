import { EmojiEmotions, Send, ThumbUp } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { socket } from "../../socket";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

import Lottie from "lottie-react";
import animationData from "../../animation/animation.json";
import { useSentMessageMutation } from "../../features/conversations/conversationsApi";

/* eslint-disable react/prop-types */
const ConversationForm = () => {
  // const [arrivalMessage, setArrivalMessage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { selectedConversation } = useSelector((state) => state.conversation);
  const { selectedFriend } = useSelector((state) => state.friend);
  const [sentMessage, { isLoading }] = useSentMessageMutation();

  const { palette } = useTheme();

  const handleSentMessage = async (e) => {
    e.preventDefault();

    socket?.emit("stopTyping", {
      senderId: user?._id,
      receiverId: selectedFriend?._id,
    });

    socket?.emit("sendMessage", {
      senderId: user?._id,
      receiverId: selectedFriend?._id,
      text: inputValue,
      conversationId: selectedConversation,
      createdAt: Date.now(),
    });

    setInputValue("");
    try {
      await sentMessage({
        conversationId: selectedConversation,
        receiverId: selectedFriend._id,
        sender: user?._id,
        text: inputValue,
        createdAt: Date.now(),
      });

      setMessage([
        ...message,
        {
          sender: user?._id,
          receiverId: selectedFriend?._id,
          text: inputValue,
          createdAt: Date.now(),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket?.on("typing", () => {
      setIsTyping(true);
    });

    socket?.on("stopTyping", () => {
      setIsTyping(false);
    });
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (!typing) {
      setTyping(true);
      socket?.emit("typing", {
        sender: user?._id,
        receiver: selectedFriend?._id,
      });
    }

    let lastTypingTime = Date.now();
    const timerLength = 3000;

    setTimeout(() => {
      const timeNow = Date.now();
      const timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerLength && typing) {
        socket?.emit("stopTyping", {
          sender: user?._id,
          receiver: selectedFriend?._id,
        });
        setTyping(false);
      }
    }, timerLength);
  };
  return (
    <form onSubmit={handleSentMessage} className="w-full h-[35px]">
      {isTyping && (
        <div className="w-[60px] h-[20px] absolute top-[-40px] left-9 bg-white">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            marginHeight={0}
            marginWidth={0}
          />
        </div>
      )}
      <Stack
        width="100%"
        height="100%"
        position="relative"
        direction="row"
        justifyContent="center"
        spacing={2}
      >
        <TextField
          required
          type="text"
          sx={{
            width: "93%",
            height: "35px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
          className=""
          onChange={handleChange}
          value={inputValue}
          InputProps={{
            sx: {
              width: "100%",
              height: "35px",
              borderRadius: "999px",
              bgcolor:
                palette.mode === "dark" ? "#3c3c3c " : "rgb(226,232,240)",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    width: "25px",
                    height: "25px",
                    color: "#1974d2",
                  }}
                >
                  <EmojiEmotions />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box width="7%">
          {inputValue?.length === 0 ? (
            <IconButton
              sx={{
                width: "30px",
                height: "30px",
                color: "#1974d2",
                fontSize: "25px",
              }}
            >
              <ThumbUp />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleSentMessage}
              disabled={isLoading}
              sx={{
                width: "30px",
                height: "30px",
                color: "#1974d2",
                fontSize: "25px",
              }}
            >
              <Send />
            </IconButton>
          )}
        </Box>
      </Stack>
    </form>
  );
};

export default ConversationForm;
