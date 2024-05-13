import React,{useState,useEffect} from 'react';
import SignInSchema from '../../Schema/SignInSchema'
import * as yup from 'yup';
import axios from "axios";
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
    Text,
    FormButton,Errors,ErrorsP
} from './SignInElements'
import { BASE_URL } from '../../helpers/axiosWithAuth';

const SingIn = (props) => {
    const {push} = props.history
    const[post, setPost] = useState()
    const [inputs, setInputs] = useState({

        username:"",
        password:""

    })
    const [errors,setErrors] = useState({
        username:"",
        password:""
    })

    const [disabled,setDisabled] = useState(true)

const validation=(name,value) => {
        yup.reach(SignInSchema,name).validate(value).then(vaid => {
           setErrors({...errors,[name]:''})
        }).catch(err => {
            setErrors({...errors,[name]:err.errors[0]
            })
            console.log(errors)
        })
    }
const change =( event) => {
    const {name,value} = event.target
    setInputs({...inputs,[name]:value})
    validation(name,value)


}

const submit = (event) => {
  event.preventDefault()
    axios.post(`${BASE_URL}/auth/login`,inputs).then(response => {
        setPost("account has been created")
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', inputs.username )
        push('/sliders')
    }).catch(err => {
        setPost("something went wrong please try again")
    })
    setInputs({ username:"", password:""})
}

    useEffect(()=>{
        SignInSchema.isValid(inputs).then(vaid => {
            setDisabled(!vaid)
        })
    },[inputs])


    return (

            <Container>
                <FormWrap>
                <Icon to={'/'}>
                <img src={MushroomQuest} alt="Mushroom" />
            </Icon>  
                    <FormContent>
                        <Form onSubmit={submit}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="username" >Username</FormLabel>
                            <FormInput id={'username'} type="username" name="username" placeholder="Enter your username" value={inputs.username} onChange={change}/>
                            {errors.username.length > 0 ? <Errors>{errors.username}</Errors>:null}

                            <FormLabel htmlFor="password" >Password</FormLabel>
                            <FormInput id={'password'} type="password" name="password" placeholder="Enter your password" value={inputs.password} onChange={change}/>

                            {errors.password.length > 0 ? <Errors>{errors.password}</Errors>:null}

                            <FormButton disabled={disabled} type="submit">Continue</FormButton>
                            <ErrorsP>{post}</ErrorsP>
                            <Text onClick={() => push('/forgot') }><h1>Forgot password?</h1></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

    )
}

export default SingIn