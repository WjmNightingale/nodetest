window.jQuery = function (nodeSelector) {
	let nodes = {}
	nodes.addClass = function() {}
	nodes.html = function() {}
	return nodes
}

//window.jQuery.ajax = function({url,method,headers,body,success,fail}) {...}
window.jQuery.ajax = function(options) {
	//url,method,headers,body,successfn,failfn
	
	支持多种参数传入的写法
	if (arguments.length === 1) {
		url = options.url
	} else if(arguments.length === 2) {
		url = arguments[0]
		options = arguments[1]
	}
	let method = options.method
	let headers = options.headers
	let successfn = options.success
	let failfn = options.fail
	let body = options.body

	//ES6 析构赋值
	

	//如果成功调用resolve，如果失败调用reject
	return new Promise(function(resolve,reject) {
		let (url,method,headers,body,success,fail) = options
		let request = new XMLHttpRequest()
		request.open(method,url)
		for(let key in headers) {
			request.setRequestHeader(key,value)
		}
		request.onreadystatechange = (e) => {
			if(request.readyState === 4) {
				if(request.status >= 200 && request.status <= 300) {
					successfn.call(undefined,request.responseText)
				} else if(request.status >= 400) {
					failfn.call(undefined,request)
				}
			}
		}
		request.send(body)
	})
}
window.$ = window.jQuery

myButton.addEvnetListener('click',function(e) {
	window.jQuery.ajax({
		url: '/xxx',
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-url-encoded',
			'wjm': '24'
		},
		body: '这是请求的body部分'
	}).then((responseText) => {
		console.log(responseText)
	},(request) => {
		console.log('error')
	})
})

function success(responseText) {
	console.log(responseText)
}
function fail(request) {
	console.log(request)
}

//jQuery
myButton.addEvnetListener('click',(e) => {
	window.jQuery.ajax({
		url: '/frank',
		method: 'GET',
		// success: (x) => {
		// 	f1.call(undefined,x)
		// 	f2.call(undefined,x)
		// },
		// error: (x) => {
		// 	console.log(x)
		// 	console.log(x.status)
		// 	console.log(x.responseText)
		// }
	}).then((responseText) => {
		console.log(responseText)
		return responseText
	},(request) => {
		console.log('error1')
		return '已经处理！'
	}).then((上一次的处理结果) => {
		console.log(上一次的处理结果)
	},(request) => {
		console.log('error2')
	})
})

window.Promise = function(fn) {
	return {
		then: function() {}
	}
}

return new Promise(function(resolve,reject) {
	
})