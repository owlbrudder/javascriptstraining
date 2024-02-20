let myName = "Rumplestiltskin";
let addr, zip, state;
addr = "Hinundayan";
zip = 6609;
state = "Decrepit";
console.log(myName, addr, zip, state);
state = "Redeemed";
var myVariable = "Variable";
const mySurname = "Hutcheson";
console.log(state, myVariable, mySurname);
let meSelf = 123.45;
let meBrudder = 654.32;
let add = meSelf + meBrudder;
let sub = meSelf - meBrudder;
let mul = meSelf * meBrudder;
let div = meSelf / meBrudder;
let mod = 10;
mod %= 3;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log(mySurname + meSelf);

const randomNumber = 13;

document.querySelector("#myform > input").defaultValue = "1234";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#amount").addEventListener("change", function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Value changed to " + document.getElementById("amount").value);
  });

  document.querySelector("#myform").addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let value = document.getElementById("amount").value;
    value = parseInt(value);
    console.log("Input Value Type" + value);
    console.log("Sum of two values");
    console.log(randomNumber + value);
  });
});

function myFunc(myName = "master") {
  console.log("Hello " + myName);
  return "completed";
}
myFunc("Doug");
myFunc("Don");
myFunc("Dave");
myFunc("Dora");
myFunc();

const person = {
  Firstname: "Doug",
  lastname: "Hutcheson",
  age: 72,
  education: true,
  married: true,
  siblings: ["David", "Donald", "Bon", "AiAi", "Hilda", "TingTing", "Nino"],
  //  greeting: function () {
  greeting() {
    console.log("Hello, my name is " + this.Firstname);
  },
};

console.log("person first name = " + person.Firstname);
console.log(person.siblings[2]);
person.greeting();
person.Firstname = "Donut King";
console.log("person first name = " + person.Firstname);
person.greeting();

const dice = 6;
switch (dice) {
  case 1:
    console.log("You got 1");
    break;
  case 2:
    console.log("Two, two the lily white boys");
    break;
  case 3:
    console.log("Woo,ooh, we're half way there");
    break;
  case 4:
    console.log("Wow. More than half");
    break;
  case 5:
    console.log("Yhatzee here I come");
    break;
  case 6:
    console.log("Come in spinner");
    break;

  default:
    console.log("You got a bad die");
    break;
}

const value = `Hello ${person.Firstname}`;
console.log(value);

const myNames = ["Barry", "Trevor", "Bwuce"];
const allNames = person.siblings.concat(myNames);
console.log(allNames);

allNames.forEach((thisName) => {
  console.log(thisName);
});

const gas = [20, 30, 50];
function totaliser(arr) {
  //one way
  let y = 0;
  for (let x = 0; x < arr.length; x++) {
    y += arr[x];
  }
  //or another
  arr.forEach((val) => {
    y += val;
  });
  return y;
}
console.log(totaliser(gas));

let person1 = { name: "doug" };
let person2 = person1; //object so passed by reference
let person3 = { ...person1 }; //forced to pass by value
person2.name = "trevor";
console.log(person1.name);
console.log(person2.name);
console.log(person3.name);

let val1 = null;
let val2 = val1;
val2 = 5;
console.log(typeof val1);
console.log(val1); //although null is reported as object it is passed by value
console.log(val2);

//boolean conditions: all the following are false
console.log("empty double quote string is " + ("" ? "Truthy" : "Falsy"));
console.log("empty single quote string is " + ("" ? "Truthy" : "Falsy"));
console.log("0 is " + (0 ? "Truthy" : "Falsy"));
console.log("negative zero is " + (-0 ? "Truthy" : "Falsy"));
console.log("NaN is " + (NaN ? "Truthy" : "Falsy"));
console.log("false is " + (false ? "Truthy" : "Falsy"));
console.log("null is " + (null ? "Truthy" : "Falsy"));
console.log("undefined is " + (undefined ? "Truthy" : "Falsy"));

function example() {
  const myname = "Doug";
  // this is local in scope

  becomesGlobal = "A global variable";
  //not given a keyword so used to be created in global scope
}

//console.log(myname); //error undefined
//console.log(becomesGlobal); //used to work okay

function morning(name) {
  //callback function
  return `Good morning. My name is ${name.replace("d", "D").repeat(3)}`;
}

