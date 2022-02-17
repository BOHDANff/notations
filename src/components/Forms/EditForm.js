import React from 'react';
import {MyForm} from "../UI/MyForm/MyForm";
import {MyInput} from "../UI/MyInput/MyInput";
import {MyFormButton} from "../UI/MyFormButton/MyFormButton";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {createItem} from "../../store/reducers/ListReducer";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";

function EditForm(props) {
    const schema = yup.object().shape({
        title: yup
            .string()
            .required("This is a required field"),
        body: yup
            .string()
            .required("This is a required field"),
    });
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const onSubmit = (notat) => {
        dispatch(createItem({...notat, id: Date.now()}))
        reset()
        props.setVisible(false)
    }
    const dispatch = useDispatch()
    let params = useParams()
    return (
        <>
            <h1>Edit this notation</h1>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register('title')}
                    id={'title'}
                    type={'text'}
                    label={'Label of notation'}
                    error={!!errors.title}
                    helperText={errors?.title?.message}
                    value={params.id}
                />
                <MyInput
                    {...register('body')}
                    id="body"
                    type="text"
                    label="Text of notation"
                    multiline
                    rows={4}
                    error={!!errors.body}
                    helperText={errors?.body?.message}
                />
                <MyFormButton style={{margin: "20px 0 20px"}}>Save editions</MyFormButton>
            </MyForm>
        </>
    );
}

export default EditForm;