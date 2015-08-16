var regExp = /%(([0-7][0-9a-f])|([c-d][0-9a-f]%[8-9a-b][0-9a-f])|(e[0-9a-f]%[8-9a-b][0-9a-f]%[8-9a-b][0-9a-f])|(f[0-7]%[8-9a-b][0-9a-f]%[8-9a-b][0-9a-f]%[8-9a-b][0-9a-f]))?/gi;

function replaceFunc(m,s1){
  if(!s1) return '%25';
  return m;
}

function fix(uri){
  return ((uri || '') + '').replace(regExp,replaceFunc);
}

function decode(uri){
  return decodeURI(fix(uri));
}

function encode(uri){
  return encodeURI(decode(uri));
}

function decodeComponent(uri){
  return decodeURIComponent(fix(uri));
}

function encodeComponent(uri){
  return encodeURIComponent(decodeComponent(uri));
}

/*/ exports /*/

exports.fix = fix;

exports.encode = encode;
exports.decode = decode;

exports.encodeComponent = encodeComponent;
exports.decodeComponent = decodeComponent;
