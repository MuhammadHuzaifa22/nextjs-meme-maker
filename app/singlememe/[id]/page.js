"use client";
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
    const params = useParams(); 
  const id = decodeURIComponent(params.id);
    console.log(id);

    useEffect(()=>{
      async  function getDataFromApi(){
         const apiData = await fetch('https://api.imgflip.com/caption_image?template_id=181913649&username=huzaifafurqan28&password=huzaifa78&text0=Hey there&text1=hello world');
         const responseData = await apiData.json();
         console.log(responseData);
        }
        getDataFromApi();


    },[id]);
  
  return (
    <div>
      <h1>This is a single meme page</h1>
      <p>Selected Meme ID: {id}</p>
    </div>
  );
}

export default Page;