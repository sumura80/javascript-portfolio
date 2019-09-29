// 1.現在時刻の表示
function settingTime(){ 
let getNow = new Date();
let year = getNow.getFullYear();
let month = getNow.getMonth() + 1;
let date = getNow.getDate() ;
let hour = getNow.getHours() ;
let mins = getNow.getMinutes() ;
let seconds = getNow.getSeconds();
let ampm = ""
if(hour > 12){
    ampm = '午後';
}else{
    ampm = '午前'
}
let wholeTime= year +'年'+month+'月'+ date + '日 ' + ampm +(hour%12)+':'+ mins+ ':'+seconds;
document.getElementById('timeDisplay').innerHTML = wholeTime;
// console.log(wholeTime);
}
timer = setInterval('settingTime()',1000);


//-----------------------------------------------------
//おみくじ
let omikujiBtn = document.querySelector('#omikuji');
omikujiBtn.addEventListener('click',omikujiDecision);

function omikujiDecision(){
let omikujiNum = Math.floor(Math.random()*5 );
let omikujiMessage="";
switch(omikujiNum){
	case 0:
		omikujiMessage = '大吉：今日はあなたにとって最高の1日になるでしょう！';
		document.getElementById('omikujiResult').innerHTML= omikujiMessage;
		break;
	case 1:
		omikujiMessage = '中吉：今日はいいことが起きそうです。';
		document.getElementById('omikujiResult').innerHTML= omikujiMessage;
		break;
	case 2:
		omikujiMessage = '吉：朝ごはんは抜かずに仕事に向かいましょう。';
		document.getElementById('omikujiResult').innerHTML= omikujiMessage;
		break;
	case 3:
			omikujiMessage = '凶：不吉なことが起きるかも・・・';
			document.getElementById('omikujiResult').innerHTML= omikujiMessage;
			break;
	case 4:
			omikujiMessage = 'スーパー大吉：このレアな運勢があればもう空をも飛べるでしょう。';
			document.getElementById('omikujiResult').innerHTML= omikujiMessage;
			break;
	}
}



//-----------------------------------------------------
//数当てゲーム

 
let userInputNumber = document.querySelector('#numberQuizInput').value;
let numberAnswer = document.querySelector('#numberResult');
let numberAnswerBtn = document.querySelector('#numberQuizBtn');
let numberResultPosition = document.querySelector('#numberResultPos');
numberAnswerBtn.addEventListener('click',numberQuizBtn)

function numberQuizBtn(){
let computerNumber= parseInt(Math.floor(Math.random()*3)+1);
let userInputNumber = document.querySelector('#numberQuizInput').value; 
console.log(userInputNumber)
if(userInputNumber != ""){
			if(computerNumber ==  userInputNumber ){
						numberResultPosition.innerHTML = "正解です。一致しました。";
						numberResultPosition.classList.add('alert-success');
						document.numberQuiz.numberInput.value="";
					

			}else{
					numberResultPosition.innerHTML = "残念でした。もう一回トライしましょう！"
					numberResultPosition.classList.add('alert-danger');
					document.numberQuiz.numberInput.value="";
				
			}
	}else{
	numberResultPosition.innerHTML = "数値を入力してください。"
　}
 }


//-----------------------------------------------------
//箱の色を変更
 //だいたいonclick() に記入



//-----------------------------------------------------
//画像のスライドショー
let i = 0;
let slideIamges = [];
let time = 3000;

slideIamges[0] = 'image1.png';
slideIamges[1] = 'image2.png';
slideIamges[2] = 'image3.png';
slideIamges[3] = 'image4.png';

function changeSlideImage(){
	document.slideShow.src =slideIamges[i];

	if(i < slideIamges.length -1){
		i++
	}else{
		i=0;
	}

	setTimeout('changeSlideImage()', time);
} 
window.onload = changeSlideImage;




//-----------------------------------------------------
//オリンピックまでカウントダウン
//オリンピックは2020年7月24日に開始（月は0から始まる）
//2020年はgetFullYear +1  7月は6(0base)
function olympicCountDownInterval(){
let now = new Date();
let olympicDate = new Date(now.getFullYear()+1 , 6, 24);
let difference = olympicDate.getTime() - now.getTime();
let restSeconds = Math.floor(difference/(1000) %60);
let restMins = Math.floor(difference/(60 * 1000) %60);
let restHours = Math.floor(difference/(24 * 60 * 60 * 1000) % 24);
let restDays = Math.ceil(difference/ (24 * 60 * 60 * 1000) );
document.querySelector('#olympicCountDown').innerHTML = restDays;
document.querySelector('#olympicCountDownHours').innerHTML = restHours;
document.querySelector('#olympicCountDownMinutes').innerHTML = restMins;
document.querySelector('#olympicCountDownSeconds').innerHTML = restSeconds;
}
setInterval(olympicCountDownInterval,1000);



