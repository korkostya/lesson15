//task 1
// Блок переменных
var http = require ('http');

const port = 3000;
 
var evt = require ('events').EventEmitter;

var log = new evt;



//навешиваем слушателя
log.on ('login', function () {
	var comeinTime = new Date ();
	console.log (" Пользователь вошел"+ comeinTime);
});

log.on ('logout', function () {
	var leftTime = new Date ();
	console.log ("Пользователь вышел"+ leftTime);
});

log.on ('act', function () {
	var changeTime = new Date ();
	console.log ("Переход на другую страницу"+changeTime);
});

//иниацилизируем сервер. Создаем событие

var server = http.createServer (function (req, res) {

	
	res.write("You are on 3000");

	if (req.url === "/"){
    
	   log.emit("login");
	   res.end (); 

	}else if (req.url === "/any-page"){
		
           log.emit("act");
           res.end ();

	}else if(req.url === "/out"){
		
          log.emit("logout");
          res.end ();          	                           
	}	

}).listen (port, function () {

	console.log ("On Local host");

});

