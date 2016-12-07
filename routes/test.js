/**
 * Created by Administrator on 2016/12/5.
 */
var http = require('http') ;
http.get("http://www.baidu.com",function(response){
    var html = "";
    response.on("data", function(chunk) {
        html+=chunk;
        console.log(html);
    });

})

