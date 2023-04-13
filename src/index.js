
import {v4 as uuidv4} from '../uuid/dist';


export const add = (a, b) => {
  return a + b 
}

// 1.生成：基于名称分类的UUID (name-uuid)
export const genNameUUID = (name) => {
  return name + '-' + uuidv4()
}

// 2.生成：基于名称-时间戳-UUID 
 export const genNameMsects = (name) => {
  const nowMsec = Date.now() // 当前毫秒时间戳
  return name + '-' + nowMsec
 }

 // 3.生成：基于名称-时间戳-随机字符
export const genNameMsectsRand= (name) => {
  
  const nowMsec = Date.now() // 当前毫秒时间戳

  var TOKEN_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var len = 4;
  var chars = [];
  for (var i = 0; i < len; i++) {
      var index = Math.floor(Math.random() * TOKEN_CHARS.length);
      chars.push(TOKEN_CHARS[index]);
  }

  return name + '-' + nowMsec + '-' + chars.join('')
}