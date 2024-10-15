import http from "./HttpCommon"

const getPageingList = (path ='/boards/list',search='') => {
  return http.get(path + search);
};

export default{
  getPageingList,
  
};