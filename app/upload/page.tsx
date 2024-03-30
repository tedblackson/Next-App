'use client'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import React, { useState } from 'react'


interface cloudinaryResult{
    public_id: string;
}

const UploadPage = () => {

    const [publicId , setPublicId] = useState('');
  return (
    <>
    {publicId && <CldImage src={publicId} width={270} height={180} alt='an image'/>}

    <CldUploadWidget uploadPreset='tqcq7k0w' onUpload ={ (result, option) => {
        console.log(result);
        const info = result.info as cloudinaryResult;
        
        setPublicId(info.public_id);
    } }
    >
        {
            ({open}) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>
        }
    </CldUploadWidget>
    </>
  )
}

export default UploadPage
