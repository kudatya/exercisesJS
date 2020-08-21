
// Первое задание ветка веточка
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

// Второе задание хаха
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

          obj[key] *= 2;
      }
  }
  multiplyNumeric(menu);

  alert(menu.title);

