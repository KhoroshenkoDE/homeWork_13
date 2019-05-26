
var fs = require('fs');

var file = fs.readFileSync('text.txt', 'utf-8');
console.log(file);

fs.writeFileSync('new_file.txt', 'mess' );

fs.readFile('new_file.txt', 'utf-8', function(err, data) {
	console.log(data)
});

fs.appendFileSync("text.txt", "\r\n" + "for text.txt");
 
fs.appendFile("new_file.txt", "\r\n" + "for new_file", 'utf-8', function(error){
    var data = fs.readFileSync("new_file.txt", "utf8");
    console.log(data); 
});

fs.readFile('text.txt', 'utf-8', function(err, data) {
	console.log(data)
});



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'vasilka275@gmail.com',
		pass: "666demon666"
	}
});
console.log('created');

var HelperOptions = {
	from: 'vasilka275@gmail.com',
	to: 'pushistik3457@gmail.com',
	subject: 'Hello World',
	text: 'test'
};

transporter.sendMail(HelperOptions, (error, info) => {
	if(error){
		return console.log(error);
	}
	console.log("Sent");
});









