// 易用、简洁且高效的http库
const axios = require('axios');
// 请求签到、抽奖的接口
const checkInApi = 'https://api.juejin.cn/growth_api/v1/check_in';
const drawApi = 'https://api.juejin.cn/growth_api/v1/lottery/draw';
// 请求接口的cookie配置 cookie的获取见下面的图片说明
const cookieInfo = `__tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227161327975824033310%2522%252C%2522web_id%2522%253A%25227161327975824033310%2522%252C%2522timestamp%2522%253A1670827861034%257D; _ga=GA1.2.2085472385.1671523343; passport_csrf_token=6a8d280cce3f7f12180362fa9d20f0ba; passport_csrf_token_default=6a8d280cce3f7f12180362fa9d20f0ba; n_mh=bIXSz90__K0Je23-UdoYwAdsgG9WlJd7hZpARIEf378; sid_guard=7bbc903c57b862d1f3af7fe25c93e157%7C1672310488%7C31536000%7CFri%2C+29-Dec-2023+10%3A41%3A28+GMT; uid_tt=2270073dd0d5cb95225f3c1d0c91b126; uid_tt_ss=2270073dd0d5cb95225f3c1d0c91b126; sid_tt=7bbc903c57b862d1f3af7fe25c93e157; sessionid=7bbc903c57b862d1f3af7fe25c93e157; sessionid_ss=7bbc903c57b862d1f3af7fe25c93e157; sid_ucp_v1=1.0.0-KDljMzFjMGRjZmRhZjk4MTFkZjk0ZjA0ZDdiYjM1ZjRiZDE3OWVmNjEKFgjNmcDA_fWBBhDY3bWdBhiwFDgIQAsaAmxmIiA3YmJjOTAzYzU3Yjg2MmQxZjNhZjdmZTI1YzkzZTE1Nw; ssid_ucp_v1=1.0.0-KDljMzFjMGRjZmRhZjk4MTFkZjk0ZjA0ZDdiYjM1ZjRiZDE3OWVmNjEKFgjNmcDA_fWBBhDY3bWdBhiwFDgIQAsaAmxmIiA3YmJjOTAzYzU3Yjg2MmQxZjNhZjdmZTI1YzkzZTE1Nw; _tea_utm_cache_6587={%22utm_source%22:%22jj_nav%22}; _tea_utm_cache_2608={%22utm_source%22:%22daohang%22}; msToken=CfTIAtOZbfiM9PKXatb0KubsbdTrJpoHgShE4J-haSBaJjjr8gJJim4EXFbm3uYMUfDXX1A-My7FOfCMz8a0QsmCRKXDVVvs1RksCRRWkDs=; _gid=GA1.2.817045475.1673609914`;
//const cookieInfo = `_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227182811512641144359%2522%252C%2522user_unique_id%2522%253A%25227182811512641144359%2522%252C%2522timestamp%2522%253A1672378647063%257D; _ga=GA1.2.1055670138.1672378648; _gid=GA1.2.1515113297.1673666264; passport_csrf_token=91f5faa9aa905d1a8efef968c283cdb9; passport_csrf_token_default=91f5faa9aa905d1a8efef968c283cdb9; odin_tt=c5e67366e9ac485ca0d1c656fae31cbd9566e70d2b83c93ca1c95347a7ad83f771040bef342c12e86d75cccb30db669717ce4ee036803dade22f48a39274b15b; n_mh=9-mIeuD4wZnlYrrOvfzG3MuT6aQmCUtmr8FxV8Kl8xY; sid_guard=a9967feb771026e968fdf8812d912dc3%7C1673666278%7C31536000%7CSun%2C+14-Jan-2024+03%3A17%3A58+GMT; uid_tt=dca9dc19ad0651471648f3a95d0f176a; uid_tt_ss=dca9dc19ad0651471648f3a95d0f176a; sid_tt=a9967feb771026e968fdf8812d912dc3; sessionid=a9967feb771026e968fdf8812d912dc3; sessionid_ss=a9967feb771026e968fdf8812d912dc3; sid_ucp_v1=1.0.0-KGJjZDk2Mzg0NGJlNmI4NDNiZDFjNGZhNmExYTg3N2UwOThhOWEzM2MKFgiIwLCPwo3XAhDmvYieBhiwFDgIQAsaAmxmIiBhOTk2N2ZlYjc3MTAyNmU5NjhmZGY4ODEyZDkxMmRjMw; ssid_ucp_v1=1.0.0-KGJjZDk2Mzg0NGJlNmI4NDNiZDFjNGZhNmExYTg3N2UwOThhOWEzM2MKFgiIwLCPwo3XAhDmvYieBhiwFDgIQAsaAmxmIiBhOTk2N2ZlYjc3MTAyNmU5NjhmZGY4ODEyZDkxMmRjMw; store-region=cn-js; store-region-src=uid`;
const checkIn = async () => {
  let { data } = await axios({ url: checkInApi, method: 'post', headers: { Cookie: cookieInfo } });
  return data;
};

const draw = async () => {
  let { data } = await axios({ url: drawApi, method: 'post', headers: { Cookie: cookieInfo } });
  return data;
};

const signIn = async () => {
  const checkInData = await checkIn();
  const drawData = await draw();
  console.table(checkInData);
  console.table(drawData);
  return checkInData
};

module.exports = signIn;
