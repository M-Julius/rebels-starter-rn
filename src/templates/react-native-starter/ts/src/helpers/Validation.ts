export default {
  email(val: string) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(val);
  },
  number(val: string) {
    let re = /^\d+$/;
    return re.test(val);
  },
  string(val: string) {
    let re = /^[A-Za-z ]+$/;
    return re.test(val);
  },
  // zeroAtBegin(val: string) {
  //   let zero = val.match(/^[0]+/g);
  //   return val.replace(zero, '');
  // },
};
