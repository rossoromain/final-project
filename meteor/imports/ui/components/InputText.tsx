import React from "react";
import TextField from "@mui/material/TextField/TextField";

interface Props {
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    className?: string;
}

export const InputText = ({ disabled = false, fullWidth = false, label = "", className = ""}: Props) => {
    return (
        <TextField id="input-text" fullWidth={fullWidth} label={label} className={className} disabled={disabled} />
    )
}

export default InputText;