import { Button, Container, TextInput, Title } from "@mantine/core";
import { noop } from "lodash";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const initialState = { login: '', password: '' };

const Login = () => {
    const [loginState, setLoginState] = useState(initialState);

    const handleChange = useCallback(({ target: { name, value } }) => {
        setLoginState((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    const authHandler = () => noop;

    return (
        <Container size={550} my={40}>
            <Title
				sx={theme => ({
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					fontWeight: 900,
				})}>
				    Login
			</ Title>
            <div>
                <TextInput
				    mt={'md'}
				    value={loginState.login}
				    name='login'
				    onChange={(event) => handleChange(event)}
				    placeholder={'Enter your login'}
				    required
				    label={'Login'}
				    type='text'
			    />
                <TextInput
				    mt={'md'}
				    value={loginState.password}
				    name='password'
				    onChange={(event) => handleChange(event)}
				    placeholder={'Enter your password'}
				    required
				    label={'Password'}
				    type='password'
			    />
                <Button
				    onClick={authHandler}
				    fullWidth
				    mt={'md'}
                >
				    New Task
			    </Button>
            </div>
        </Container>
    )
}

export default Login;