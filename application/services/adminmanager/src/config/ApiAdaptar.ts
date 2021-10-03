import * as request from "request-promise-native";

export class ApiAdaptar {

    post = (url, body) => {
        return new Promise((resolve, reject) => {
            request.post({ url: url, json: body }, (error, response, body) => {
                // console.log(" - - -  - - - - - > > > > ", this)
                this.sendResponse(resolve, reject, error, response, body);
            });
        });
    }

    get = (url) => {
        console.log('get adi adapterare are--111--- ', url);
        return new Promise((resolve, reject) => {
            console.log('get adi adapterare are--222--- ', resolve, '  --- ', reject);
            request.get(url, (error, response, body) => {
                console.log(" output are - -- > > ", body)
                this.sendResponse(resolve, reject, error, response, JSON.parse(body));
            });
        });
    }

    put = (url, body) => {
        return new Promise((resolve, reject) => {
            request.put({ url: url, json: body }, (error, response, body) => {
                this.sendResponse(resolve, reject, error, response, body);
            });
        });
    }

    delete = (url) => {
        return new Promise((resolve, reject) => {
            // console.log('delete url are --------  ', url);
            request.delete(url, (error, response, body) => {
                this.sendResponse(resolve, reject, error, response, body);
            });
        });
    }

    private sendResponse = (resolve, reject, error, response, body) => {
        console.log('response ------------  ', response, '  - ------ -  ', body);
        if (response.statusCode === 200) {
            resolve({
                body,
                code: response.statusCode,
                message: " request has succeeded"
            });
        } else if (response.statusCode === 201) {
            resolve({
                body,
                code: response.statusCode,
                message: "request has succeeded and a new resource has been created"
            });
        } else if (response.statusCode === 202) {
            resolve({
                body,
                code: response.statusCode,
                message: "request has been received but not yet acted upon"
            });
        } else if (response.statusCode === 203) {
            resolve({
                body,
                code: response.statusCode,
                message: "non authoritative info"
            });
        } else if (response.statusCode === 204) {
            resolve({
                body,
                code: response.statusCode,
                message: "no conent"
            });
        } else if (response.statusCode === 205) {
            resolve({
                body,
                code: response.statusCode,
                message: "reset content"
            });
        } else if (response.statusCode === 206) {
            resolve({
                body,
                code: response.statusCode,
                message: "partial content"
            });
        } else if (response.statusCode === 400) {
            reject({
                code: response.statusCode,
                message: "bad request"
            });
        } else if (response.statusCode === 401) {
            reject({
                code: response.statusCode,
                message: "unauthorized"
            });
        } else if (response.statusCode === 402) {
            reject({
                code: response.statusCode,
                message: "Payment Required"
            });
        } else if (response.statusCode === 403) {
            reject({
                code: response.statusCode,
                message: "forbidden"
            });
        } else if (response.statusCode === 404) {
            reject({
                code: response.statusCode,
                message: "not found"
            });
        } else if (response.statusCode === 405) {
            reject({
                code: response.statusCode,
                message: "method not allowed"
            });
        } else if (response.statusCode === 406) {
            reject({
                code: response.statusCode,
                message: "not acceptable"
            });
        } else if (response.statusCode === 407) {
            reject({
                code: response.statusCode,
                message: "proxy authentication required"
            });
        } else if (response.statusCode === 408) {
            reject({
                code: response.statusCode,
                message: "request timeout"
            });
        } else if (response.statusCode === 500) {
            reject({
                code: response.statusCode,
                message: "internal server error"
            });
        } else if (response.statusCode === 501) {
            reject({
                code: response.statusCode,
                message: "request method is not supported by the server and cannot be handled"
            });
        } else if (response.statusCode === 502) {
            reject({
                code: response.statusCode,
                message: "bad request"
            });
        } else if (response.statusCode === 503) {
            reject({
                code: response.statusCode,
                message: "service available"
            });
        } else if (response.statusCode === 504) {
            reject({
                code: response.statusCode,
                message: "gateway timeout"
            });
        } else if (response.statusCode === 505) {
            reject({
                code: response.statusCode,
                message: "HTTP version used in the request is not supported by the server"
            });
        } else {
            reject(error);
        }
    }

}
