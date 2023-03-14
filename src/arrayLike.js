const arrayLike = document.querySelector("div");

const tmp = [...arrayLike];

Array.from(arrayLike);
Array.prototype.slice.call(arrayLike);
Array.apply(null, arrayLike);
Array.prototype.concat.apply([], arrayLike);
