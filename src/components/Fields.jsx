import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, edit } from "../store/movieSlice";
import { styled } from "styled-components";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from "./Button";
import Form from "./PageForm";
import Input from "./Input";

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`

const DropZone = styled.div`
    border: 1px dashed white; 
    max-height: 372px;
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    border-radius: 10px;
    
    p {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }

    svg {
        width: 24px;
        height: 24px;
    }

    @media screen and (min-width: 768px) {
        max-height: unset;
        height: auto;
    }
`

const getBase64 = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error) 
    })
}

export default ({id = '', title = '', year = '', poster = '', ...props}) => {
    const [fieldTitle, setTitle] = useState(title);
    const [fieldYear, setYear] = useState(year);
    const [file, setFile] = useState(poster);
    const [submitDenied, setSubmitDenied] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDrop = useCallback((acceptedFiles) => {
        const image = getBase64(acceptedFiles[0]);
        image.then(value => setFile(() => value));
    }, []);
    const {getRootProps, getInputProps} = useDropzone({maxFiles: 1, onDrop});
    const navigateBack = () => navigate('/');

    const handleOnChangeTitle = (event) => {
        event.preventDefault();
        const title = event.target.value;
        setTitle(title);
    }
    
    const handleOnChangeYear = (event) => {
        event.preventDefault();
        const year = event.target.value;
        setYear(year);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (!file) {
            setSubmitDenied(true);
        } else {
            if ( id ) {            
                dispatch(edit({id, data: {title: fieldTitle, year: fieldYear, poster: file}}));
                navigateBack();
            }
            else {
                dispatch(add({title: fieldTitle, year: fieldYear, poster: file}));
                navigateBack();
            }
        }
    }

    return (
        <Form onSubmit={handleOnSubmit} {...props}>
            <Input className="title-area" required onChange={handleOnChangeTitle} placeholder="Title" value={title} />
            <Input className="year-area" required type="number" onChange={handleOnChangeYear} placeholder="Publishing year" value={year}/>
            <Buttons className="actions-area">
                <Button onClick={navigateBack} label={`Cancel`}/>
                <Button isPrimary={true} label={`Submit`}/>
            </Buttons>
            <DropZone className="image-area" {...getRootProps()}>
                <input {...getInputProps()} />
                {!file && <div><p><FileDownloadIcon/></p><p>Upload an image.</p></div> }
                {file && <img src={file}/>}
                {submitDenied && <p className="text-base" style={{color: '#EB5757'}}>An image is required.</p>}
            </DropZone>
        </Form>
    );
}