function greet(name, cb) {
  //higher order function
  //callback can be called even within interpolation
  console.log(`${cb(name)}`);
}

greet("doug", morning);

const staff = [
  {
    name: "Doug",
    position: "Senior Developer",
    age: 72,
    id: 1,
    salary: 110000,
  },
  {
    name: "Laurie",
    position: "Hardware Expert",
    age: 74,
    id: 2,
    salary: 130000,
  },
  {
    name: "Rowena",
    position: "Construction Manager",
    age: 55,
    id: 3,
    salary: 190000,
  },
  { name: "Ting", position: "Child Minder", age: 43, id: 4, salary: 90000 },
];

function showPerson(person) {
  Object.keys(person).forEach(function (key) {
    console.log(key);
  });
  console.log(person);
}

//using callback function
staff.forEach(showPerson);

//using inline function
staff.forEach(function (item) {
  console.log(item.position.toUpperCase());
});

//map function returns new array
const ages = staff
  .map(function (person) {
    return {
      familyName: person.name + " Bunglefoot",
      oldAge: person.age - 20,
    };
  })
  .join("");

console.log(ages);

function build_staff() {
  //display the data
  var displayHTML =
    "<div id='staff'><ol style='list-style-type:upper-roman' class='staff'>" +
    "<li>This is a line item</li>" +
    "<li>This is anuvver line item</li>" +
    "<li>This is a third line item</li>";

  displayHTML += staff
    .map(function (person) {
      var thisOne = "<li>" + person.name + "</li>";
      console.log(thisOne);
      return thisOne;
    })
    .join("");
  // = replaces page, += appends to page
  displayHTML += "</ol></div>";
  console.log("displayHTML = " + displayHTML);
  document.body.innerHTML += displayHTML;
}

build_staff();

const youngPeople = staff.filter(function (person) {
  return person.age < 70;
});
var myDiv = document.getElementById("itemDiv");

function build_young() {
  var youngHTML = "<ol>";
  var looper = 0;
  youngPeople.forEach(function (person) {
    youngHTML +=
      "<li" +
      (looper++ % 9 ? "" : " class='special last-man' ") +
      ">" +
      Object.values(person).join(" ") +
      "</li>";
  });
  youngHTML +=
    "<li class='special last-man'>Last man standing</li></ol><b></b>";
  myDiv.innerHTML += youngHTML;
}
build_young();

const chosenPerson = staff.find(function (person) {
  return person.id === 3;
});

document.body.innerHTML += "<p>Chosen People</p><p></p";
document.body.innerHTML += Object.entries(chosenPerson).join(":  ");
document.body.innerHTML += "</p><b>";

const total = staff.reduce(function (acc, curr) {
  acc += curr.salary;
  console.log(curr);
  return acc;
}, 100); //note the intitial value and return type is defined here

document.body.innerHTML += "<p>";
document.body.innerHTML += `Total salaries: ${total}:  `;
document.body.innerHTML += `Log of salaries: ${Math.log(total)}`;
document.body.innerHTML += "</p><b>";

