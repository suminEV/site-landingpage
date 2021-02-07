$(function() {

	// Кнопка для перехода вверх страницы
	$('#go_to_top').click( function(){ // ловим клик по ссылке с классом go_to_top
		$('html, body').animate({ scrollTop: 0 }, 500); // анимируем скроолинг к верху страницы
		return false; // выключаем стандартное действие
	});

	// Функция которая делает плавный скроллинг к элементу с id или class указанным в атрибуте href ссылки
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = "#" + $(this).attr('href'); // возьмем содержимое атрибута href. В первых скобках указываем или решетку (#) или точку (.), это необходимо для того чтобы указать как искать элемент для перехода, по id или class.
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 20 }, 1000); // анимируем скроллинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});

});


// Счетчик времени
// Set the date we're counting down to
var countDownDate = new Date("Sep 1, 2014 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
	// Get todays date and time
	var now = new Date().getTime();
	// Find the distance between now and the count down date
	var distance = now - countDownDate;
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// Output the result in an element with id="demo"
	//document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	//+ minutes + "m " + seconds + "s ";
	circles[0].update(days, 0);
	circles[1].update(hours, 0);
	circles[2].update(minutes, 0);
	circles[3].update(seconds, 0);
	// If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);

var circles = [];
circles.push(Circles.create({
	id:                  'circles-1',
	radius:              75,
	maxValue:            100000,
	width:               5,
	colors:              ['#2f97ff', '#2f97ff'],
	wrpClass:            'circles-wrp',
	textClass:           'circles-text',
	valueStrokeClass:    'circles-valueStroke',
	maxValueStrokeClass: 'circles-maxValueStroke',
	styleWrapper:        true,
	styleText:           true
}));
circles.push(Circles.create({
	id:                  'circles-2',
	radius:              75,
	maxValue:            24,
	width:               5,
	colors:              ['#d1e8ff', '#2f97ff'],
	wrpClass:            'circles-wrp',
	textClass:           'circles-text',
	valueStrokeClass:    'circles-valueStroke',
	maxValueStrokeClass: 'circles-maxValueStroke',
	styleWrapper:        true,
	styleText:           true
}));
circles.push(Circles.create({
	id:                  'circles-3',
	radius:              75,
	maxValue:            60,
	width:               5,
	colors:              ['#d1e8ff', '#2f97ff'],
	wrpClass:            'circles-wrp',
	textClass:           'circles-text',
	valueStrokeClass:    'circles-valueStroke',
	maxValueStrokeClass: 'circles-maxValueStroke',
	styleWrapper:        true,
	styleText:           true
}));
circles.push(Circles.create({
	id:                  'circles-4',
	radius:              75,
	maxValue:            60,
	width:               5,
	colors:              ['#d1e8ff', '#2f97ff'],
	wrpClass:            'circles-wrp',
	textClass:           'circles-text',
	valueStrokeClass:    'circles-valueStroke',
	maxValueStrokeClass: 'circles-maxValueStroke',
	styleWrapper:        true,
	styleText:           true
}));

// Событие при пролистывании страницы
window.onscroll = function() {scrollFunction()};
var header = document.getElementById("stickyBlock");
var sticky = header.offsetTop;
function scrollFunction() {
	scrollButtonDisplay();
	stickyFunction();
}

// Появление кнопки вверх
function scrollButtonDisplay() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		// document.getElementById("go_to_top").style.display = "block";
		document.getElementById("go_to_top").classList.add("go_to_top_active");
	} else {
		// document.getElementById("go_to_top").style.display = "none";
		document.getElementById("go_to_top").classList.remove("go_to_top_active");
	}
}


// Липкое верхнее меню stickyBlock
function stickyFunction() {
	// if (window.pageYOffset > sticky) {
	if (window.pageYOffset > 300) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}


// Модальное окно "Заказать разработку Landing Page"
var modalOrder = document.getElementById("modalOrder");
// Get the button that opens the modal
var btnOrder1 = document.getElementById("modalBtn1");
var btnOrder2 = document.getElementById("modalBtn2");
var btnOrder3 = document.getElementById("modalBtn3");
var btnOrder4 = document.getElementById("modalBtn4");
var btnOrder5 = document.getElementById("modalBtn5");
// Get the <span> element that closes the modal
var spanOrder = document.getElementsByClassName("closeOrder")[0];
// When the user clicks the button, open the modal 
btnOrder1.onclick = function() {
	modalOrderBlockOnOff("block");
}
btnOrder2.onclick = function() {
	modalOrderBlockOnOff("block");
}
btnOrder3.onclick = function() {
	modalOrderBlockOnOff("block");
}
btnOrder4.onclick = function() {
	modalOrderBlockOnOff("block");
}
btnOrder5.onclick = function() {
	modalOrderBlockOnOff("block");
}
// When the user clicks on <span> (x), close the modal
spanOrder.onclick = function() {
	modalOrderBlockOnOff("none");
}
function modalOrderBlockOnOff(state){
	if(state != "block" && state != "none"){
		console.log("Error. Неверное состояние модального окна");
		return;
	}
	modalOrder.style.display = state;
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modalOrder) {
		modalOrder.style.display = "none";
	}
}

