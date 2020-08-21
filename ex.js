
// Первое задание ветка
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
  workWithObject();