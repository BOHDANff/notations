import React from "react";
import Button from "@material-ui/core/Button";
import cl from "./MyFormButton.module.css"

export const MyFormButton = ({ children, ...props }) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={cl.formBtn}
            {...props}
        >
            {children}
        </Button>
    );
};