// Модальное окно "Обратный звонок"
var modalCall = document.getElementById("modalCall");
// Get the button that opens the modal
var btnCall = document.getElementById("modalBtnCall");
// Get the <span> element that closes the modal
var spanCall = document.getElementsByClassName("closeCall")[0];
// When the user clicks the button, open the modal 
btnCall.onclick = function() {
	modalCall.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanCall.onclick = function() {
	modalCall.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modalCall) {
		modalCall.style.display = "none";
	}
}

// Событие которое раскрывает блок "расчитать стоимость"
var elem = document.getElementById("btnPrice");
elem.addEventListener("click", function() {
	funcItemDisplay();
});

// Событие которое раскрывает блок индивидуальные услуги
// var services = document.getElementById("services");
// var servicesOption = services.getElementsByTagName("option");
// for (var i = 0; i < servicesOption.length; i++) {
//		servicesOption[i].addEventListener("click", function() {
// 		serviceBlock("main");
// 	});
// }
var services = document.getElementById("services");
services.addEventListener("change", function() {
	serviceBlock("main");
});

// Событие click на элементы input при котором происходит перерасчет общей суммы
var contentBlockHidden = document.getElementById("contentBlockHidden");
var elemsInput = contentBlockHidden.getElementsByTagName("input");
for (var i = 0; i < elemsInput.length; i++) {
	elemsInput[i].addEventListener("change", function() {
		totalPrice();
	});
}

// Функция которая скрывает/раскрывает блок "расчитать стоимость"
function funcItemDisplay() {
	var contentBlockHidden = document.getElementById("contentBlockHidden");
	var elem = document.getElementById("btnPrice");
	var content = contentBlockHidden;
	if (content.style.maxHeight){
		content.style.maxHeight = null;
		elem.innerHTML = "Расчитать примерную стоимость проекта";
	} else {
		// content.style.maxHeight = content.scrollHeight + "px";
		// content.style.maxHeight = "2000px";
		elem.innerHTML = "Скрыть блок расчета";
		serviceBlock();
	}
}

// Функция которая раскрывает/скрывает блок "Индивидуальные услуги"
function serviceBlock( checkBtn = "hidden") {
	console.log("func serviceBlock");
	var services = document.getElementById("services");
	var individualChoiceOfServices = document.getElementById("individualChoiceOfServices");

	if (checkBtn == "hidden") {
		services.value = "standard";
		var individualChoiceOfServices = document.getElementById("individualChoiceOfServices");
		var elemsInput = individualChoiceOfServices.getElementsByTagName("input");
		for (var i = 0; i < elemsInput.length; i++) {
			elemsInput[i].checked = true;
		}
	}

	if (services.value == "standard") {
		individualChoiceOfServices.style.display = "none";
	} else {
		individualChoiceOfServices.style.display = "block";
	}

	totalPrice();
}

// Функция которая подсчитывает и выводит общую сумму
function totalPrice() {
	var price = 0;
	var services = document.getElementById("services");
	var totalPrice = document.getElementById("totalPrice");

	if (services.value === "standard") {
		price = 21000;
	} else {
		var icos1 = document.getElementById("developmentOfPrototypeAndDesign");
		var icos2 = document.getElementById("templateLayout");
		// var icos3 = document.getElementById("writingUniqueText");
		var icos4 = document.getElementById("installationOnCMS");
		var icos5 = document.getElementById("uploadToHosting");	
		if(icos1.checked == true) {
			price += 6000;
		}
		if(icos2.checked == true) {
			price += 5000;
		}

		var writingUniqueText = document.getElementById("writingUniqueText");
		writingUniqueTextValue = writingUniqueText.value;
		if(writingUniqueTextValue <= 0) {
			writingUniqueTextValue = 0;
		}
		writingUniqueTextValue = Math.ceil(writingUniqueTextValue * 0.3);
		price += writingUniqueTextValue;

		if(icos4.checked == true) {
			price += 8000;
		}
		if(icos5.checked == true) {
			price += 2000;
		}
	}

	var addiS1 = document.getElementById("calculator");
	var addiS2 = document.getElementById("chat");
	var addiS3 = document.getElementById("backСall");
	if(addiS1.checked == true) {
		price += 3000;
	}
	if(addiS2.checked == true) {
		price += 1000;
	}
	if(addiS3.checked == true) {
		price += 1000;
	}

	totalPrice.innerHTML = price;
	stagesOfPayment ( price );
}

