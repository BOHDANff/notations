import React from "react";
import Button from "@material-ui/core/Button";

export const FormButton = ({ children, ...props }) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}
            style={{margin: "20px 0 20px"}}
        >
            {children}
        </Button>
    );
};