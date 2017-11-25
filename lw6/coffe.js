var cenanapitka = 0;
var napitok =0;
var buf =0;
var getcash = 0;
class coffeeMachine{
  constructor(){};
  coffeMenu(){
    var coffeMenu = ['1.Американо - 10р', '2.Латте - 15р', '3.Руссиано - 20р']
    for (var i = 0; i< coffeMenu.length; i++){
      console.log(coffeMenu[i]);
	}
  }
  chosecoffe(a){
    switch(a){
      case '1':
	    cenanapitka=10;
	    napitok = 1;
		console.log('Ваш выбор - Американо')
	    break;
	  case '2':
	    cenanapitka=15;
	    napitok = 2;
		console.log('Ваш выбор - Латте')
	    break;
	  case '3':
	    cenanapitka=20;
	    napitok = 3;
		console.log('Ваш выбор - Руссиано')
	    break;
	  default:
	    console.log('Неправильный ввод');
    }  
  return cenanapitka, napitok;
  }
  setCash(cash){
	if (cash == 1 || cash == 2 || cash == 5 || cash == 10 || cash == 50 || cash == 100){
	  console.log('Ваши деньги приняты');
	  console.log(cash);
	} else{ 
	    console.log('Невалидные средства');
	    cash = 0;
	  }
	getcash = cash
	return getcash;
  }
  getRemainCash(){
	if (getcash < cenanapitka){
	  console.log('Вам не хватает денег')
	} else {
	    var remain = getcash - cenanapitka;
        console.log('Ваша сдача - ' + remain);
	  }
  }
}
var coffeeM = new coffeeMachine();
coffeeM.coffeMenu();
coffeeM.chosecoffe('2');
coffeeM.setCash(50);
coffeeM.getRemainCash();