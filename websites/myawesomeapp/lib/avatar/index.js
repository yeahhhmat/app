import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';

export function getAvatar(seed) {
  return seed && (createAvatar(style, {seed, size: 26}))
}
