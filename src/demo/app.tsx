import { FC } from 'react';
import * as ReactDOM from 'react-dom';
import NFTPreview from '..';

const App: FC<any> = () => {
  return (
    <NFTPreview
      url="https://openseauserdata.com/files/125b5e5be3f53da366815c340f9ddb3b.wav"
      cover={'https://ipfs.io/ipfs/bafybeiaxysgazrn5c42zk3hwgn5c2cumds5alhwph2wdexgzsnzzgrfr5a/5595.png'}
      type="video"
      onPlay={() => {
        console.log(1);
      }}
    ></NFTPreview>
  );
};

ReactDOM.render(<App></App>, document.getElementById('root') as any);
