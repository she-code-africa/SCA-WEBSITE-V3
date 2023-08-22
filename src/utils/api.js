import Axios from "axios";
import CustomHttpError from "./errors";

const api = Axios.create({
  withCredentials: false,
});

api.interceptors.request.use(
  function (config) {
    // show loader here
    return config;
  },
  function (error) {
    // hide loader here
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // hide loader
    return response.data?.data ?? response.data;
  },
  function (err) {
    //  hide loader

    if (!err.response) {
      return Promise.reject(
        new CustomHttpError(
          "Error occured while sending the request, please check your internet settings",
          {
            statusCode: 0,
            responseText:
              "Error occured while sending the request, please check your internet settings",
          }
        )
      );
    }
    if (err.response.status === 401) {
      //
      // log user out
      return Promise.reject(
        new CustomHttpError("User session has expired!", {
          statusCode: err.response.status,
          responseText: "User session has expired!",
        })
      );
    }
    // if (err.response.status >= 400) {
    //   return Promise.reject(new Error())
    // }
    if (err.response.data && err.response.data.error) {
      return Promise.reject(
        new CustomHttpError(err.response.data.error, {
          statusCode: err.response.status,
          responseText: err.response.data.error,
          payload: null,
          responseCode: null,
        })
      );
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(
      new CustomHttpError("Error occured while sending the request", {
        statusCode: err.response.status,
        responseText:
          err.response.data.message ||
          "Error occured while sending the request",
      })
    );
  }
);

export default api;
