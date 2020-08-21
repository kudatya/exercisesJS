
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

// Второе задание хаха
  function  isEmpty(obj) {
    for(let key in obj){
           return false;

  }
          return true;
}
  let emptyobj = {};
  alert(isEmpty(emptyobj));
  let notEmptyObj = {
      name: "Alice"
  }
  alert(isEmpty(notEmptyObj));

