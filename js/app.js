"use strict"

$(document).ready(function () {
	var resultList = $("#resultList");
	resultList.text("Please login to see all courses");

	var toggleButton = $("#toggleButton");
	toggleButton.on("click",function () {
		console.log("Button clicked");
		resultList.toggle(600);
		if(toggleButton.text() === "Hide")
		{
			toggleButton.text("Show");
		}
		else
		{
			toggleButton.text("Hide");
		}
	});

	var results = [];

	function displayResult(results)
	{
		resultList.empty();

		$.each(results, function (i, item) {
			var newResult = $("<div class = 'result'>" +
				"<div class = 'title'>" + item.title + "</div>" +
				"<div>" + item.instructor + "</div>" +
				"<div>" + item.level + "</div>" +
				"<div>" + item.total_videos + "</div>" +
				"</div>");

			resultList.append(newResult);

			newResult.hover(function () {
				$(this).css("background-color", "lightgray");
				$(this).css("color", "blue");
			}, function () {
				$(this).css("background-color", "transparent");
				$(this).css("color", "black");
			});
		});
	}

	$("#loginForm").on("submit", function () {

		var username = $("#username").val();
		var password = $("#password").val();

		if(username && password)
		{
			$.post("/api/login", {}, function(data) {
			console.log("Success");
			displayResult(data);
			$("#errorMsg").empty();
			$("#loginForm").hide();
			$("#logoutSection").show();
			})
			.fail( function(data) {
				$("#errorMsg").text("Something BAD happened");
			})
			.done( function(data) {

			})	
		}
		else
		{
			$("#errorMsg").text("Username and Password is mandatory");
		}
		return false;
	})
		
	$("#logoutButton").on('click', function() {
		$("#loginForm").show();
		$("#logoutSection").hide();
		resultList.empty();
		resultList.text("Please login to see all courses");
	})

});

