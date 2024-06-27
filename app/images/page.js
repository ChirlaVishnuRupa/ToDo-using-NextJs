import React from 'react'
import sample_image from "../../assets/sample-image.jpeg"
import Image from 'next/image';
const page = () => {
  return (
    <div>
      <h1> we will show images here</h1>
      <Image src={sample_image} alt="sample image" />
      <Image src={sample_image} alt="sample image" width={500} />
    </div>
  )
};

export default page
