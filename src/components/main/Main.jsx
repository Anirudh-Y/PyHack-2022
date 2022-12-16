import React from "react";
import { useNavigate } from "react-router-dom";
import { styled, Box, TextField, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../contextAPI/context";
import { useEffect } from "react";
import { fields } from "../constants/constant";

const Component = styled(Box)`
  min-height: 100vh;
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
  max-width: 1000px;
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

const TableBox = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
});

const Text = styled(TextField)`
  width : 300px;
  margin: 10px;
  flex-grow: 1;
  text-align:center;
`;

const sex = [
  {
    value: '',
    label: ''
  },
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const decesion = [
  {
    value: '',
    label: '',
  },
  {
    value: 'YES',
    label: 'TRUE'
  },
  {
    value: 'NO',
    label: 'FALSE'
  },
  {
    value: 'NOT SURE',
    label: 'NOT SURE'
  },
]

const Main = ({ setCheck }) => {

  const [info, setInfo] = useState({});

  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    setCheck(false);
  }, []);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if(name === 'NOT SURE')
      value= "";
    setInfo({ ...info, [name]: value });
  }

  const continueClick = () => {
    console.log(info);
    if (info?.g && info?.a && info?.l_c && info?.l_l) {
      setData({ ...data, ...info });
      setCheck(true);
      navigate("/audio-upload");
    }
    else {
      alert("Enter all the required details please")
    }
  };

  return (
    <Component>
      <Contain>
        <Typography variant="h6" style={{ paddingBottom: '10px' }}>Fill in the information below</Typography>

        <Box
          component="form"
          sx={{
            "& .MuiText-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TableBox>
            <Text
              id="outlined-required"
              label="Name"
              name="name"
              placeholder="eg. Adrian"
              onChange={onValueChange}
            />
            <Text
              required
              id="outlined-password-input"
              label="Age"
              name="a"
              type="number"
              placeholder="eg. 23"
              onChange={onValueChange}
            />
            <Text
              required
              id="outlined-select-currency-native"
              select
              label="Sex"
              name="g"
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
            </Text>
            <Text
              required
              id="outlined-password-input"
              label="Covid Status"
              name="covid_status"
              placeholder="eg. healthy/not healthy"
              onChange={onValueChange}
            />
            <Text
              required
              id="outlined-password-input"
              label="City"
              name="l_l"
              placeholder="eg. Kharagpur"
              onChange={onValueChange}
            />
            <Text
              required
              id="outlined-password-input"
              label="State/Province"
              name="l_s"
              placeholder="eg. healthy/not healthy"
              onChange={onValueChange}
            />
            <Text
              required
              id="outlined-password-input"
              label="Country"
              name="l_c"
              placeholder="eg. India"
              onChange={onValueChange}
            />
            {fields.map((field)=>(
              <Text
              required
              id="outlined-select-currency-native"
              select
              label={field.label}
              name={field.name}
              SelectProps={{
                native: true,
              }}
              onChange={onValueChange}
            >
              {decesion.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Text>
            ))}
            
          </TableBox>
        </Box>
        <ContinueButton variant="contained" onClick={continueClick}>
          Click to continue
        </ContinueButton>
      </Contain>
    </Component>
  );
};

export default Main;
