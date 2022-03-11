import id from './id';
import en from './en';

let Language = en;

if (true) { // get value from reducer / api
  Language = id;
}

export default Language;
