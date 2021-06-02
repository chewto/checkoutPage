const select = document.querySelector("#select");
const options = document.querySelector("#options");
const contenidoSelect = document.querySelector("#select .content-select");
const hiddenInput = document.querySelector("#inputSelect");
const container = document.querySelector('.products');

const newPrice1 = document.getElementById('new-price1');
const newPrice2 = document.getElementById('new-price2');
const plus1 = document.getElementById('plus1');
const plus2 = document.getElementById('plus2');
const minus1 = document.getElementById('minus1');
const minus2 = document.getElementById('minus2');
const unit1 = document.getElementById('unit1');
const unit2 = document.getElementById('unit2');
const totalPrice = document.getElementById('total-price');

//imprimiendo productos en pantilla - printing products in screen

let newPrice1V = 55;
let newPrice2V = 75;

let unit1V = 1;
let unit2V = 1;

newPrice1.innerHTML = (newPrice1V*unit1V - 0.1);
newPrice2.innerHTML = (newPrice2V*unit2V - 0.1);

unit1.innerHTML = unit1V;
unit2.innerHTML = unit2V;

let total = (newPrice1V*unit1V - 0.1) + (newPrice2V*unit2V - 0.1) + 19;

plus1.addEventListener('click',()=>{
	++unit1V;
	newPrice1.innerHTML = (newPrice1V*unit1V - 0.1);
	unit1.innerHTML = unit1V;
	totalPrice.innerHTML = (newPrice1V*unit1V -0.1) + (newPrice2V*unit2V - 0.1) + 19;
})

plus2.addEventListener('click',()=>{
	++unit2V;
	newPrice2.innerHTML = (newPrice2V*unit2V - 0.1);
	unit2.innerHTML = unit2V;
	totalPrice.innerHTML = (newPrice1V*unit1V -0.1) + (newPrice2V*unit2V - 0.1) + 19;
})

minus1.addEventListener('click',()=>{
	--unit1V;
	newPrice1.innerHTML = (newPrice1V*unit1V - 0.1);
	unit1.innerHTML = unit1V;
	totalPrice.innerHTML = (newPrice1V*unit1V -0.1) + (newPrice2V*unit2V - 0.1) + 19;
})

minus2.addEventListener('click',()=>{
	--unit2V;
	newPrice2.innerHTML = (newPrice2V*unit2V - 0.1);
	unit2.innerHTML = unit2V;
	totalPrice.innerHTML = (newPrice1V*unit1V -0.1) + (newPrice2V*unit2V - 0.1) + 19;
})

//Selector de pais - country selector

document.querySelectorAll('#options > .option').forEach((option) =>{
	option.addEventListener('click', (e)=>{
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		options.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.country').innerText;
	})
})

select.addEventListener('click', () => {
	select.classList.toggle('active');
	options.classList.toggle('active');
})