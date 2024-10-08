'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useForm } from 'react-hook-form';

const Page = () => {
  const { id } = useParams();
  let memeId = decodeURIComponent(id);
  let [memeIdContainer, setMemeIdContainer] = useState(memeId);
  const [responseData, setResponseData] = useState(null);
  const [responseUserData, setResponseUserData] = useState(null);


  memeIdContainer = memeIdContainer.split('')
  let memeIdSplit = memeIdContainer[memeIdContainer.length - 1];
  console.log(memeIdSplit);


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  console.log("Original Meme ID:", memeId);

  useEffect(() => {
    const fetchMemeData = async () => {
      if (!memeId) {
        return;
      }



      const memeIdTrimmed = memeId.slice(1);
      console.log("Trimmed Meme ID:", memeIdTrimmed);
      const apiData = await fetch(`https://api.imgflip.com/caption_image?template_id=${memeIdTrimmed}&username=huzaifafurqan28&password=huzaifa78&text0=Hey there&text1=hello world`);
      const data = await apiData.json();
      console.log("Fetched Data:", data);
      if (data && data.data) {
        setResponseData(data.data);
        console.log(data.data)
      }
    };

    fetchMemeData();
  }, [memeId]);
  async function generateMeme(data) {
    if (!memeId) {
        console.error("Meme ID is missing.");
        return;
    }

    const memeIdTrimmed = memeId.slice(1,memeId.length-1);

    const topText = encodeURIComponent(data.topText);
const bottomText = encodeURIComponent(data.bottomText);
const bottomTextThird = encodeURIComponent(data.bottomTextThird);
    console.log(memeIdTrimmed)
    const fetchMeme = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${memeIdTrimmed}&username=mabdullah6600&password=asdfgfdsa123&text0=${topText}&text1=${bottomText}&text2=${bottomTextThird}`)
    ;

    const apiFetchedData = await fetchMeme.json();
    console.log(apiFetchedData);

    if (apiFetchedData.success) {
        setResponseUserData(apiFetchedData);
    } else {
        console.error('Error generating meme:', apiFetchedData.error_message);
    }
}





  return (
    <div>

      {responseData ? (
        <div className='flex gap-5 justify-center mt-5 items-center'>
          <div className='flex flex-col'>
            <h1 className='text-center mt-1 font-normal text-2xl bg-blue-400 text-white'>Example: </h1>
            <Image src={responseData.url} alt="Meme" width={250} height={250} className='border-[2px] rounded-md border-black' />
          </div>
          <form className="flex flex-col justify-center items-center gap-2 border-[1px] rounded-md border-black mt-5 p-2" onSubmit={handleSubmit(generateMeme)}>
            <h1 className="text-center mt-5 font-normal text-2xl">Generate Your Own</h1>

            <input
              placeholder="Enter first text."
              className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
              {...register('topText', { required: true })}
            />
            {errors.topText && <span className="text-red-500">This field is required.</span>}

            <input
              placeholder="Enter second text."
              className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
              {...register('bottomText', { required: true })}
            />
            {errors.bottomText && <span className="text-red-500">This field is required.</span>}

            {memeIdSplit == 3 ? <div className='flex flex-col gap-1 justify-center items-center'>
              <input
                placeholder="Enter third text."
                className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
                {...register('bottomTextThird', { required: true })}
              />
              {errors.bottomTextThird && <span className="text-red-500">This field is required.</span>}
            </div> : null}

            {memeIdSplit == 4 ? <div>
              <input
                placeholder="Enter third text."
                className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
                {...register('bottomTextThird', { required: true })}
              />
              {errors.bottomTextThird && <span className="text-red-500">This field is required.</span>}
              <div className='flex flex-col gap-1 justify-center items-center'>
                <input
                  placeholder="Enter Fourth text."
                  className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
                  {...register('bottomTextFourth', { required: true })}
                />
                {errors.bottomTextFourth && <span className="text-red-500">This field is required.</span>}
              </div>
            </div> : null}


            {memeIdSplit == 5 ? <div>
              <input
                placeholder="Enter third text."
                className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
                {...register('bottomTextThird', { required: true })}
              />
              {errors.bottomTextThird && <span className="text-red-500">This field is required.</span>}
              <div className='flex flex-col gap-1 justify-center items-center'>
                <input
                  placeholder="Enter Fourth text."
                  className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
                  {...register('bottomTextFourth', { required: true })}
                />
                {errors.bottomTextFourth && <span className="text-red-500">This field is required.</span>}
              </div>
              <div className='flex flex-col gap-1 justify-center items-center'>
                <input
                  placeholder="Enter fifth text."
                  className="text-xl font-semibold border-[1px] rounded-md mt-2 p-[5px] border-black text-black"
                  {...register('bottomTextFifth', { required: true })}
                />
                {errors.bottomTextFifth && <span className="text-red-500">This field is required.</span>}
              </div>
            </div> : null}

            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              Generate
            </button>
          </form>

          {responseUserData ? (
            <div className='flex flex-col'>
              <h1 className='text-center'>Result:</h1>
              <Image src={responseUserData.data.url} width={300} height={300} alt='result-image' />
            </div>
          ) : null}

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Page;
