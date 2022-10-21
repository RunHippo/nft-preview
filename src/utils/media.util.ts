import { MediaType } from '@/types/media.enum';

export function getMediaType(type: string): MediaType {
  if (typeof type !== 'string') return 'image';
  if (type.includes('video')) {
    return 'video';
  } else if (type.includes('image')) {
    return 'image';
  } else {
    return 'audio';
  }
}
