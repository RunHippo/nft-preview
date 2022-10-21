import { render, unmountComponentAtNode } from 'react-dom';
import MediaPreviewer from '../src/index';
import { act } from 'react-dom/test-utils';

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  Object.defineProperty(global.window.HTMLMediaElement.prototype, 'play', {
    configurable: true,
    // Define the property getter
    get() {
      return () => {};
    },
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  (container as any) = null;
});

describe('src/index.ts', () => {
  it('video play', async () => {
    const playStub = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation();
    const onChange = jest.fn();
    act(() => {
      render(
        <MediaPreviewer
          type="video"
          url="https://temp-cdn.coniun.io/coniun-pass.mp4"
          cover="https://ipfs.io/ipfs/bafybeiaxysgazrn5c42zk3hwgn5c2cumds5alhwph2wdexgzsnzzgrfr5a/5595.png"
          onPlay={onChange}
        />,
        container,
      );
    });
    act(() => {
      const triggerDom = container.querySelector("[data-id='trigger-play']");
      triggerDom?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(playStub).toHaveBeenCalled();
  });

  it('audio play', async () => {
    const playStub = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation();
    const onChange = jest.fn();
    act(() => {
      render(
        <MediaPreviewer
          type="audio"
          url="https://openseauserdata.com/files/125b5e5be3f53da366815c340f9ddb3b.wav"
          cover="https://ipfs.io/ipfs/bafybeiaxysgazrn5c42zk3hwgn5c2cumds5alhwph2wdexgzsnzzgrfr5a/5595.png"
          onPlay={onChange}
        />,
        container,
      );
    });
    act(() => {
      const triggerDom = container.querySelector("[data-id='trigger-play']");
      triggerDom?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(playStub).toHaveBeenCalled();
  });
});
