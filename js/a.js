// timer
// 初期設定
function radialTimer() {
	var self = this;

	this.seconds = 0;
	this.count = 0;
	this.degrees = 0;
	this.interval = null;
	this.timerHTML = "<div class='n'></div><div class='slice'><div class='q'></div><div class='pie r'></div><div class='pie l'></div></div>";
	this.timerContainer = null;
	this.number = null;
	this.slice = null;
	this.pie = null;
	this.pieRight = null;
	this.pieLeft = null;
	this.quarter = null;

	this.init = function(e, s) {
		self.timerContainer = $("#" + e);
		self.timerContainer.html(self.timerHTML);
		
		self.number = self.timerContainer.find(".n");
		self.slice = self.timerContainer.find(".slice");
		self.pie = self.timerContainer.find(".pie");
		self.pieRight = self.timerContainer.find(".pie.r");
		self.pieLeft = self.timerContainer.find(".pie.l");
		self.quarter = self.timerContainer.find(".q");

	// start timer
		self.start(s);
	}

	this.start = function(s) {
		self.seconds = s;
		self.interval = window.setInterval(function () {
			self.number.html(self.seconds - self.count);
			self.count++;

			if (self.count > (self.seconds-1)) clearInterval(self.interval);

			self.degrees = self.degrees + (360 / self.seconds);
			if (self.count >= (self.seconds / 2)) {
				self.slice.addClass("nc");
				if (!self.slice.hasClass("mth")) self.pieRight.css({"transform":"rotate(180deg)"});
				self.pieLeft.css({"transform":"rotate(" + self.degrees + "deg)"});
				self.slice.addClass("mth");
				if (self.count >= (self.seconds * 0.75)) self.quarter.remove();
			} else {
				self.pie.css({"transform":"rotate(" + self.degrees + "deg)"});
			}
		}, 1000);
		}
	}

var Timer;

$(document).ready(function() {
	Timer = new radialTimer();
	Timer.init("timer", 10);
});


// // クイズ
// // 問題文
let mondai = document.getElementById('mondai');
let quest = document.getElementById('quest');
let toi0 = document.getElementById('toi0');
let toi1 = document.getElementById('toi1');
let toi2 = document.getElementById('toi2');
let maru = document.getElementById('maru');
let batu = document.getElementById('batu');



let qs =[];
qs = [
	"「しかく」なのに「さんかく」のものって何でしょう？",
	"パソコンのキーボードが１箇所だけ壊れてしまい作業ができなくなってしまった。さてキーボードのどこが壊れた？",
	"次の３つの選択肢の中で眠そうな都道府県はどれ",
	"服を二枚来ている人が痛がってる。どこが痛い？",
	"「おひ〇くこ」〇に入るひらがなは３つのうちどれ",
	"次の３つの選択肢の中でマラソンをして最初にゴールしたのは誰？",
	"e"
];


// 選択肢
let ch = [];
ch = [
	["q","w","e"],
	["a","b","c"],
	["z","x","c"],
	["a","s","d"],
	["p","o","i"],
	["l","k","j"]
];

// // 答え
let answer = [];
answer = [0,2,1,2,1,0,0];

 //最初のとき
 
 function start(){
	let i = 0;
	document.getElementById("mondai").innerText += (i+ 1) + "問目：" + qs[i];
 }
 start();
 









// let mondaiHtml= "";
// for(let i = 0; i<qs.length; i++) {
// 	mondaiHtml += '<p id="mondai">${qs[i]}</p>';
// }
// // mondai.textContent = qs[1];

// function newFunction() {
// 	return document.getElementById('toi0');
// }
//  表示
// const maru = document.getElementById('maru');
// const batu = document.getElementById('batu');
// // maru.className ='hidden';
// // batu.className ='hidden';
// const quest = document.getElementById('quest');
// // // 初期設定

// let i = 0;
// quiz();
// function quiz(){
// 	let s = $('#mondai').html('aaaaaaaaaa');
// 	console.log(s);
// }
// // function quiz(){
// // 	let i = 0;
// // 	$('#quest').html(qs[i]);
// // 	function choice(i){
// // 		$("#toi1").html(ch[i][0]);
// // 		$("#toi2").html(ch[i][1]);
// // 		$("#toi3").html(ch[i][2]);
// // 	}
// // 	choice();
	
// // }
// // quiz();
	
// function move(){
// 	$('#btn').on("click", function(){

// 	})
// }


