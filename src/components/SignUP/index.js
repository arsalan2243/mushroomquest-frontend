import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {BASE_URL} from "../../helpers/axiosWithAuth"
import SignUpSchema from '../../Schema/SignUpSchema'
import * as yup from 'yup'
import MushroomQuest from '../../mushromPictures/MushroomQuest.png';

import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Errors,
    ErrorsP
} from './SignUpElements'


const SingUp = (props) => {
    const {push} = props.history
    const [disabled, setDisabled] = useState(true)

    const[post, setPost] = useState()

    const [inputs, setInputs] = useState({
        username: '',
        email: "",
        password: "",

    })

    const [errors, setErrors] = useState({
        username: '',
        email: "",
        password: "",

    })


    const validation = (name, value) => {
        yup.reach(SignUpSchema,name).validate(value).then(valid => {
            setErrors({...errors,[name]:''})
        }).catch(error => {
            setErrors({...errors,[name]:error.errors[0]})
        })
    }

    const change = (event) => {
        event.persist()
        const {name, value, type, checked} = event.target
        const newValue = type === 'checkbox' ? checked : value
        validation(name,newValue)
        setInputs({...inputs, [name]: newValue})
    }

    const submit = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/auth/register`,inputs).then(response => {
            setPost("account has been created")
            push('/signin') 
        }).catch(err => {
            setPost("An error occurred we are working to solve the issue")
        })
        setInputs({username: '', email: "", password: ""})

    }

    useEffect(()=> {
        SignUpSchema.isValid(inputs).then(valid => {

            setDisabled(!valid)

        })
    },[inputs])
    return (
        <>
            <Container>
                <FormWrap>
                <Icon to={'/'}>
                <img src={MushroomQuest} alt="Mushroom" />
            </Icon>                  
              <FormContent>
                        <Form onSubmit={submit}>
                            <FormH1>Create Account</FormH1>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <FormInput value={inputs.username} onChange={change} type="text" name="username" id={'name'}
                                       placeholder="Enter your username"/>
                            {errors.username.length > 0 ? <Errors>{errors.username}</Errors>:null}

                            <FormLabel htmlFor="email">Email</FormLabel>

                            <FormInput value={inputs.email} id="email" onChange={change} type="email" name="email"
                                       placeholder="Enter your Email"/>

                            {errors.email.length > 0 ? <Errors>{errors.email}</Errors>:null}

                            <FormLabel htmlFor="password">Password</FormLabel>

                            <FormInput value={inputs.password} id="password" onChange={change} type="password"
                                       name="password" placeholder={'Enter Password'}/>
                            {errors.password.length > 0 ? <Errors>{errors.password}</Errors>:null}

                            <FormButton disabled={disabled} type="submit">Continue</FormButton>

                            <ErrorsP>{post}</ErrorsP>

                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SingUp