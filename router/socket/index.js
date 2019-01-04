
const socket = require('../../controller/socket');

//进入socket的页面路由
exports.map = function (app) {
	app.get('/socket', socket.getSocketPage)
};

//socket路由
exports.mapSocket = function (io) {
	io.of('/chat').on('connection', socket.getChatConnection);
	io.of('/news').on('connection', socket.getNewsConnection);
};