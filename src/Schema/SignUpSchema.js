import * as yup from 'yup';

const SignUpSchema = yup.object().shape({

    username:yup.string().required("Username is required").min(5,"Username must be at least 5 characters long"),
    email:yup.string().email().required("Email is required"),
    password:yup.string().required("Password is required").min(5,"Password must be at least 5 characters long"),

})

export default SignUpSchema