var count = 0;
function getBotResponse(input) {
    //rock paper scissors
	count = count+1;
	if(count==1)
		return "Your First Name";
	else if(count==2)
		return "Your Last Name";
	else if(count==3)
		return "Your Pet name";
	else if(count==4)
		return "Your teacher name";
	else if(count==5)
		return "Your native place";	
}
