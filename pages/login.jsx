import { Button, Container, TextInput, Title } from "@mantine/core";
import { noop } from "lodash";
import { useRouter } from "next/router";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ROOT_API_URL, ROOT_URL } from "../src/constants";
import { loginUser, registerUser } from "../src/slices/userSlice";

const initialState = { login: '', password: '' };
const initialStateRegUser = { login: '', password: '', email: '', number: '' };

const Login = () => {
    const [loginState, setLoginState] = useState(initialState);
    const [regState, setRegState] = useState(initialStateRegUser);
	const [isLoginPage, setIsloginPage] = useState(false);

    const handleChange = useCallback(({ target: { name, value } }) => {
        setLoginState((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    const handleChangeReg = useCallback(({ target: { name, value } }) => {
        setRegState((prevState) => ({ ...prevState, [name]: value }));
    }, []);

	const dispatch = useDispatch();
	const router = useRouter();
    const authHandler = () => {
		// const onSuccess = router.push('http://localhost:4000/');
		const onSuccess = router.push(ROOT_URL);
		if (isLoginPage) return dispatch(loginUser({ ...loginState, onSuccess  }));
		dispatch(registerUser({ ...loginState, onSuccess  }));
	};

    return (
        <Container size={550} my={40}>
			<Title
				sx={theme => ({
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					fontWeight: 900,
				})}>
					<div className="login-page">
						{isLoginPage ? 'Вход' : 'Регистрация'}
						<div onClick={() => setIsloginPage(!isLoginPage)} style={{ cursor: 'pointer' }}>{!isLoginPage ? 'Войти?' : 'Зарегистрировать?'}</div>
					</div>
			</Title>
            {isLoginPage ? (
				<>
					<div>
						<TextInput
							mt={'md'}
							value={loginState.login}
							name='login'
							onChange={(event) => handleChange(event)}
							placeholder={'Введите ваш email'}
							required
							label={'Логин'}
							type='text' />
						<TextInput
							mt={'md'}
							value={loginState.password}
							name='password'
							onChange={(event) => handleChange(event)}
							placeholder={'Введите ваш пароль'}
							required
							label={'Пароль'}
							type='password' />
						<Button
							onClick={authHandler}
							fullWidth
							mt={'md'}
						>
							Войти
						</Button>
					</div>
				</>) : (
				<>
					<div>
						<TextInput
							mt={'md'}
							value={regState.login}
							name='login'
							onChange={(event) => handleChangeReg(event)}
							placeholder={'Введите ваш email'}
							required
							label={'Логин'}
							type='text'
						/>
						<TextInput
							mt={'md'}
							value={regState.number}
							name='number'
							onChange={(event) => handleChangeReg(event)}
							placeholder={'Введите ваш номер телефона'}
							required
							label={'Номер телефона'}
							type='text' 
						/>
						<TextInput
							mt={'md'}
							value={regState.email}
							name='email'
							onChange={(event) => handleChangeReg(event)}
							placeholder={'Введите ваш адресс электронной почты'}
							required
							label={'Адресс электронной почты'}
							type='text'
						/>
						<TextInput
							mt={'md'}
							value={regState.password}
							name='password'
							onChange={(event) => handleChangeReg(event)}
							placeholder={'Введите ваш пароль'}
							required
							label={'Пароль'}
							type='password' 
						/>
						<Button
							onClick={authHandler}
							fullWidth
							mt={'md'}
						>
							Регистрация
						</Button>
					</div>
				</>
			)}
        </Container>
    )
}

export default Login;