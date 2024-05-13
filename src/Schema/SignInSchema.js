import * as yup from 'yup'

const SignInSchema = yup.object().shape({
    username:yup.string().required("Username is required").min(5,"Username is at least 5 characters long"),
    password:yup.string().required("Password is required").min(5,'Password is at least 5 characters')


})


export default SignInSchema