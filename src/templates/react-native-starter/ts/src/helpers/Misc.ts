import moment from 'moment';
import env from '../../env';

export default {
  currencyFormat(value: number, separator = ',') {
    let valueRounded = Math.round(value);
    let stringAmount = valueRounded.toString().split('').reverse().join('');
    let currency = '';
    let result = '';

    if (env.language === 'bahasa') {
      currency = 'Rp ';

      for (let i = 0; i < stringAmount.length; i++) {
        if (i % 3 === 0) {
          result += stringAmount.substr(i, 3) + separator;
        }
      }

      return currency + result.split('', result.length - 1).reverse().join('');
    }
  },

  phoneNumberFormat(number: any, phoneCode = '62') {
    let newNumber = '';

    if (number[0] === '0') {
      newNumber = phoneCode + number.substring(1);
    } else {
      newNumber = number;
    }
    return newNumber;
  },

  // phoneNumberCode(country_code: string) {
  //   const countryCode = {
  //     '62': '(+62)',
  //     '65': '(+65)',
  //     '61': '(+61)',
  //     '60': '(+60)',
  //     '1': '(+1)',
  //     '49': '(+49)',
  //   };
  //   return countryCode[country_code];
  // },

  randomString(data: string) {
    let result = '';
    let randomString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + data;

    for (let i = 0; i < 20; i++) { result += randomString.charAt(Math.floor(Math.random() * randomString.length)); }

    return result;
  },

  getIndices(searchedString: string, string: string) {
    let startIndex = 0, eachIndex, arrayIndex = [];

    while ((eachIndex = string.indexOf(searchedString, startIndex)) > -1) {
      arrayIndex.push(eachIndex);
      startIndex = eachIndex + searchedString.length;
    }

    return arrayIndex;
  },

  consoleLogger(text: string, text2 = '', text3 = '', text4 = '') {
    if (env.status === 'development') {
      console.log(text, text2, text3, text4); // eslint-disable-line no-console
    }

    return null;
  },

  wordsUpperCase(text: string) {
    return text ? text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') : '';
  },

  createRandomCode() {
    let time = new Date().getTime().toString();
    let randomNumber = Math.random().toString().substring(2);

    let randomChars = time + randomNumber;
    let result = '';

    for (let i = 0; i < 10; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    return result;
  },

  commaSeparatedNumber(value: string) {
    return value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },

  enumerateDaysBetweenDates(startDate: string, endDate: string) {
    var dates = [];

    var currDate = moment(startDate, 'DD-MM-YYYY').startOf('D');
    var lastDate = moment(endDate, 'DD-MM-YYYY').startOf('D');
    
    let index = 0
    
    dates.push({date: currDate.toDate(), id: index, places: []})
    
    while(currDate.add(1, 'days').diff(lastDate) < 0) {
        dates.push({date: currDate.clone().toDate(), id: index, places: []});
        index++
    }

    dates.push({date: lastDate.toDate(), id: dates.length, places: []})

    return dates
  }

};
