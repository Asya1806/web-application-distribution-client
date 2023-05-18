import React from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from '../hooks/useForm'
import { ENDPOINTS, createAPIEndpoint } from '../api'
// import { createAPIEndpoint, ENDPOINTS } from '../api'
// import useStateContext from '../hooks/useStateContext'
// import { useNavigate } from 'react-router'

const getFreshModel = () => ({
    login: '',
    password: ''
})

export default function Login() {

    // const { context, setContext, resetContext } = useStateContext();
    // const navigate = useNavigate()

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    // useEffect(() => {
    //     axios.get('https://localhost:7283/api/Account').then((response: AxiosResponse<any>)=>{
    //         console.log(response.data)
    //     })
    //     // resetContext()
    // }, [])


    const login = e => {
        e.preventDefault();
        console.log(values);
        if (validate())
            createAPIEndpoint(ENDPOINTS.account)
                .post(values)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    }

    const validate = () => {
        let temp = {}
        temp.password = (/^[A-Za-z]\w{7,14}$/).test(values.password) ? "" : "Password is not valid."
        temp.login = values.login != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Абитуриент
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="on" onSubmit={login}>
                            <TextField
                                label="Login"
                                name="login"
                                value={values.login}
                                color="success"
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.login && { error: true, helperText: errors.login })} />
                            <TextField
                                label="Password"
                                name="password"
                                value={values.password}
                                color="success"
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.password && { error: true, helperText: errors.password })} />
                            <Button
                                style={{marginTop: '20px', width: '90%', height: '50px' }}type="submit"
                                variant="contained"
                                class="btn btn-success"
                                size="large"
                                >Старт</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>


    )
}