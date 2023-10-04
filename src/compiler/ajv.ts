import Ajv, { Options } from 'ajv';
import addFormats from 'ajv-formats';

const options: Options = { strict: 'log' };

export default function ajv(opts: Options = {}) {
  const ajv = new Ajv({
    ...options,
    ...opts,
  });
  addFormats(ajv);
  return ajv;
}
