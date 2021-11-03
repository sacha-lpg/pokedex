import React from "react";
import { useField, ErrorMessage } from "formik";
import {StyledLabel, StyledSelect, StyledErrorMessage } from './styled';

const Select = ({label, ...props}: any) = {
    const [field, meta] = useField(props);
}

return (
    <>
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
        <StyledSelect
            {...field}
            {...props}
            style={meta.touched && meta.error ? { borderColor: 'red'} : null}
        />
        <ErrorMessage component={StyledErrorMessage} name={props.id || props.name} />
    </>
);

};