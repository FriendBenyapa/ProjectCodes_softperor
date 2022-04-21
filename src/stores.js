import {writable} from 'svelte/store';

let data ={'6410742221':{number: '6410742221', pin: '6410742221',nameth:'วัน', surnameth:'ทอม',nameEN:'One', surnameEN:'Tom', faculty:'วิศวกรรมศาสตร์', studentNo:'6410742221', dateofbirth:'2/3/44', race:'ไทย/THAI', nationality:'ไทย/THAI', bloodtype:'A', gender:'ไม่ระบุ', idcard:'1111111111111', address:'11/1 ม.1 ต.บางปะกง อ.บางปะกง จ.ฉะเชิงเทรา 24130 ', tel:'0911111111', email:'6410742221@gmail.com'},
           
           '6410742222':{number: '6410742222', pin: '6410742222',nameth:'ทู', surnameth:'เจอร์รี่',nameEN:'Two', surnameEN:'Jerry', faculty:'วิศวกรรมศาสตร์', studentNo:'6410742222', dateofbirth:'1/2/44', race:'ไทย/THAI', nationality:'ไทย/THAI', bloodtype:'B', gender:'ไม่ระบุ', idcard:'2222222222222', address:'22/2 ม.2 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120 ', tel:'0922222222', email:'64107422222@gmail.com'}
          }

let sj ={'SF210':{name: 'SF210', allname: 'PROGRAMMING SKILL DEVELOPMENT 1', code:'โควต้า', seat: 20, seatall: 20}, 
         'SF220':{name: 'SF220', allname: 'INTRODUCTION TO SOFTWARE ENGINEERING', code:'ทั่วไป', seat: 30, seatall: 30},
         'SF230':{name: 'SF230', allname: 'LINEAR ALGEBRA AND NUMERICAL METHODS FOR COMPUTER ENGINEERS',code:'ทั่วไป', seat: 35, seatall: 35},
         'TU050':{name: 'TU050', allname: 'ENGLISH SKILL DEVELOPMENT', code:'โควต้า',seat:2 , seatall: 2},
         'TU105':{name: 'TU105', allname: 'COMMUNICATION SKILLS IN ENGLISH', code:'โควต้า', seat: 1, seatall: 1},
         'TU107':{name: 'TU107', allname: 'DIGITAL SKILL AND PROBLEM SOLVING', code:'ทั่วไป', seat: 60, seatall: 60},
         'TU109':{name: 'TU109', allname: 'INNOVATION AND ENTREPRENEURIAL MINDSET', code:'ทั่วไป', seat: 60, seatall: 60},
        }

let data1 ={'6410742221':{SF210: 0, SF220: 0, SF230: 0, TU050: 0, TU105: 0, TU107: 0, TU109: 0}, 
         '6410742222':{SF210: 0, SF220: 0, SF230: 0, TU050: 0, TU105: 0, TU107: 0, TU109: 0}
        }

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('');
export const account = writable('');
export const subjects = writable(sj);
export const subject = writable('');
export const account_sjs = writable(data1);
export const account_sj = writable('');
