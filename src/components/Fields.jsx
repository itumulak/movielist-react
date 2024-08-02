import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from "./Button";
import Form from "./Form";
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
`

const getBase64 = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error) 
    })
}

export default ({title = '', year = '', poster = '', ...props}) => {
    const [file, setFile] = useState(poster);
    const onDrop = useCallback((acceptedFiles) => {
        const image = getBase64(acceptedFiles[0]);
        image.then(value => setFile(() => value));
    }, []);
    const {getRootProps, getInputProps} = useDropzone({maxFiles: 1, onDrop});
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/');
    }

    return (
        <Form {...props}>
            <Input placeholder="Title" value={title} />
            <Input placeholder="Publishing year" value={year}/>
            <DropZone {...getRootProps()}>
                <input {...getInputProps()} />
                {!file && <div><p><FileDownloadIcon/></p><p>Upload an image</p></div> }
                {file && <img src={file}/>}
            </DropZone>
            <Buttons>
                <Button onClick={navigateBack} label={`Cancel`}/>
                <Button isPrimary={true} label={`Submit`}/>
            </Buttons>
        </Form>
    );
}