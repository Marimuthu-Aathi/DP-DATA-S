// JScript File
//Function for trimming spaces
function TrimString(sInString){
	sInString = sInString.replace( /^\s+/g, "" );// strip leading
	return sInString.replace( /\s+$/g, "" );// strip trailing
}//end of function

function Date_Validation(GetData){
	if(TrimString(GetData.value) != ""){
		var t
		var Position,i;	
		var retArray = new Array(3);
		var GetValue = TrimString(GetData.value);
		var s = GetValue.indexOf("/");

		i = 0;
		if(s > 0){
			var s1 = GetValue.indexOf("-");
			if(s1 > 0){
				alert("Use either /(MM/DD/YYYY) Or - (MM-DD-YYYY)")
				GetData.value = "";
				GetData.focus();
				return false;
			}
		}
		if(s > 0){
			GetValue = GetValue + "/"
			Position = GetValue.indexOf("/");
			for(i=0;i<3;i++){	
				retArray[i] = GetValue.substring(0,Position);
				GetValue = GetValue.substring(Position+1,GetValue.length);
				Position = GetValue.indexOf("/");
			}
		}
		else{
			GetValue = GetValue + "-"
			Position = GetValue.indexOf("-");
			for(i=0;i<3;i++){	
				retArray[i] = GetValue.substring(0,Position);
				GetValue = GetValue.substring(Position+1,GetValue.length);
				Position = GetValue.indexOf("-");
			}
		}

		i = 0;	
	
		for(i=0;i<3;i++){
			if(i == 0){
				if(retArray[i].length > 2){
					alert("Please enter Date, MM/DD/YYYY");
					GetData.value = "";
					GetData.focus();
					return false;
				}
				else if((retArray[i] > 12) || (retArray[i] <= 0)){
					alert("Month should range from 1 to 12, MM/DD/YYYY ");
					GetData.value = "";
					GetData.focus();
					return false;
				}
			}
			else if(i == 1){
				if((retArray[i] > 31) || (retArray[i] <= 0)){
					alert("Day should range from 1 to 31, MM/DD/YYYY");
					GetData.value = "";
					GetData.focus();
					return false;
				}
			}
			else if(i == 2){
				if((retArray[i].length < 4) || (retArray[i].length > 4)){
					alert("Please enter the 4 digit Year, MM/DD/YYYY");
					GetData.value = "";
					GetData.focus();
					return false;
				}
			}
		}
		if((retArray[2] % 4) == 0 ){
			if((retArray[1] > 29) && (retArray[0] == 2)){
				alert("Day should range from 1 to 29, MM/DD/YYYY");
				GetData.value = "";
				GetData.focus();
				return false;
			}
		}
		else if((retArray[1] > 28) && (retArray[0] == 2)){
				alert("Day should range from 1 to 28, MM/DD/YYYY");
				GetData.value = "";
				GetData.focus();
				return false;
		}
		switch(retArray[0]){
		case '4': case '04': case '6': case '06':case '9':case '09':case '11':
			if(retArray[1] > 30){
					alert("Day should range from 1 to 30, MM/DD/YYYY");
					GetData.value = "";
					GetData.focus();
					return false;
				}
			break;
		
		}
	}
	var chkPoint = 0;
	var chkCount = 0;
	var ChkStr = GetData.value
	for(i=0;i<GetData.value.length;i++){
		if(s > 0){
			chkPoint = ChkStr.indexOf('/')
		}
		else{
			chkPoint = ChkStr.indexOf('-')
		}
		ChkStr = ChkStr.substring(chkPoint+1,ChkStr.length)
		if(chkPoint > 0){chkCount = parseInt(chkCount) + 1;}
		chkPoint = 0
	}
	if(chkCount > 2){
		alert("Invalid Date(MM/DD/YYYY) Or (MM-DD-YYYY)")
		GetData.value = "";
		GetData.focus();
		return false;
	}
	//-- End --
	
	var Date1 = new Date(GetData.value)
	var Dt1 = new Date("1/1/1900")
	var Dt2 = new Date("01/01/1900")

	if((Date1 < Dt1) ||(Date1 < Dt2)){
		alert("Invalid date")
		GetData.value=""
		GetData.focus();
		return false
	}
	//-- End --
}

function CurDateChk(GetData){
	var SentDate = new Date(GetData.value)
	var CurDate = new Date()
	
	if(SentDate > CurDate){
		alert("Invalid date")
		GetData.value=""
		GetData.focus();
		return false
	}
}

//Function for validating Numeric keypress
function Numeric_Keypress(){
    var key = window.event.keyCode;
	if(!(key >=48 && key <= 57)){window.event.keyCode = 0;}
}//end of function


function format_number(pnumber,decimals){
	if(isNaN(pnumber)){return 0};  
	if(pnumber==''){return 0};  
	pnumber = parseFloat(pnumber*100)/100
	var snum = new String(pnumber);  
	var sec = snum.split('.'); 
	var whole = sec[0]; 
	var result = '';  
	
	if(sec.length > 1){
		var dec = new String(sec[1]);
		if (dec.length == 1){
			dec += '0'
		}
		if (dec.length > 2){
			trd = dec.substr(2,1)
			dec = dec.substr(0,2);
			
			if(parseInt(trd) > 5){
				//dec = (parseInt((parseInt(dec) / 10)) * 10) + ((parseFloat(dec) % 10) + 1);
				dec = (parseInt((parseInt(dec) / 10)) * 10) + ((eval(dec) % 10) + 1);
				if(parseInt(dec) > 99 ){
					//Change by Chelian on Apr 20 2005
					whole = parseFloat(whole) + 1;
					dec = String(dec).substr(1,2);
					///////////////////////
				}
				else if(parseInt(dec) <= 9){
					dec = '0'+dec;
				}
			} 
		}
	}
	else{
	 dec = "00";
	}
	result = whole+'.'+dec;
	return result;
}  

//Save Alert Process
function SaveAlert(SaveFlag,DispMsg){
	var Rote = Math.random(); 
	if((SaveFlag == "Y") || (SaveFlag == "E")){
		window.showModalDialog("../VersionCom/MsgSavePro.asp?DispMsg="+DispMsg+"&SaveFlag="+SaveFlag+"&Tset="+Rote,window,"dialogHeight:65px;dialogWidth:360px;center:yes;status=no;scrollbars:no;help:no;")
		//alert("S")
	}
}

