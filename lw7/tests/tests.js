'use strict';

const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;

describe('Метод getCoffeeMenu', function() {
  it(`Выводить в консоли кофе меню, ошибок не ожидается`, function() {
    assert.doesNotThrow(function() {
      let test = new CoffeeMachine();
      test.getCoffeeMenu();
    });
  });
});
