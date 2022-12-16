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
    value: 'TRUE',
    label: 'TRUE'
  },
  {
    value: 'FALSE',
    label: 'FALSE'
  },
  {
    value: 'NOT SURE',
    label: 'NOT SURE'
  },
]

const decide = [
  {
    value: '',
    label: '',
  },
  {
    value: 'n',
    label: 'TRUE'
  },
  {
    value: 'y',
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
    if (name === 'NOT SURE')
      value = "";
    setInfo({ ...info, [name]: value });
  }

  const continueClick = () => {
    if (info?.g && info?.a && info?.vacc && info?.cough && info?.fever && info?.diabetes && info?.muscle_pain && info?.ftg) {
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
            {fields.map((field) => (
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
                {field.label === 'Vaccine' ? decide.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                )) 
                :
                decesion.map((option) => (
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
