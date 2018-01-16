var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var path = request.url
    // console.log('开始打印')
    // console.log(path)
    // console.log('\n')
    //   /pay?callback=jQuery32103417484456319342_1515583295043&_=1515583295044
    var parsedUrl = url.parse(path, true)
    var query = ''
    if (path.indexOf('?') >= 0) {
        query = path.substring(path.indexOf('?'))
    }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var path1 = '/pay?callback=' + queryObject.callback
    // console.log(path1)
    // /pay?callback=jQuery3210451818785934083_1515584234587
    // console.log('\n')
    // console.log(path === path1)
    var mehtod = request.method;

    // console.log(queryObject)
    switch (path) {
        case '/':
            var string = fs.readFileSync('./ajax.html', 'utf-8')
            // var amount = fs.readFileSync('./db', 'utf-8')
            // string = string.replace('&&&amount&&&', amount)
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.write(string)
            response.end()
            break
        case '/style.css':
            var string = fs.readFileSync('./style.css', 'utf-8')
            response.setHeader('Content-Type', 'text/css;charset=utf-8')
            response.write(string)
            response.end()
            break
        case '/main.js':
            var string = fs.readFileSync('./main.js', 'utf-8')
            response.setHeader('Content-Type', 'application/javascript;charset=utf-8')
            response.write(string)
            response.end()
            break
        // case `${path}` :
        //     // var amount = fs.readFileSync('./db', 'utf-8')
        //     // var newAmount = amount - 1
        //     // fs.writeFileSync('./db', newAmount)
        //     response.statusCode = 200
        //     response.setHeader('Content-Type', 'application/javascript')
        //     //服务端刷新
        //     // response.write('Hi')
        //     response.write(`${queryObject.callback}.call(undefined,'success')
        //     `)
        //     response.end()
        //     break
        case '/xxx':
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/json;charset=utf-8')
            var jsonObject = {
                "name":"wjm",
                "sex":"male",
                "age":18,
                "marry":false,
                "family":{
                    "father":"wjmfather",
                    "mother":"wjmmother"
                },
                "like":['footbale','tea','sweet']
            }
            var jsonString = JSON.stringify(jsonObject);
            response.write(jsonString)
            response.end()
            break
        default:
            response.statusCode = 404
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.write('找不到对应路径，请检查请求是否错误！')
            response.end()
    }

    // var query = ''
    // if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
    // var pathNoQuery = parsedUrl.pathname
    // var queryObject = parsedUrl.query
    // var method = request.method

    /******** 从这里开始看，上面不要看 ************/


    // console.log('方方说：得到 HTTP 路径\n' + path)
    // console.log('方方说：查询字符串为\n' + query)
    // console.log('方方说：不含查询字符串的路径为\n' + pathNoQuery)



    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)