import React from "react";
import { useContext, useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { DataContext } from "../contextAPI/context";
import "./Audio.css";

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
  background-color: #efefef;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 500px;
  padding: 50px;
`;

const Typo = styled(Typography)`
  flex-grow: 1;
  margin: 10px 0;
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

const Audio = () => {
  const { data } = useContext(DataContext);

  const [selectedFile, setSelectedFile] = useState({});
  const [result, setResult] = useState(false);

  const onFileChange = (e) => {
    setSelectedFile({ ...selectedFile, [e.target.name]: e.target.files[0] });
    console.log(selectedFile);
  };

  const onUpload = () => {
    setResult(true);
  }

  return (
    <Component>
      <Contain>
        {!result
          ?
          <>
            <Typography style={{ marginBottom: "20px" }} variant="h6">
              Upload your audio file here
            </Typography>
            <div className="file_upload">
              <Typo variant="p">COUGH</Typo>
              <input type="file" name="cough" onChange={onFileChange} />
            </div>
            <div className="file_upload">
              <Typo variant="p">BREATHING</Typo>
              <input type="file" name="breathing" onChange={onFileChange} />
            </div>
            <div className="file_upload">
              <Typo variant="p">COUNTING</Typo>
              <input type="file" name="counting" onChange={onFileChange} />
            </div>
            <ContinueButton variant="contained" onClick={onUpload}>Upload</ContinueButton>
          </>
          :
          <>
            <Typography variant="h6">Click below to check result {data.sex === 'F' ? data?.name && `Ms\Mrs ${data.name}` : data?.name && `Mr ${data.name}`}</Typography>
            <ContinueButton variant="contained">Result</ContinueButton>
          </>
        }

      </Contain>
    </Component>
  );
};

export default Audio;
