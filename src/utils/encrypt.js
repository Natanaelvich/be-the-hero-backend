import crypto from 'crypto';

export default function encrypt() {
  return crypto.randomBytes(4).toString('HEX');
}
