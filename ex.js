
// Первое задание
  function workWithObject() {
      let user = {
          name   :  "John",
          surname:   "Smith"
      }
      alert(user.name +"  "+user.surname);
      user.name = "Peter"
      alert(user.name);
      delete user.name;
      alert(user.surname);
  }
 // workWithObject();

// Второе задание
  function  isEmpty(obj) {
    for(let key in obj){
           return false;

  }
          return true;
}
  let emptyobj = {};
  //alert(isEmpty(emptyobj));
  let notEmptyObj = {
      name: "Alice"
  }
  //alert(isEmpty(notEmptyObj));

// ex. 4 Сумма свойств объекта
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
  function sumSalaries(obj) {
      for (let key in obj){
          sum += obj[key];
      }
      alert(sum);
  }
  //sumSalaries(salaries);

  // ex.5 Умножаем все числовые свойства на 2
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
      for(let key in obj){
          if(typeof obj[key] == 'number') {
              obj[key] *= 2;
          }
      }
  }
 // multiplyNumeric(menu);

  //alert(menu.width);

  console.log(1);


  // задачи Методы объекта, "this"

// Создайте калькулятор
  let calculator = {
      read(){
          this.number1 = +prompt('a?', 0);
          this.number2 = +prompt('b?', 0);
      },
      sum(){
         return this.number1 + this.number2;
     },

     mul(){
         return this.number1 * this.number2;
     }
  };

  /*calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );*/

  
  // Цепь вызовов

  let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
  };

 // ladder.up().up().down().showStep();

  // ex 2 calculator
  function Calculator2(){
      this.read = function (num1, num2) {
          this.num1 = +prompt("Number1",0);
          this.num2 = +prompt("Number1",0);
          return this.num1, this.num2;
      }
      this.sum = function () {
          return  sum = this.num1 + this.num2;
      }
      this.mul = function () {
          return mul = this.num1 * this.num2;
      }
      this.div = function () {
          return div = this.num1 / this.num2;
      }
      this.dim = function () {
          return dim = this.num1 - this.num2;
      }
  }
  /*let calculator2 = new Calculator2();
  calculator2.read();

  alert( "Sum=" + calculator2.sum() );
  alert( "Mul=" + calculator2.mul() );
  alert( "Div=" + calculator2.div() );
  alert( "Dim=" + calculator2.dim() );*/

  // ex Accumulator
  function Accumulator(startingValue) {
      this.startingValue = startingValue;
      this.read = function () {
          this.addValue = +prompt("Number1",0);
          this.startingValue += this.addValue;
          return this.startingValue;
      }

      this.val = function () {
          let val = 0;
          return val += this.startingValue;
      }
  }
  let accumulator = new Accumulator(1); // начальное значение 1
  accumulator.read();
  alert("Сумма значений:  " + accumulator.val() );
