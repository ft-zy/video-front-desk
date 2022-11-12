import axios from 'axios';
import router from "../router/index.js";
const URL =  "http://localhost:8089/zy"
// create an axios instance
const service = axios.create({
	baseURL: URL, // url = base url + request url
	timeout: 100000, // request timeout
	// withCredentials: true,
	// crossDomain: true
})

// http request 拦截器
service.interceptors.request.use(
	config => {
		// if (localStorage.getItem('user') != null) {
		// 	let user = JSON.parse(localStorage.getItem('user'));
		// 	config.headers.username = user.account;
		// 	config.headers.token = user.token;
		// }
		// return config;
		let token = '';
		if (token) {
			//把token放到headers里面
			config.headers = {
				...config.headers,
				token: token
			}
		}
		return config;
	},
	error => {
		return Promise.reject(error)
	}
)
service.interceptors.response.use(
	response => {
		if(response.status === 200){
			if (response.data.code != null && response.data.code !== 200) {
				window.$notification.error({
					content: response.data.msg,
					duration: 2500,
					keepAliveOnHover: true
				})
				return null;
			} else {
				return response.data;
			}
		}
		return -1;
	},
	error => {
		// localStorage.clear('user');
		// router.replace('/login');
	}
)

export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		service({
			url: url,
			method: 'get',
			params: params
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		});
	});
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params = {}) {
	return new Promise((resolve, reject) => {
		service({
			url: url,
			method: 'post',
			data: params
		}).then(response => {
			console.log(response)
			resolve(response);
		}).catch(error => {
			console.log(error)
			reject(error);
		});
	});
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function put(url, params = {}) {
	return new Promise((resolve, reject) => {
		service({
			url: url,
			method: 'put',
			data: params
		}).then(response => {
			console.log(response)
			resolve(response);
		}).catch(error => {
			console.log(error)
			reject(error);
		});
	});
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url, params = {}) {
	return new Promise((resolve, reject) => {
		service({
			url: url,
			method: 'post',
			data: params,
			headers: { 'Content-Type': 'multipart/form-data' }
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		});
	});
}

export default {
	service,
	get,
	post,
	put
}