//-----------------------------------------------------
//LIKE ボタン

const likeDislike = function(){
 let likeBtn = document.querySelector('#far');
 likeBtn.classList.toggle('fa-thumbs-down');
 let likeDisplay = document.querySelector('#reallyDislike');
 likeDisplay.classList.toggle('likeDisplay');
console.log(likeBtn);
};


//-----------------------------------------------------
//TODOリスト

let taskForm = document.querySelector('#addForm');
let itemList = document.querySelector('#items') ;


taskForm.addEventListener('submit' ,addTask)

function addTask(e){
	e.preventDefault();

	 let newTask = document.querySelector('#taskInput').value;
	 let li = document.createElement('li');
	 li.className = "list-group-item";
	 li.appendChild(document.createTextNode(newTask));
	 itemList.appendChild(li);


	 //削除ボタンの追加
	 let deleteBtn = document.createElement('button');	 
	 deleteBtn.className = 'btn btn-warning float-right delete';
	 deleteBtn.appendChild(document.createTextNode('削除'));
	 li.appendChild(deleteBtn);

}

//削除機能の追加
itemList.addEventListener('click',removeTask);
function removeTask(e){
	e.preventDefault();
	 
	if(e.target.classList.contains('delete')){
		if(confirm('削除してよろしいですか？')){
			let li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}

}

//-----------------------------------------------------
//英語のクイズ
let quizAnswerBtn = document.querySelector('#pluralAnswerBtn');
quizAnswerBtn.addEventListener('click', quizAnswerCheck);
let quizInput =  document.querySelector('#pluralQuizInput').value;
function quizAnswerCheck(e){
	e.preventDefault();
	let quizInput =  document.querySelector('#pluralQuizInput').value.toLowerCase();
	let englishQuizAnswerDisplay = document.querySelector('#englishQuizAnswerDisplay')
	if(quizInput ==""){
		englishQuizAnswerDisplay.innerHTML="単語を入力してください";
		englishQuizAnswerDisplay.classList.add('redText');

		} else{

	let replyToUser = "";
	switch(quizInput){
		case quizInput:
			if(quizInput == "sheep"){
				replyToUser ="正解です！素晴らしいですね。";
				englishQuizAnswerDisplay.innerHTML="";
				englishQuizAnswerDisplay.classList.remove('redText');
				englishQuizAnswerDisplay.innerHTML=replyToUser;
			}else{
				replyToUser ="残念！みなさんそう間違えます。(T__T;)";
				englishQuizAnswerDisplay.innerHTML="";
				englishQuizAnswerDisplay.classList.remove('redText');
				englishQuizAnswerDisplay.innerHTML=replyToUser;
			}
			break;
	}
	}
}	//quizAnswerCheckのかっこ




//-----------------------------------------------------
//自己紹介アプリ

function introImage(){
	let counterNums = document.appIntroduction.appOptions.selectedIndex;
	let siteUrl = "Lifeabroad";
	if(counterNums != 0){
		document.introImg.src = document.appIntroduction.appOptions.options[counterNums].value;
	}else{
		document.introImg.src = document.appIntroduction.appOptions.options[0].value;
	}

 
	console.log(counterNums)
 
 
}


//-----------------------------------------------------
//BMIの計算
let button = document.getElementById('button').addEventListener('click',function(e){
	e.preventDefault();
	let heightInput = document.getElementById('bmiHeight').value;
	let weightInput = document.getElementById('bmiWeight').value;
 
	let bmiMeasure = weightInput / ((heightInput /100 ) * (heightInput /100));
	let bmiMeasureRound = bmiMeasure.toFixed(2);

	let bmiWeightAppropriate = ((heightInput /100 ) * (heightInput /100)) * 22;
	let bmiWeightAppropriateRound = bmiWeightAppropriate.toFixed(0);
 

	document.querySelector('#bmiResultNumber').innerHTML = bmiMeasureRound;
	document.querySelector('#bmiResultRecommendeWeight').innerHTML = `${bmiWeightAppropriateRound} Kg`;
	let obecityLevel = document.querySelector('#bmiResultObecity');
	//肥満度の計算
	 if(bmiMeasureRound < 18.5){
		obecityLevel.innerHTML ="低体重(痩せ型)";
	}else if(bmiMeasureRound >= 18.5 && bmiMeasureRound < 25){
		obecityLevel.innerHTML ="普通体重";
	}else if(bmiMeasureRound >= 25 && bmiMeasureRound < 30){
		obecityLevel.innerHTML ="肥満(1度)";
	}else if(bmiMeasureRound >= 30 && bmiMeasureRound < 35){
		obecityLevel.innerHTML ="肥満(2度)";
	}else if(bmiMeasureRound >= 35 && bmiMeasureRound < 40){
		obecityLevel.innerHTML ="肥満(3度)";
	}else if(bmiMeasureRound >= 40 ){
		obecityLevel.innerHTML ="肥満(4度)";
	}
	let warningMsg = document.getElementById('inputWarning');
	if(heightInput === "" || weightInput === ""){
		document.querySelector('#bmiResultNumber').innerHTML = "";
		document.querySelector('#bmiResultRecommendeWeight').innerHTML ="";
		obecityLevel.innerHTML ="";
		
		warningMsg.innerHTML="身長と体重を入力してください。"
	 	}else{
			warningMsg.innerHTML=""
		 }

});
	//input部分のクリア機能
let bmiClear = document.getElementById('bmiClearBtn').addEventListener('click',function(e){
	let heightInput = document.getElementById('bmiHeight');
	let weightInput = document.getElementById('bmiWeight');
	heightInput.value = "";
	weightInput.value="";
	document.querySelector('#bmiResultNumber').innerHTML = "";
	document.querySelector('#bmiResultRecommendeWeight').innerHTML = "";
	let obecityLevel = document.querySelector('#bmiResultObecity').innerHTML ="";
 });

 

 //-----------------------------------------------------
//旅行注文書

let countryDecision = document.querySelector('#orderOptions');
countryDecision.addEventListener('change',function(e){
	// console.log(e.target.value)
});

function creditSeparation(){
	document.getElementById('creditBox').className ="active"
	document.getElementById('bankwire').className="passive"
	document.getElementById('konbiniBox').className="passive"
}

function bankSeparation(){
	document.getElementById('bankwire').className="active"
	document.getElementById('creditBox').className ="passive"
	document.getElementById('konbiniBox').className="passive"
}

function konbiniSeparation(){
	document.getElementById('bankwire').className="passive"
	document.getElementById('creditBox').className ="passive"
	document.getElementById('konbiniBox').className="active"
}
//旅行金額
let asiaPrice = 78000;
let northPrice = 179000;
let southPrice = 164000;
let ausPrice = 95000;
let euroPrice  = 183000;
let africaPrice = 212000;


//旅行先を金額の確認の欄に表示する
document.getElementById('orderOptions').addEventListener('change',function(e){
	// console.log(e.target.value)
	let countryDisplay = document.getElementById('orderOptions').selectedIndex;
	switch(countryDisplay){
		case 0:
			document.querySelector('#directionDisplay').innerHTML ='<span style="color:red;">アジア</span>を選択しております'
			//小計に金額を入力
			document.querySelector('#subtotal').value =asiaPrice.toLocaleString(); 
			document.querySelector('#orderTax').value = (asiaPrice * 0.1).toLocaleString();
			let asiaTotal = asiaPrice + (asiaPrice*0.1);
			document.querySelector('#total').value = asiaTotal.toLocaleString();
			
			break;
		case 1:
			document.querySelector('#directionDisplay').innerHTML ='<span style="color:red;">北米</span>を選択しております'
			document.querySelector('#subtotal').value = northPrice.toLocaleString(); 
			document.querySelector('#orderTax').value = (northPrice * 0.1).toLocaleString();
			let northTotal = northPrice + (northPrice*0.1);
			document.querySelector('#total').value = northTotal.toLocaleString();
			break;
		case 2:
			document.querySelector('#directionDisplay').innerHTML ='<span style="color:red;">南米</span>を選択しております'
			document.querySelector('#subtotal').value = southPrice.toLocaleString() ; 
			document.querySelector('#orderTax').value = (southPrice * 0.1).toLocaleString();
			let southTotal = southPrice + (southPrice*0.1);
			document.querySelector('#total').value = southTotal.toLocaleString();
			break;
		case 3:
			document.querySelector('#directionDisplay').innerHTML ='<span style="color:red;">オーストラリア</span>を選択しております'
			document.querySelector('#subtotal').value = ausPrice.toLocaleString() ; 
			document.querySelector('#orderTax').value = (ausPrice * 0.1).toLocaleString();
			let ausTotal = ausPrice + (ausPrice*0.1);
			document.querySelector('#total').value = ausTotal.toLocaleString();
			break;
		case 4:
			document.querySelector('#directionDisplay').innerHTML ='<span style="color:red;">ヨーロッパ</span>を選択しております'
			document.querySelector('#subtotal').value = euroPrice.toLocaleString() ; 
			document.querySelector('#orderTax').value = (euroPrice * 0.1).toLocaleString();
			let euroTotal = euroPrice + (euroPrice*0.1);
			document.querySelector('#total').value = euroTotal.toLocaleString();
			break;
		case 5:
			document.querySelector('#directionDisplay').innerHTML ='<span style="color:red;">アフリカ</span>を選択しております'
			document.querySelector('#subtotal').value = africaPrice.toLocaleString() ; 
			document.querySelector('#orderTax').value = (africaPrice * 0.1).toLocaleString();
			let africaTotal = africaPrice + (africaPrice*0.1);
			document.querySelector('#total').value = africaTotal.toLocaleString();
			break;
	}

});

let noInsurance = 0;
let withInsurance = 49800;
let withWithout= document.querySelector('#total').value;
let toggleWithoutInsurance;
//海外旅行保険 radioの取得方法をforを使うことにした
function insuranceChange(){
	let insuranceRadio = document.getElementsByName("insuranceChoice");

	for(let i =0; i < insuranceRadio.length; i++){
		if(insuranceRadio[0].checked){	
			// console.log(insuranceRadio[0]);
			document.querySelector('#orderShipping').value= noInsurance;
			toggleWithoutInsurance = withWithout.replace(/,/g, '')
			let insuranceIncludedTotal = parseInt(toggleWithoutInsurance);
			let deductInsurance = insuranceIncludedTotal - withInsurance
			withWithout = document.querySelector('#total').value = deductInsurance.toLocaleString();
			console.log(withWithout)
			break;
		}
		else if(insuranceRadio[1].checked){		
			// console.log(insuranceRadio[1]);
			document.querySelector('#orderShipping').value= withInsurance.toLocaleString();
			let bringTotalPrice = document.querySelector('#total').value;
			let bringTotalPriceWithoutComma = bringTotalPrice.replace(/,/g, '');
			let bringTotalPriceInteger = parseInt(bringTotalPriceWithoutComma);
			let totalWithInsurance = (bringTotalPriceInteger +withInsurance);
			withWithout = document.querySelector('#total').value = totalWithInsurance.toLocaleString();
			console.log(withWithout);
			break;
		}
	}

	
}


//会員価格のチェックボックス
let memberCheck = document.querySelector('#memberDiscount');
memberCheck.addEventListener('change', function(){
	if(memberCheck.checked == true){
		// console.log(withWithout);
	let	notLocalestring = parseInt(withWithout.replace(/,/g, ''));
	// console.log(notLocalestring);
	let afterMemberDeduction = (notLocalestring * 0.6).toLocaleString();
	console.log(afterMemberDeduction)
	document.querySelector('#memberPriceDisplay').value = afterMemberDeduction;
	}else{
		document.querySelector('#memberPriceDisplay').value = 0;
	}
  
});
 


//Checkboxでパスワードを表示
let passwordBox = document.getElementById('pwInputAgain');
let passwordCheckBox = document.getElementById('pwDisplay');
// console.log(passwordBox.type)
// console.log(passwordCheckBox.type)

passwordCheckBox.addEventListener('change',function(e){
	 if(passwordCheckBox.checked){
		passwordBox.setAttribute('type','text');
	 }else{
		 passwordBox.setAttribute('type','password')
	 }
});



//注文確定ボタン
let orderBtn = document.querySelector('#orderBtn');
let thanksMsg = document.querySelector('#thanksMsg');
let orderDone = document.querySelector('#orderDone');

orderBtn.addEventListener('click',function(e){
	orderBtn.innerHTML="送信いたしました。"
	orderBtn.setAttribute('disabled','disabled');

	console.log(orderBtn.classList);
	orderDone.classList.remove('passive')
	orderDone.classList.add('block','lead')

	console.log(orderBtn.classList);
	thanksMsg.classList.remove('passive')
	thanksMsg.classList.add('block')
});