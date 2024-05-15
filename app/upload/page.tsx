"use client"

import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string
}

const PageUpload = () => {
    
    const [publicId, setPublicId] = useState('');

  return (
    <>

        {publicId && <CldImage src={publicId} width={150} height={200} alt="" />}
        <CldUploadWidget uploadPreset="wr5hv7fi"
        onUpload={ (result, widget)=> {
            console.log("resule", result, "widget", widget)
            const info = result.info as CloudinaryResult;
            if(result.event !=='success')
                return;
            else {
                setPublicId(info.public_id);
            }
        } }
        >
        {({ open }) => {
            return (
            <button className="btn btn-primary" onClick={() => open()}>
                Upload an Image
            </button>
            );
        }}
        </CldUploadWidget>
    </>
    
  )
}

export default PageUpload