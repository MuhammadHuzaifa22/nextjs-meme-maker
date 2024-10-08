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
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        
        {apiData && apiData.map((meme) => (
          <div key={meme.id} className="w-48 flex flex-col  items-center"> 
            <Image 
              src={meme.url} 
              alt={meme.name} 
              width={192} 
              height={192}
              className="border-[1px] border-black rounded-md shadow-sm shadow-gray hover:shadow-2xl object-cover"
            />
             <Link href={`/singlememe/:${meme.id} ${meme.box_count}`}>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Generate Meme
            </button>
          </Link>
          </div>
        ))}
      </div>
    </>
  );
  

  
}