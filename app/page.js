import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const Data = await fetch('https://api.imgflip.com/get_memes');
  const dataResponse = await Data.json();
  
  const apiData = dataResponse.data.memes;




  console.log(apiData);

  return (
    <>
      <h1 className="text-center mt-5 text-3xl font-medium">Meme Maker</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 w-full max-w-7xl">
        
        {apiData && apiData.map((meme) => (
          <div key={meme.id} className="relative w-full h-48 sm:h-64"> 
            <Image 
              src={meme.url} 
              alt={meme.name} 
              
              layout="fill"
              objectFit="cover"
              
              className="border-[1px] border-black rounded-md shadow-sm shadow-gray hover:shadow-2xl object-cover"
              id="mouseOver"
            />
                        <Link key={meme.id} href={
              {
                pathname: "/singlememe",
                query: {
                  url: meme.url,
                  id: meme.id,
                  box_count: meme.box_count
                }
              }
            }>

            <button className="mt-[210px] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 absolute ml-[140px]">
              Generate Meme
            </button>
          </Link>
          </div>
        ))}
      </div>
    </>
  );
  

  
}