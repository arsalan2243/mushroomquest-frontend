import React,{useState,useEffect} from 'react';
import UpdatePasswordSchema from '../../Schema/UpdatePasswordSchema'
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
    FormButton,Errors,ErrorsP
} from '../SignIn/SignInElements'
import { BASE_URL } from '../../helpers/axiosWithAuth';

const ForgotPassword = (props) => {
    const {push} = props.history
    const[post, setPost] = useState()
    const [inputs, setInputs] = useState({

        email:"",
        password:""

    })
    const [errors,setErrors] = useState({
        email:"",
        password:""
    })

    const [disabled,setDisabled] = useState(true)

const validation=(name,value) => {
        yup.reach(UpdatePasswordSchema,name).validate(value).then(vaid => {
           setErrors({...errors,[name]:''})
        }).catch(err => {
            setErrors({...errors,[name]:err.errors[0]
            })
        })
    }
const change =( event) => {
    const {name,value} = event.target
    setInputs({...inputs,[name]:value})
    validation(name,value)


}

const submit = (event) => {
  event.preventDefault()
    axios.put(`${BASE_URL}/auth/update`,inputs).then(response => {
        setPost("account has been updated")
        push('/signin')
    }).catch(err => {
        setPost("something went wrong please try again")
    })
    setInputs({ email:"", password:""})
}

    useEffect(()=>{
        UpdatePasswordSchema.isValid(inputs).then(vaid => {
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
                            <FormH1>Forgot Password</FormH1>
                            <FormLabel htmlFor="email" >Email</FormLabel>
                            <FormInput id={'email'} type="email" name="email" placeholder="Enter your email" value={inputs.email} onChange={change}/>
                            {errors.email.length > 0 ? <Errors>{errors.email}</Errors>:null}

                            <FormLabel htmlFor="password" >New New Password</FormLabel>
                            <FormInput id={'password'} type="password" name="password" placeholder="Enter your new password" value={inputs.password} onChange={change}/>

                            {errors.password.length > 0 ? <Errors>{errors.password}</Errors>:null}

                            <FormButton disabled={disabled} type="submit">Continue</FormButton>
                            <ErrorsP>{post}</ErrorsP>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

    )
}

export default ForgotPassword