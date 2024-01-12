import { AbsoluteFill, Img, useCurrentFrame,
	useVideoConfig, } from 'remotion';
import { useEffect, useState } from 'react';


// Define a function to fetch meme data from the API
async function fetchMemeData() {
  const response = await fetch('https://meme-api.com/gimme/5');
  const data = await response.json();
  console.log("data:", data);
  return data;
}

export const Meme: React.FC<{ MemeNo: number }> = ({ MemeNo }) => {
  
  const [memeData, setMemeData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMemeData();
      setMemeData(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  if (!memeData) {
    // Data is still being fetched
    return null;
  }

  return (
    <AbsoluteFill>
      <Img src={memeData.memes[MemeNo].preview[2]} style={{ objectFit: 'cover'}} placeholder="auto" />
    </AbsoluteFill>
  );
};
