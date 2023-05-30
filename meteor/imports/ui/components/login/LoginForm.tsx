import React from 'react';
import InputText from '../InputText';
import { Grid } from '@mui/material';

export const LoginForm = () => {
    return (
        <Grid container flexDirection="column" alignItems={"center"} justifyContent={"center"} gap={2}>
            <Grid item xs={9}>
                <InputText label={"E-mail"} fullWidth={true}/>
            </Grid>
            <Grid item xs={9}>
                <InputText label={"Username"} fullWidth={true}/>
            </Grid>
            <Grid item xs={9}>
                <InputText label={"Password"} fullWidth={true}/>
            </Grid>
            <Grid item xs={9}>
                <InputText label={"Confirm password"} fullWidth={true}/>
            </Grid>
        </Grid>
    )
}
export default LoginForm;