var username = "";
function send_message(conv,message){
	if (conv.length > 4) {
			conv = conv + "<br>";
	}
	$("#converse").html(conv + "<span id='chat-bot'>Mo-Pal: </span>" + message);
}

function get_username(conv){
	send_message(conv,"Hi, what's your name?");
}

function ai(conv,message){
	if (username<4) {
		username = message;
		send_message(conv,"Hi, "+ username + ". How are you?");
	}
}
$(function(){
	var conv = $("#converse").html();
	get_username(conv);
	$("#send").click(function(){
		var usermsg = $("#textbox").val();
		conv = $("#converse").html();
		console.log(conv.length);
		if (usermsg != "") {
			$("#textbox").val("");
			if (conv.length > 4) {
				conv = conv + "<br>";
			}
			$("#converse").html(conv + "<span id='chat-user'>You: </span>" + usermsg);
			$("#converse").scrollTop($("#converse").prop("scrollHeight"));
			conv = $("#converse").html();
			ai(conv,usermsg);
		}
	});
	$("#chat-head").click(function(){
		$("#controls").css({"display":"block"});
		$("#textbox").css({"display":"block"});
		$("#converse").animate({"height":"400px"});

	});
});
