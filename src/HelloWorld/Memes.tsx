import { AbsoluteFill, Img, useCurrentFrame,
	useVideoConfig, } from 'remotion';
import {Meme} from './Meme';

export const Memes: React.FC<{  }> = ({  }) => {
  const frame = useCurrentFrame();
  let number = Math.floor(frame / 60);
  return (
    <AbsoluteFill>
      <Meme MemeNo={number}/>
    </AbsoluteFill>
  );
};