// Функция которая вычисляет этапы оплаты
function stagesOfPayment ( price ) {
	var i = 0;
	var stagesOfPayment = document.getElementById("stagesOfPayment");
	stagesOfPayment.innerHTML = "";

	if(price == 0) {
		stagesOfPayment.innerHTML += "<p>Вы ничего не выбрали</p>";
	} else {
		var priceMakeup = 5000;
		var icos1 = document.getElementById("developmentOfPrototypeAndDesign");
		var icos2 = document.getElementById("templateLayout");
		// var icos3 = document.getElementById("writingUniqueText");
		var icos4 = document.getElementById("installationOnCMS");
		var icos5 = document.getElementById("uploadToHosting");
		var addiS1 = document.getElementById("calculator");
		var addiS2 = document.getElementById("chat");
		var addiS3 = document.getElementById("backСall");
		var services = document.getElementById("services");

		if (services.value === "standard") {
			if(addiS1.checked == true) {
				priceMakeup += 3000;
			}
			if(addiS2.checked == true) {
				priceMakeup += 1000;
			}
			if(addiS3.checked == true) {
				priceMakeup += 1000;
			}
			i += 1;
			stagesOfPayment.innerHTML += "<p>" + i + " этап - Дизайн - <span class='stagesNumber'>6000</span>руб.</p>";
			i += 1;
			stagesOfPayment.innerHTML += "<p>" + i + " этап - Верстка (в стоимость верстки суммируются выбраные дополнительные услуги) - <span class='stagesNumber'>" + priceMakeup + "</span>руб.</p>";
			i += 1;
			stagesOfPayment.innerHTML += "<p>" + i + " этап - Установка на CMS - <span class='stagesNumber'>8000</span>руб.</p>";
			i += 1;
			stagesOfPayment.innerHTML += "<p>" + i + " этап - Загрузка на хостинг и подключение доменого имени - <span class='stagesNumber'>2000</span>руб.</p>";
		} else {
			if(icos1.checked == true) {
				i += 1;
				stagesOfPayment.innerHTML += "<p>" + i + " этап - Дизайн - <span class='stagesNumber'>6000</span>руб.</p>";
			}
			if(icos2.checked == true || addiS1.checked == true || addiS2.checked == true || addiS3.checked == true) {
				if(icos2.checked == true) {
					priceMakeup = 5000;
					if(addiS1.checked == true) {
						priceMakeup += 3000;
					}
					if(addiS2.checked == true) {
						priceMakeup += 1000;
					}
					if(addiS3.checked == true) {
						priceMakeup += 1000;
					}
					var writingUniqueText = document.getElementById("writingUniqueText");
					writingUniqueTextValue = writingUniqueText.value;
					writingUniqueTextValue = Math.ceil(writingUniqueTextValue * 0.3);
					priceMakeup += writingUniqueTextValue;
					i += 1;
					stagesOfPayment.innerHTML += "<p>" + i + " этап - Верстка (в стоимость верстки суммируются выбраные дополнительные услуги и написание текста) - <span class='stagesNumber'>" + priceMakeup + "</span>руб.</p>";
				} else {
					priceMakeup = 0;
					if(addiS1.checked == true) {
						priceMakeup += 3000;
					}
					if(addiS2.checked == true) {
						priceMakeup += 1000;
					}
					if(addiS3.checked == true) {
						priceMakeup += 1000;
					}
					var writingUniqueText = document.getElementById("writingUniqueText");
					writingUniqueTextValue = writingUniqueText.value;
					writingUniqueTextValue = Math.ceil(writingUniqueTextValue * 0.3);
					priceMakeup += writingUniqueTextValue;
					i += 1;
					stagesOfPayment.innerHTML += "<p>" + i + " этап - Подключение дополнительных услуг - <span class='stagesNumber'>" + priceMakeup + "</span>руб.</p>";
				}
			}

			if(icos4.checked == true) {
				i += 1;
				var priceCMS = 8000;
				if(i < 3) {
					var writingUniqueText = document.getElementById("writingUniqueText");
					writingUniqueTextValue = writingUniqueText.value;
					writingUniqueTextValue = Math.ceil(writingUniqueTextValue * 0.3);
					priceCMS += writingUniqueTextValue;
				}
				stagesOfPayment.innerHTML += "<p>" + i + " этап - Установка на CMS - <span class='stagesNumber'>" + priceCMS + "</span>руб.</p>";
			}
			if(icos5.checked == true) {
				i += 1;
				stagesOfPayment.innerHTML += "<p>" + i + " этап - Загрузка на хостинг и подключение доменого имени - <span class='stagesNumber'>2000</span>руб.</p>";
			}
		}
	}

	var content = contentBlockHidden;
	content.style.maxHeight = content.scrollHeight + "px";
}

// Мобильное меню
function openNav() {
	document.getElementById("mobyle-menu").style.width = "100%";
}
function closeNav() {
	document.getElementById("mobyle-menu").style.width = "0%";
}
$('#mobyle-menu a').bind('click', function(){
	closeNav();
});