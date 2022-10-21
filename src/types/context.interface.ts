import { MediaType } from './media.enum';

interface VideoInterface {
  onPlay?: Function;
  onPause?: Function;
}

interface ImageInterface {
  onImageLoad?: Function;
  onImageLoadError?: Function;
  defaultImage?: JSX.Element;
}

export interface MediaInterface extends VideoInterface, ImageInterface {
  url: string;
  cover?: string;
  type?: MediaType;
}
