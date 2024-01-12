import { AbsoluteFill, Img, useCurrentFrame,
	useVideoConfig, } from 'remotion';
import {Meme} from './Meme';

export const Memes: React.FC<{  }> = ({  }) => {

  return (
    <AbsoluteFill>
      <Meme MemeNo={1}/>
    </AbsoluteFill>
  );
};
