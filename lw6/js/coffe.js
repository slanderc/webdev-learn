class coffeeMachine{
	
  constructor(pricecoffe, coffe, getcash, remain){
    this.pricecoffe = pricecoffe;
	this.coffe = coffe
    this.getcash = getcash
  };
  
  coffeMenu(){
	  
    var coffeMenu = ['1.Американо - 10р', '2.Латте - 15р', '3.Руссиано - 20р']
    for (var i = 0; i< coffeMenu.length; i++){
      console.log(coffeMenu[i]);
	}
	
  }
  
  chosecoffe(a){
	  
    switch(a){
		
      case 1:
	  
	    this.pricecoffe=10;
	    this.coffe = 1;
	    console.log('Ваш выбор - Американо');
	    return true;
	    break;
		
	  case 2:
	    this.pricecoffe=15;
	    this.coffe = 2;
	    console.log('Ваш выбор - Латте');
	    return true;
	    break;
		
	  case 3:
	    this.pricecoffe=20;
	    this.coffe = 3;
        console.log('Ваш выбор - Руссиано');
	    return true;
	    break;
		
	  default:
	    console.log('Неправильный ввод');
	    return false;
		
    }  
	
  }
  
  setCash(cash){
	  
	if (cash > 1 && cash <100){
	  console.log('Ваши деньги приняты');
	  console.log(cash);

	} else { 
	  console.log('Невалидные средства');
	  cash = 0;
	}
	
	this.getcash = cash;
  }
  
  getRemainCash(){
	  
	if (this.getcash < this.pricecoffe){
	  console.log('Вам не хватает денег')
	  return false;
	  
	} else {
	  var remain = this.getcash - this.pricecoffe;
      console.log('Ваша сдача - ' + remain);
      return true;
	}
	
  }
  
}
var coffeeM = new coffeeMachine();
coffeeM.coffeMenu();
coffeeM.chosecoffe(2);
coffeeM.setCash(58);
coffeeM.getRemainCash();