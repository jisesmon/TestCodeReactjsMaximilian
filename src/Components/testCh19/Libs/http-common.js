import axios from "axios";
//?? handeler error ?? in axios
//1-way http
const httpAxios = axios.create({
  //{  baseURL: "http://localhost:8080",
   headers: {"Content-Type": "application/json"} }
  );
httpAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // whatever you want to do with the error
    //throw error;
    //console.log('interceptors axios',error);
    if (error.response)
      //status :400 402 500  but not 0
      console.log(
        "interceptors axios ::status,data",
        error.response?.status,
        error.response?.data
      );
  }
);
httpAxios.interceptors.request.use(
  (config) => {
    console.log("interceptors axios  interceptors.request config", config);
    config.headers.dddd = (Math.floor(Math.random() * 100) * 100).toString();
    
    if(config.headers["Content-Type"]===null)
     config.headers["Content-Type"]= "application/json;charset=utf-8";
    
    console.log("interceptors axios interceptors.request onfig wwww", config);
    return config;
  },
  (error) => {
    console.log("interceptors axios interceptors.request error", error);
  }
);

export default httpAxios;

//2-1-way http
export const http = (config) => {
  const headers_golobal = {
    "Content-Type": "application/json",
    //,'authorization'
  };
  let headers = config.headers
    ? { ...headers_golobal, ...config.headers }
    : headers_golobal;

  if (headers["Content-Type"] === "application/json" && config.body)
    config.body = JSON.stringify(config.body);

  config = {
    url: config.url,
    method: config.method ?? "GET",
    body: config.body || null,
    headers: headers,
    success: config.success || null, //()=>{}
    error: config.error || null, //()=>{}
    onprogress: config.onprogress || null, //()=>{}
  };
  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // get a callback when the server responds
  xhr.addEventListener("load", () => {
    // update the state of the component with the result here
    //console.log(xhr.responseText);
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        const data = JSON.parse(xhr.response);
        if (config.success) {
          config.success(data);
        }
      } else {
        console.error("error 1", xhr.statusText);

        //   if(config.error){
        //     config.error({status:xhr.status ,statusText1:xhr.statusText});
        //   }
        if (config.error)
          if (xhr.status === 400 || xhr.status === 500)
            config.error({
              status: xhr.status,
              statusText2: JSON.parse(xhr.response),
            });
        if (xhr.status === 401)
          config.error({
            status: xhr.status,
            statusText401: JSON.parse(xhr.response),
          });
      }
    }
  });
  // open the request with the verb and the url
  xhr.open(config.method, config.url);

  // xhr.setRequestHeader('authorization', this.state.token);
  //xhr.setRequestHeader('Content-Type', 'application/json' );
  //xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  //console.error("headers", headers);
  Object.keys(headers).forEach((key) => {
    // console.log('header: key ,value'key,headers[key])
    xhr.setRequestHeader(key, headers[key]);
  });

  // send the request
  xhr.send(config.body);
  //?? refresh

  xhr.onprogress = function (event) {
    // console.log('LOADING', xhr.status);
    if (config.onprogress) {
      config.onprogress(event);
    }
  };
  xhr.onerror = function (e) {
    console.error("onerror 1", e);
    console.error("onerror 2", xhr.statusText);
    if (config.error) {
      // config.error({status:xhr.status ,statusText:xhr.statusText});
      if (xhr.status === 302)
        config.error({
          status: xhr.status,
          statusText302: JSON.parse(xhr.response),
        });
      if (xhr.status === 0)
        config.error({
          status: xhr.status,
          statusText0: xhr.response,
        });
    }
  };
};
//2-2-way http Upload
export const httpUpload = (url, data, success, error, onprogress) => {
  const form = new FormData();
  Object.keys(data).forEach((key) => {
    // console.log('header: key ,value'key,headers[key])
    form.append(key, data[key]);
  });
  const config = {
    url: url,
    method: "POST",
    body: form,
    headers: { "Content-Type": "multipart/form-data" },
    success: success, //()=>{}
    error: error, //()=>{}
    onprogress: onprogress,
  };
  http(config);
};
