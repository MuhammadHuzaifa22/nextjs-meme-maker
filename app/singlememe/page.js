"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const  SingleMeme= (searchParam) => {
    const { url, box_count, id } = searchParam.searchParams
    console.log(id);
    let [exampleImageURL,setExampleImageURL] = useState('');
    let [resultImageURL,setResultImageURL] = useState('');
    let [componentLoading,setComponentLoadng] = useState(true);
    let [imageGenereating,setImageRenerating] = useState(false);
    let [filledInputs,setFilledInputs] = useState([]);
    
    let inputValue1 = useRef();
 let inputValue2 = useRef();
 let inputValue3 = useRef();
 let inputValue4 = useRef();
 let inputValue5 = useRef();
 let inputValue6 = useRef();


    function handleComponentLoading(componentLoading){
        if(componentLoading){

            setTimeout(()=>{
                setComponentLoadng(false);
               },2000)
               
           }
    }
    handleComponentLoading(componentLoading);
        
    useEffect(()=>{
        
async function getExampleMeme(){

    if(box_count == 2){
        const Inputs = [
            "Hey there",
            "Hello World"
        ];
        filledInputs = Inputs
    }else if(box_count == 3){
        const Inputs = [
            "Hey there",
            "Hello World",
            "Hello Developer",
        ];
        filledInputs = Inputs
    }else if(box_count == 4){
        const Inputs = [
            "Hey there",
            "Hello World",
            "Hello Developer",
            "Hello Welcome",
        ];
        filledInputs = Inputs
    }else if(box_count == 5){
        const Inputs = [
            "Hey there",
            "Hello World",
            "Hello Developer",
            "Hello Welcome",
            "Hello Sir",
        ];
        filledInputs = Inputs
    }else if(box_count == 6){
        const Inputs = [
            "Hey there",
            "Hello World",
            "Hello Developer",
            "Hello Welcome",
            "Hello Sir",
            "Hello Mr",
        ];
        filledInputs = Inputs
    }
        
        
        
        
        
      const boxesParams = filledInputs.map((text, index) => `boxes[${index}][text]=${encodeURIComponent(text)}`).join('&');
    const exampleMemeFetch = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=huzaifafurqan28&password=huzaifa78&${boxesParams}`,{
        method:'POST'
    });
     const responseMemeData = await exampleMemeFetch.json();
     console.log(responseMemeData.data)
     setExampleImageURL(responseMemeData.data.url);
}

getExampleMeme();
    },[])




   async function generateMeme(){
    setImageRenerating(true);
        if(box_count == 2){
            const Inputs = [
                inputValue1.current.value,
                inputValue2.current.value
            ];
            filledInputs = Inputs
        }else if(box_count == 3){
            const Inputs = [
                inputValue1.current.value,
                inputValue2.current.value,
                inputValue3.current.value,
            ];
            filledInputs = Inputs
        }else if(box_count == 4){
            const Inputs = [
                inputValue1.current.value,
                inputValue2.current.value,
                inputValue3.current.value,
                inputValue4.current.value,
            ];
            filledInputs = Inputs
        }else if(box_count == 5){
            const Inputs = [
                inputValue1.current.value,
                inputValue2.current.value,
                inputValue3.current.value,
                inputValue4.current.value,
                inputValue5.current.value,
            ];
            filledInputs = Inputs
        }else if(box_count == 6){
            const Inputs = [
                inputValue1.current.value,
                inputValue2.current.value,
                inputValue3.current.value,
                inputValue4.current.value,
                inputValue5.current.value,
                inputValue6.current.value,
            ];
            filledInputs = Inputs
        }
            
        const boxesParams = filledInputs.map((text, index) => `boxes[${index}][text]=${encodeURIComponent(text)}`).join('&');
        const exampleMemeFetch = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=huzaifafurqan28&password=huzaifa78&${boxesParams}`,{
            method:'POST'
        });
         const responseMemeData = await exampleMemeFetch.json();
         console.log(responseMemeData.data)
         setResultImageURL(responseMemeData.data.url);
         if(box_count == 2){
             inputValue1.current.value = '';
             inputValue2.current.value = '';
         }else if(box_count == 3){
            inputValue1.current.value = '';
             inputValue2.current.value = '';
             inputValue3.current.value = '';
            }
            else if(box_count == 4){
                inputValue1.current.value = '';
                 inputValue2.current.value = '';
                 inputValue3.current.value = '';
                 inputValue4.current.value = '';
                }
                else if(box_count == 5){
                    inputValue1.current.value = '';
                     inputValue2.current.value = '';
                     inputValue3.current.value = '';
                     inputValue4.current.value = '';
                     inputValue5.current.value = '';
                    }else if(box_count == 6){
                        inputValue1.current.value = '';
                         inputValue2.current.value = '';
                         inputValue3.current.value = '';
                         inputValue4.current.value = '';
                         inputValue5.current.value = '';
                         inputValue6.current.value = '';
                        }
         setImageRenerating(false);
    }


  return (
       <div className='bg-slate-100 min-h-screen mt-[-20px] py-[50px]'>
       {componentLoading === false ? <div className='flex gap-5 justify-center mt-5 items-center border-[1px] rounded-md shadow-md py-5 bg-slate-200 w-fit mx-auto px-5'>

<div className='bg-slate-600 w-[300px] h-auto py-2 flex flex-col gap-1 items-center justify-center rounded-md shadow-[2px_2px_5px_black]'>
 <h1 className='bg-white text-slate-600 w-full text-center text-xl font-medium rounded-md'>Example Before <b>Text:</b></h1>
 <Image src={url} width={300} height={300} className='rounded-md' alt="example-image"/>
 </div>
 {exampleImageURL !== '' ? <div className='bg-slate-600  w-[300px] h-auto py-2 flex flex-col gap-1 items-center justify-center
  rounded-md shadow-[2px_2px_5px_black]'>
     <h1 className='bg-white text-slate-600 w-full text-center text-xl font-medium rounded-md'>Example After <b>Text:</b></h1>
     <Image src={exampleImageURL} width={300} height={300} alt='example-image' className='rounded-md' />
 </div> : null}
 
 </div> : <div className='flex justify-center items-center  text-4xl h-[500px]'>
    
 <span className="loading loading-bars loading-lg"></span> 
    </div>}

    <h1 className='text-center text-3xl'>Generate Your Own</h1>

    <div className='bg-slate-400 max-w-md mx-auto rounded-box'>
    {box_count == 2 ? <div className='flex flex-col gap-1'>
    <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text one" ref={inputValue1}/>  
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-two"  ref={inputValue2}/>
  {imageGenereating ? <button className='animate-pulse bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' disabled >Generating...</button> : <button className='bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' onClick={generateMeme}>Generate</button>}
  </div> : box_count == 3  ? <div className='flex flex-col gap-1'>
    <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text one" ref={inputValue1}/>  
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-two"  ref={inputValue2}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-three"  ref={inputValue3}/>
  {imageGenereating ? <button className='animate-pulse bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' disabled >Generating...</button> : <button className='bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' onClick={generateMeme}>Generate</button>}
  </div> : box_count == 4  ? <div className='flex flex-col gap-1'>
    <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text one" ref={inputValue1}/>  
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-two"  ref={inputValue2}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-three"  ref={inputValue3}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-four"  ref={inputValue4}/>
  {imageGenereating ? <button className='animate-pulse bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' disabled >Generating...</button> : <button className='bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' onClick={generateMeme}>Generate</button>}
  </div> : box_count == 5  ? <div className='flex flex-col gap-1'>
    <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text one" ref={inputValue1}/>  
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-two"  ref={inputValue2}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-three"  ref={inputValue3}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-four"  ref={inputValue4}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-five"  ref={inputValue5}/>
  {imageGenereating ? <button className='animate-pulse bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' disabled >Generating...</button> : <button className='bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' onClick={generateMeme}>Generate</button>}
  
  </div> : box_count == 6  ? <div className='flex flex-col gap-1'>
    <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text one" ref={inputValue1}/>  
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-two"  ref={inputValue2}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-three"  ref={inputValue3}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-four"  ref={inputValue4}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-five"  ref={inputValue5}/>
  <input type="text" className=" w-full input input-bordered flex items-center gap-2" placeholder="text-six"  ref={inputValue6}/>
  {imageGenereating ? <button className='animate-pulse bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' disabled >Generating...</button> : <button className='bg-slate-500 text-white p-1 border-[1px] rounded-md border-black' onClick={generateMeme}>Generate</button>}
  </div> : null}
    </div>
      

      {/* Result Image Section */}
     

 {resultImageURL !== '' ? <div className='bg-slate-600  w-[300px] h-auto py-2 flex flex-col gap-1 items-center justify-center mx-auto mt-5
  rounded-md shadow-[2px_2px_5px_black]'>
     <h1 className='bg-white text-slate-600 w-full text-center text-xl font-medium rounded-md'>Generated Image</h1>
     <Image src={resultImageURL} width={300} height={300} alt='example-image' className='rounded-md' />
 </div> : null}
 
 

    </div>
  )
}

export default SingleMeme