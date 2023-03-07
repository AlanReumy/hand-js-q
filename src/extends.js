// 寄生组合式继承
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.prototype.play = () => {
  console.log("play");
};

function Children(name, age, friends) {
  Parent.call(this, name, age);
  this.friends = friends;
}

Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;
