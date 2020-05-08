var express = require('express');
var app = express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started at ' + port);

app.post('/api/login', function (req , res) {
	var results = [
	{
		title : "Java",
		instructor: "Nilay",
		level : "Beginner",
		total_videos : 	10
	},
	{
		title : "C++",
		instructor: "Rahul",
		level : "Beginner",
		total_videos : 	15
	},
	{
		title : "C",
		instructor: "Shubham",
		level : "Beginner",
		total_videos : 	12
	},
	{
		title : "Web Development",
		instructor: "Pranjal",
		level : "Beginner",
		total_videos : 	20
	}];

	res.json(results);
})