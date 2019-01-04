
exports.getSocketPage = function (req, res, next) {
	console.log("1111");
	res.render('socket',{
		title: 'socket',
	})
};
exports.getChatConnection = function (socket) {
	socket.emit('news', { chat: 'chat' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
};

exports.getNewsConnection = function (socket) {
	socket.on('message', function (data) {
		console.log(data);
	});
	socket.broadcast.emit('message',{"anan": 11212});
};