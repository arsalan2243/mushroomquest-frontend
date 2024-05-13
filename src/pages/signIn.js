import React from 'react';

import SingIn from "../components/SignIn";

const SignInPage = (props) => {

    return (

        <>
            <SingIn history={props.history}/>
        </>
    )
}

export default SignInPage

