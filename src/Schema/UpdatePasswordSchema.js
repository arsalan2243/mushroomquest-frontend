import * as yup from 'yup';

const UpdatePasswordSchema = yup.object().shape({

    email:yup.string().email().required("Email is required"),
    password:yup.string().required("Password is required").min(5,"Password must be at least 5 characters long"),

})

export default UpdatePasswordSchema