//random can be zero but not one
document.body.innerHTML += "<p>";
document.body.innerHTML += `${Math.random()}</p><b>`;
document.body.innerHTML += `${Math.random()}</p><b>`;
document.body.innerHTML += `${Math.floor(Math.random() * 10) + 1}</p><b>`;
document.body.innerHTML += `${Math.floor(Math.random() * 10) + 1}</p><b>`;
document.body.innerHTML += "</p><b>";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesady",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
console.log(date);
console.log(
  days[date.getDay()] +
    " " +
    months[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    date.getFullYear()
);

const weddingDay = new Date("8/10/2021");
console.log(
  days[weddingDay.getDay()] +
    " " +
    months[weddingDay.getMonth()] +
    " " +
    weddingDay.getDate() +
    " " +
    weddingDay.getFullYear()
);
function monthDiff(d1, d2) {
  var d1Y = d1.getFullYear();
  var d2Y = d2.getFullYear();
  var d1M = d1.getMonth();
  var d2M = d2.getMonth();

  return d2M + 12 * d2Y - (d1M + 12 * d1Y);
}

console.log(
  `Since we married: ${Math.floor(
    monthDiff(weddingDay, date) / 12
  )} years and ${monthDiff(weddingDay, date) % 12} months`
);

function allowModals() {
  for (const i of document.getElementsByTagName("iframe")) {
    if (!i.sandbox.supports("allow-modals")) {
      console.warn(
        "Your browser doesn't support the 'allow-modals' attribute :("
      );
      break;
    }
    if (i.sandbox.contains("allow-modals")) continue;
    console.info(i, "doesn't allow modals");
    i.sandbox.add("allow-modals");
    console.info(i, "now allows modals");
  }
}
allowModals();

// window.alert("Gwacious!");
// window.confirm("Gwacious!");

console.log(window);
console.dir(document);

const items = document.getElementsByTagName("li");
for (var item of items) {
  item.style.color = "purple";
}

const betterItems = [...items];
betterItems.forEach(function (item) {
  item.style.color = "orange";
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
delay(100).then(() => {
  const result = (document.getElementById("itemDiv").style.backgroundColor =
    "lightgrey");
  console.log(result);

  const special = (document.querySelector(".staff").style.backgroundColor =
    "blue");
  console.log(special);
});
delay(100).then(() => {
  const lastItem = document.querySelector("#staff > ol > li:last-child");
  console.log("This is the last item ");
  console.log(lastItem);
  lastItem.style.backgroundColor = "green";

  const list = document.querySelectorAll(".special");
  console.log(list);
  list.forEach(function (item) {
    console.log(item);
    item.style.color = "red";
  });

  const result = document.querySelector("#staff > ol");
  const allKids = result.childNodes;
  console.log(allKids);
  const kids = result.children;
  console.log(kids);

  console.log(result.firstChild.innerHTML);
  console.log(result.lastChild.innerHTML);
});

delay(100).then(() => {
  // const heading = document.querySelector("h2");
  // const parent = heading.parentElement;
  // parent.style.color = "teal";

  const first = document.querySelector("#staff > ol > li");
  console.log(first.innerHTML);
  const second = first.nextSibling;
  console.log(second.innerHTML);

  const last = document.querySelector("#staff > ol > li:last-child");
  console.log(last.previousSibling.innerHTML);
  console.log(last.previousElementSibling.innerHTML); //skips whitespace elements

  const mystaff = document.querySelector("#staff > ol");
  console.log(mystaff);
  const fiddlybits = mystaff.childNodes;
  console.log(fiddlybits);

  const nuvveritem = document.getElementById("staff");
  console.log(nuvveritem.childNodes[0].childNodes[1].childNodes[0].nodeValue);
  const nuvol = nuvveritem.childNodes[0];
  console.log(nuvol);
  const nuvli = nuvol.childNodes[1];
  console.log(nuvli);
  const nuvverval = nuvli.textContent;
  console.log(nuvverval);
  console.log(nuvli.childNodes[0].nodeValue);
  console.log(
    document.getElementsByTagName("BUTTON")[0].childNodes[0].nodeValue
  );
});

delay(100).then(() => {
  const first = document.querySelector(".first");
  let attr = first.getAttribute("class");
  console.log("Class = " + attr);
  attr = first.getAttribute("id");
  console.log("Id = " + attr);
  const link = document.getElementById("link");
  console.log(link.getAttribute("href"));
  const last = link.nextElementSibling;
  last.setAttribute("class", "first");
  last.textContent = "I also have some class now";
  console.log(last);

  const links = document.querySelectorAll(".first");
  console.log(links);
});

delay(100).then(() => {
  const firsth = document.getElementById("head1");
  const secondh = document.getElementById("head2");
  const thirdh = document.getElementById("head3");

  const classVal = firsth.className;
  console.log(classVal);
  secondh.className = "colors text";
  console.log(secondh.classList);

  // thirdh.classList.add('colors');
  // thirdh.classList.add('text');
  thirdh.classList.add("text", "colors");
  console.log(thirdh.classList);
  thirdh.classList.remove("text");
  console.log(thirdh.classList);
  let result = thirdh.classList.contains("colors");
  console.log(result);
});

delay(100).then(() => {
  const result = document.querySelector("#headers");
  const parent = result.parentNode;
  const firsthdr = document.querySelector(".red");

  //create empty element
  const bodyDiv = document.createElement("div");
  //create text node
  const text = document.createTextNode("A simple body div");
  //attach the text
  bodyDiv.appendChild(text);
  //attach the div to the document
  document.body.appendChild(bodyDiv);
  document.body.insertBefore(bodyDiv, parent);

  const heading = document.createElement("h2");
  const htext = document.createTextNode("A dynamic heading");
  heading.appendChild(htext);
  heading.classList.add("blue");
  result.insertBefore(heading, firsthdr);

  const smallHdr = document.createElement("h6");
  const smallTxt = document.createTextNode("I am a small heading");
  smallHdr.classList.add("color");
  smallHdr.appendChild(smallTxt);
  document.body.replaceChild(smallHdr, bodyDiv);

  console.log(result.children);
});

delay(100).then(() => {
  const head2 = document.createElement("h2");
  head2.innerText = "More dynamic dynamite";
  console.log(head2);
  document.body.prepend(head2);

  const getback = document.querySelector("#head1");
  getback.remove();

  const getback2 = document.querySelector("#headers");
  console.log(getback2);
  const thishead = getback2.querySelectorAll("h2");
  console.log(thishead);
  const getback3 = thishead[1];
  console.log(getback3);
  getback2.removeChild(getback3);
  console.log(thishead);
});

delay(100).then(() => {
  const list = document.getElementById("mylist");
  const div = document.getElementById("itemDiv");
  const item = document.querySelector(".special");

  console.log(div.textContent);
  console.log(list.innerHTML);

  const ol = document.createElement("ol");
  ol.innerHTML = '<li id="item1">Nitem</li><li id="item2">Nuvver item</li>';
  document.body.prepend(ol);
});

delay(100).then(() => {
  const random = document.querySelector(".random");
  console.log(random.style);
  //can change styles individually
  //random.style.backgroundColor = 'green';
  //note in CSS it is background-color but in JS we must use camelcase

  random.classList.add("title"); //use the css file setting
});

delay(100).then(() => {
  //go eventing
  const btn = document.querySelector("#dont-touch");
  const woohoo = document.querySelector("#woohoo");

  function changeColours(e) {
    console.log(e.target);
    this.innerHTML =
      this.innerHTML == "Ooooh, <strong>nice!</strong>"
        ? "Don't <strong>touch me</strong>"
        : "Ooooh, <strong>nice!</strong>";

    if (e.target.classList.contains("redbtn")) {
      e.target.classList.toggle("redbtn");
      e.target.classList.toggle("bluebtn");
    } else if (e.target.classList.contains("bluebtn")) {
      e.target.classList.toggle("bluebtn");
      e.target.classList.toggle("redbtn");
    } else {
      e.target.classList.toggle("redbtn");
    }
  }

  btn.addEventListener("click", changeColours);
  woohoo.addEventListener("click", changeColours);

  const headiv = document.querySelector("#events");
  const myhead = headiv.querySelector("h2");
  const mybtn = headiv.querySelector("#btn-play");
  mybtn.addEventListener("click", function () {
    console.log("That hurts!");
  });
  mybtn.addEventListener("mousedown", function () {
    console.log("Under pressure ..");
  });
  mybtn.addEventListener("mouseup", function () {
    console.log("Ahhh, the relief");
  });
  myhead.addEventListener("mouseenter", function () {
    console.log("EEEEK! A mouse");
    this.classList.toggle("red");
  });

  //if using arrow functions, 'this' keyword does not work the same
  myhead.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    console.log(this);
    // this.classList.toggle("red"); <== won't work
  });

  myhead.addEventListener("mouseleave", function () {
    console.log("Phew! A snake got it .. EEEEK! A snake");
    myhead.classList.toggle("red");
  });

  const myinput = document.querySelector("#amount");
  console.log(myinput);
  myinput.addEventListener("keypress", function (e) {
    console.log("Key pressed " + e.key);
    console.log("Event type " + e.type);
    console.log(e.currentTarget);
  });
  myinput.addEventListener("keyup", function (e) {
    console.log("Key up " + e.key);
  });
  myinput.addEventListener("keydown", function (e) {
    console.log("Key down " + e.key);
  });

  const link = document.querySelector("#link");
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });

  const btns = document.querySelectorAll(".btn");
  console.log(btns);
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget);
      e.currentTarget.style.color =
        e.currentTarget.style.color == "black" ? "white" : "black";
    });
  });
});
