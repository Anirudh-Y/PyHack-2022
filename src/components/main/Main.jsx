import React from "react";
import { useNavigate } from "react-router-dom";
import { styled, Box, TextField, Button,Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../contextAPI/context";
import { useEffect } from "react";

const Component = styled(Box)`
  height: 100vh;
  background: url(https://www.onlygfx.com/wp-content/uploads/2021/04/white-triangle-pattern-seamless-background-6.jpg)
    no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Contain = styled(Box)`
  background-color: #EFEFEF;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 500px;
  padding: 50px;
`;

const ContinueButton = styled(Button)`
  background-color: black;
  color: #fff;
  width: 200px;
  margin-top: 20px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const sex = [
  {
    value: 'Choose',
    label: 'Choose'
  },
  {
    value: "Male",
    label: "M",
  },
  {
    value: "Female",
    label: "F",
  },
];

const Main = ({setCheck}) => {

    const [info, setInfo] = useState({});

    const {data,setData} = useContext(DataContext);

    useEffect(()=>{
      setCheck(false);
    },[]);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setInfo({...info, [e.target.name]:e.target.value});
  }

  const continueClick = () => {
    if(info?.sex && info?.age){
        setData({...data,...info});
        setCheck(true);
        navigate("/audio-upload");
    }
    else{
        alert("Enter all the required details please")
    }
  };

  return (
    <Component>
      <Contain>
    <Typography variant="h6" style={{paddingBottom:'10px'}}>Fill in the information below</Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-required"
              label="Name"
              name="name"
              placeholder="eg. Adrian"
              onChange={onValueChange}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Age"
              name="age"
              type="number"
              placeholder="eg. 23"
              onChange={onValueChange}
            />
           <TextField
           required
          id="outlined-select-currency-native"
          select
          label="Sex"
          name="sex"
          defaultValue=""
          placeholder="eg. M"
          SelectProps={{
            native: true,
          }}
          onChange={onValueChange}
        >
          {sex.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            <TextField
              required
              id="outlined-required"
              label="anonymous"
              placeholder="eg. anonymous"
              onChange={onValueChange}
            />
            <TextField
              required
              id="outlined-required"
              label="anonymous"
              placeholder="eg. anonymous"
              onChange={onValueChange}
            />
            <TextField
              required
              id="outlined-required"
              label="anonymous"
              placeholder="eg. anonymous"
              onChange={onValueChange}
            />
            <TextField
              required
              id="outlined-required"
              label="anonymous"
              placeholder="eg. anonymous"
              onChange={onValueChange}
            />
            <TextField
              required
              id="outlined-required"
              label="anonymous"
              placeholder="eg. anonymous"
              onChange={onValueChange}
            />
          </div>
        </Box>
        <ContinueButton variant="contained" onClick={continueClick}>
          Click to continue
        </ContinueButton>
      </Contain>
    </Component>
  );
};

export default Main;
