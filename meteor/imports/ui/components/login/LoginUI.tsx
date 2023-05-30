import React from "react";

import Grid from "@mui/material/Grid/Grid";
import LoginForm from "./LoginForm";

export const LoginUI = () => {

    return (
        <div className="login-container">
            <Grid container justifyContent="center" alignItems="center" className="absolute-vertical-center">
                <Grid item xs={3} className="login-box">
                    <LoginForm/>
                </Grid>
            </Grid>
        </div>
    );

}

export default LoginUI;