import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import Center from "./Center";
// import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../redux/api/user";
import Cookies from "js-cookie";

export default function Login(props) {
  const navigate = useNavigate();
  const [_login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginError, setIsLoginError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isUsernameValid = () => {
    return _login.length !== 0;
  };

  const isPasswordValid = () => {
    return /^[A-Za-z]\w{7,14}$/.test(password);
  };

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Center>
      <Card sx={{ width: 400 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ my: 3 }}>
            Абитуриент
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
            }}
          >
            <form noValidate autoComplete="on" onSubmit={handleSubmit}>
              <TextField
                label="Логин"
                name="login"
                value={_login}
                color="success"
                placeholder="Логин"
                // pattern="^[A-Za-z]\w{7,14}$"
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
                {...(isLoginError
                  ? { error: true, helperText: "Неверный логин" }
                  : null)}
                variant="outlined"
              />

              <FormControl
                sx={{ m: 1, width: "90%" }}
                variant="outlined"
                color="success"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                {...(isPasswordError ? { error: true } : null)}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Пароль
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Пароль"
                  value={password}
                  placeholder="Пароль"
                />
                {isPasswordError ? (
                  <FormHelperText> Неверный пароль</FormHelperText>
                ) : null}
              </FormControl>

              <Button
                style={{ marginTop: "20px", width: "90%", height: "50px" }}
                type="submit"
                variant="contained"
                onClick={(e) => {
                  setIsLoginError(!isUsernameValid());
                  setIsPasswordError(!isPasswordValid());

                  if (!isUsernameValid() || !isPasswordValid()) {
                    return;
                  }

                  e.preventDefault();

                  const fetchData = async () => {
                    return await dispatch(
                      login({ login: _login, password: password })
                    );
                  };
                  fetchData().then((data) => {
                    Cookies.set("access-token", data.payload);
                    navigate("/All");
                  });
                }}
                class="btn btn-success"
                size="large"
              >
                Старт
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}
