// Excercise  No 1
// Task No 1 

alert("Welcome to JavaScript"); 


// Task No 2

alert("Error! Please enter a valid password");


// Task No 3 

alert("Welcome to JS land... \n Happy Coding");

// Task No 4

alert("Welcome to JS Land");
alert("Happy Coding");

// Excercise  No 2
// Task No 1 

var username;


// task no 2 
  var myName = "Muhammad Aamir Noor";


//   // task no 3

  var message = "Hello world";
  alert(message);


// task no 4

var name  = "Muhammad Aamir Noor";
var age = "25";
var course = "Certified Moble Application Development";

alert(name);
alert(age);
alert(course);


// task no 5


alert("Pizza \npizz \npiz \npi \np");

// task no 6

var email = "maamirnoor096@gmail.com";
alert("my email address is "+ email);


// task no 7


var book = "A smarter way to learn JavaScript";

alert("I am trying to learn from the book "+book);



// task no 8

document.write("Yah! i can write HTML content through JavaScript");

// task no 9

var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);

// Excercise no 3

// task no 1

var age = 25;
alert("I am " +age+ " years old");


// task no 2

var count = 0;
count++;
alert("you have visited "+ count +" time");


//  task no 3 

var bdayYear = 1994;
document.writeln("My Birthday date is " + bdayYear + "\n");
document.writeln("Data type of  my declared variable is a number");


// task no 4

var visitorName = "John Doe";
var productTitle = "T-Shirts";
var quantity = 5;
document.write(visitorName+" ordered " + quantity + " "+ productTitle + " on XYZ Clothing store");


// Excercise No 4

// task no 1 

var num1,num2,num3

// task no 2
//  Legal variable
var $name,_name,name,fullName,Full;


// Illegal Variable

// var 1name, full name, full-name, void, #name


// task no 3

var character = "numbers";
var $dollar  = "$" ;
var underScore = "_";
var sensitive = "sensitive";
var keyword = "Keyword";
document.writeln("<h1>Rules for naming JS variables</h1><br><br><br>");
document.writeln("Variable names can only contain "+ character + "," + $dollar + " and "+ underScore +". For example $my_1stVariable<br>");
document.writeln("Variable names are case " + sensitive +"<br>");
document.writeln("Variable names should not be JS "+keyword);


// Excercise no 5

// task no 1 

var num1=3;
var  num2= 5;
var result =num1+num2;
document.writeln("Sum of "+ num1 +" and "+ num2 +" is "+ result);


// task no 2 

var num1=3;
var  num2= 5;
var result =num1+num2;
document.writeln("Sum of "+ num1 +" and "+ num2 +" is "+ result +"<br>");
result = num1-num2;
document.writeln("Subtraction of "+ num1 +" and "+ num2 +" is "+ result+"<br>");
result = num1*num2;
document.writeln("Multiply of "+ num1 +" and "+ num2 +" is "+ result+"<br>");
result = num1/num2;
document.writeln("Divison "+ num1 +" and "+ num2 +" is "+ result+"<br>");
result = num1%num2;
document.writeln("Modulus "+ num1 +" and "+ num2 +" is "+ result+"<br>");


// task no 3

var  num;
document.writeln("Value after variable declaration is: " +num+ "<br>");
num = 5;
document.writeln("Inital Value: " +num+ "<br>");
num++;
document.writeln("Value after increment is: "+num+"<br>");
num+=7;
document.writeln("Value after addition is: "+num+"<br>");
num--;
document.writeln("Value after decrement is: "+num+"<br>");
num%=3;
document.writeln("The reminder is: "+num);


// task no 4

    var ticketPrice = 600;
    var totalPrice = ticketPrice*5;
    document.writeln("Total cost to buy 5 tickets to a movie is "+ totalPrice+ "PKR");


// task no 5

var num = 4;
document.writeln("Table of "+num+"<br>");
for(var i=1; i<=10; i++){
    document.writeln(num+" x "+ i + " = " + num*i+ "<br>")
}


// task no 6 


var celTemp =  25;
var farTemp = 70;
var celTempResult = (farTemp-32)*5/9;
var farTempResult = (celTemp*9/5)+32;
document.writeln(celTemp+"<sup>0</sup>C is "+ farTempResult + "<sup>0</sup>C <br>");
document.writeln(farTemp+"<sup>0</sup>C is "+ celTempResult + "<sup>0</sup>C");


// task no 7 


document.writeln("<h1>Shopping Cart</h1> <br><br><br>");
var item1 = 650;
var item2 = 100;
var quantity1= 3;
var quantity2 = 7;
var shippingCharges = 100;
var totalCost = (item1*quantity1)+(item2*quantity2)+shippingCharges;
document.writeln("Price of item 1 is " +item1+ "<br>");
document.writeln("Quantity of item 1 is " +quantity1+ "<br>");
document.writeln("Price of item 2 is " +item2+ "<br>");
document.writeln("Quantity of item 2 is " +quantity2+ "<br>");
document.writeln("Shipping Charges "+ shippingCharges + "<br><br><br>");
document.writeln("Total cost of your order is "+totalCost);


// task no 8 

document.writeln("<h1>Marksheet</h1><br><br>");
var totalMarks = 980;
var obtMarks = 804;
var percentage = (obtMarks/totalMarks)*100;
document.writeln("Total Marks: " + totalMarks +"<br>");
document.writeln("Obtained Marks: " + obtMarks+ "<br>");
document.writeln("Percentage: " +percentage+"%");


// task no 9

var dollar = 10;
var riyal = 25;
document.writeln("Currency in PKR<br><br>");
var total, dollarPKR, riyalPKR;
dollarPKR = dollar * 104.80;
riyalPKR = riyal * 28;
total = dollarPKR+riyalPKR;
document.writeln("Total Currency in PKR: "+total);

// task no 10 

var num = 5;
var total = ((num+5)+(num*10))/2;
document.writeln("Total in on expression: "+total);

// task no 11 

var currnetYear = 2020;
var birthYear = 1994;
var age = currnetYear-birthYear;
document.writeln("Your age is: "+age);


// task no 12 

var radius=20,circum,area, pi=3.142;
document.writeln("<h1>The Geometrizer</h1><br><br>");
document.writeln("Radius of a circle: "+radius+"<br>");
circum=2*pi*radius;
document.writeln("The Circumference is: "+circum+"<br>");
area= pi*radius*radius;
document.writeln("The area is: "+area);

// task no 13

document.writeln("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br><br><br><br>");
var favSnack = "lays";
var currentAge = 15;
var maxAge = 65;
var amountSnack = 3;
document.writeln("Favourite Snack: " + favSnack + "<br>");
document.writeln("Current age: " + currentAge + "<br>");
document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
document.writeln("Amount of snack per day: " + amountSnack + "<br>");
var total = maxAge-currentAge;
total*=amountSnack;
document.writeln("You will need " + total + " lays to last you until the ripe old age  of " + maxAge);



// Exercise No 6 to 9

// task no 1

document.writeln("Result: <br>");
var a = 10;
document.writeln("The Value of a is: "+a+"<br>");
document.writeln("........................................<br><br><br>");
document.writeln("The value of ++a is: "+ ++a +"<br>");
document.writeln("Now the value of a is: "+a+"<br><br>");

document.writeln("The value of a++ is: "+ a++ +"<br>");
document.writeln("Now the value of a is: "+a+"<br><br>");

document.writeln("The value of --a is: "+ --a +"<br>");
document.writeln("Now the value of a is: "+a+"<br><br>");

document.writeln("The value of a-- is: "+ a-- +"<br>");
document.writeln("Now the value of a is: "+a+"<br><br>");

// task no 2

var a =2 , b=1;
var result= --a - --b + ++b + b--;
// //          1   -  0  + 1   +  1
--a;
// //0
--a - --b
// // -1  -  -1

--a - --b + ++b;
// -2  -  -2 +  -1
--a  -  --b  + ++b + b--;
//-3 -  -2   +  -1 + -1
document.writeln("a  is: "+a+ "<br>");
document.writeln("b  is: "+b+ "<br>");
document.writeln("result  is: "+result+ "<br>");

// task no 3 

var name = prompt("Enter your name");
alert("Welcome "+ name);


// task no 4 is missing in exercise file

// task no 5

var num = +prompt("Enter the number you want table");
if(num === "")
{
    num=5;
    for(var i =1; i<=10;i++){
        document.writeln(num + " x "+ i +" = "+ num*i + "<br>");
    }
}
else{
    for(var i = 1;i<=10;i++){
        document.writeln(num + " x "+ i +" = "+ num*i + "<br>");
    }
}

// task no 6

var subjectName1 = prompt("Enter subject name");
var subjectName2 = prompt("Enter subject name");
var subjectName3 = prompt("Enter subject name");
var totalMark = 100;
var obtMarks1 = +prompt("Enter the obtained Marks of "+subjectName1);
var obtMarks2 = +prompt("Enter the obtained Marks of "+subjectName2);
var obtMarks3 = +prompt("Enter the obtained Marks of "+subjectName3);
var percentage1,percentage2,percentage3;
var totalPercentage;
percentage1 = (obtMarks1/totalMark)*100;
percentage2 = (obtMarks2/totalMark)*100;
percentage3 = (obtMarks3/totalMark)*100;
document.write("<table><tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr></table>");
document.write("<table><tr><td>"+subjectName1+"</td><td>"+totalMark+"</td><td>"+obtMarks1+"</td><td>"+percentage1+"%</td></tr></table>");
document.write("<table><tr><td>"+subjectName2+"</td><td>"+totalMark+"</td><td>"+obtMarks2+"</td><td>"+percentage2+"%</td></tr></table>");
document.write("<table><tr><td>"+subjectName3+"</td><td>"+totalMark+"</td><td>"+obtMarks3+"</td><td>"+percentage3+"%</td></tr></table>");
totalMark=300;
var totalObt = +obtMarks1+(+obtMarks2)+(+obtMarks3);
totalPercentage =(totalObt/totalMark)*100;
document.write("<table><tr><td></td><td>"+totalMark+ "</td><td>"+totalObt+"</td><td>"+totalPercentage+"%</td></tr></table>");

// Exercise 9 to 11

// task no 1

var name = prompt("Enter the city name");
if(name==="Karachi"){
    document.writeln("Welcome to city of lights");
}
else{
    document.writeln("Welcome to the " + name + " city");
}

// task no 2

var gender = prompt("Enter your Gender");
if(gender==="male"){
    document.writeln("Good Morning Sir!");
}
else if(gender==="female"){
    document.writeln("Good Morning Ma'am");
}


// task no 3

var signal = prompt("Enter the  traffic signal");
if(signal==="red"){
    document.writeln("Must Stop!");
}
else if(signal==="yellow"){
    document.writeln("Ready to Move!");
}
else{
    document.writeln("Move now!");
}


//  task no 4

var fuel=prompt("Check the remaining fuel in car and enter the liter");
if(fuel<0.25){
    document.writeln("Please refill the fuel in your car");
}
else{
    document.writeln("Enjoy The Journey");
}

// task no 5

//  a) Condition is true

var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
}

//  b) condition is not true

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}

//   c) condtion 2 and 4 is true. condition 2 is equal and condition 4 is also equal because of the 1st condition and 3rd condition increment

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
} if (c === 14) {
    alert("condition 4 is true");
}

//  d) cost is equals

var materialCost = 20000;
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}

//  e). This condition is true 

if (true){ 
    alert("True"); 
} 
if (false)
{ 
    alert("False"); 
}

//  e) condition is true

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}

// task no 6

document.writeln("<h1> Marks Sheet</h1>");
var subject1 = +prompt("Enter the obtained marks");
var subject2 = +prompt("Enter the obtained marks");
var subject3 = +prompt("Enter the obtained marks");
var totalMarks = 300;
var percentage, obtMarks;
obtMarks = +subject1 + (+subject2) + (+subject3);
percentage = (obtMarks / totalMarks) * 100;
if (percentage >= 80) {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: A-one <br>");
    document.write("Remarks: Excellent <br>");
}
else if (percentage >= 70 && percentage<80) {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br>");
}
else if (percentage >= 60 && percentage<70) {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve <br>");
}
else {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: Fail <br>");
    document.write("Remarks: Sorry <br>");
}


// task no 7

var secretNumber = 7;
var guessNumber = +prompt("Enter the secret number");
if(guessNumber===secretNumber){
    document.write("Bingo! Correct answer");
}
else if(guessNumber===secretNumber+1){
    document.writeln("Close enough to the correct answer");
}
else{
    document.writeln("you have choose incorrect number");
}


// task no 8

var num=+prompt("Enter the number which is divisble for 3 like 6,9,12 and so on");
if(num%3===0){
    document.writeln("Yes it can divisble by 3");
}
else{
    document.writeln("this number can't be divisble by 3");
}

// task no 9

var num = +prompt("Enter the number to check it even or odd");
if(num%2===0){
    alert("the number is even");
}
else{
    alert("the number is odd");
}

//  task no 10

var temperature = +prompt("Enter the temperature");
if(temperature>40){
    alert("It is too hot outside");
}
else if(temperature>30 && temperature<40){
    alert("The Weather today is Normal");
}
else if(temperature>20 && temperature<30){
    alert("“Today’s Weather is cool");
}
else if(temperature>10 && temperature<20){
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("you are not belong to sindh");
}


// task no 11

var num1 =+prompt("Enter 1st number");
var  num2 =+prompt("Enter 2nd number");
var result;
var operator =prompt("Enter the operatorion operator you want to perform");
if(operator==='+'){
    result=+num1+(+num2);
    document.writeln("Result of two number addition "+result);
}
else if(operator==='-'){
    result=num1-num2;
    document.writeln("Result of two number Subtraction "+result);
}
else if(operator==='*'){
    result=num1*num2;
    document.writeln("Result of two number Multiplication "+result);
}
else if(operator==='/'){
    result=num1/num2;
    document.writeln("Result of two number Division "+result);
}
else if(operator==='%'){
    result=num1%num2;
    document.writeln("Result of two number Reminder "+result);
}
else{
    document.writeln("you choose incorrect operator");
}

//  Exercise 12 to 13

// task no 1

var character =prompt("Enter any one Character");
if(character>=65 && character<=90){
    alert(character+" is in UpperCase")
}
else if(character>=97 && character<=122){
    alert(character+ " is lowercase");
}
else if(character>=48 && character<=57){
    alert(character+ " is Number");
}
else{
    alert(character+" is a special character")
}

// task no 2

var num1 =prompt("Enter 1st Number");
var num2 =prompt("Enter 2nd Number");
if(num1>num2){
    alert(num1+" Number 1 is larger");
}
else if(num1===num2){
    alert("both numberss are equal");
}
else{
    alert(num2+" Number 2 is larger " +num1);
}

//   task no 3

var num =prompt("Enter any number");
if(num>=0){
    alert(num +" is positive number");
}
else if(num===0){
    alert(num +" is zero number");
}
else{
    alert(num +" is negative number");
}

//  task no 4

var vowel =prompt("Enter any character");
if(vowel==='a' || vowel==='e' || vowel ==='i' || vowel ==='o' || vowel==='u' || vowel==='A' || vowel==='E' || vowel ==='I' || vowel ==='O' || vowel==='U'){
    alert(vowel+" is  a vowel");
}
else{
    alert(vowel + " is consonants");
}

// task no 5

var password = prompt("Enter your password");
var enterPassword=prompt("Enter your password");
if(password===enterPassword){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

// task no 6

var greeting; 
var hour = 13;
 if (hour < 18){ 
     greeting = "Good day";
     alert(greeting);
  } 
  else {
  greeting = "Good evening"; 
  alert(greeting);
} 

// task no 7

var time=prompt("Enter time  24 hours clock format like: 1900 = 7pm");
if(time>=0000 && time<1200){
    alert("Good Morning!");
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good evening!");
}
else if(time>=2100 && time<2359){
    alert("Good Night!");
}
else{
    alert("You have entered  invalid time");
}

// Exercise no 14 to 16

// task no 1
var studentName=[""];
// task no 2
var studentName = new Array("");
// task no 3
var stringArray = ["Muhammad","Aamir","Noor"];
// task no 4
var numberArray = [2,3,4,5,6];
// task no 5
var booleanArray = [true,false];
// task no 6
var mixArray = [" ", "Muhammad Aaimr Noor", 786, true];

// task no 7
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.writeln("<h1>Qualification</h1><br><br><br>");
for(var i = 0;i<qualification.length;i++){
    document.writeln((i+ 1) +") " + qualification[i] + "<br>");
}
// task no 8
var studentName = ["Aamir","Noor","Ali"];
var studentScore = [320,230,480];
var totalMarks=500;
var percentage = [];
for(var i = 0; i<studentName.length;i++){
    percentage[i] = (studentScore[i]/totalMarks)*100;
    document.writeln("Score of " + studentName[i] + " is " + studentScore[i] + " . Percentage: " + percentage[i]+ " %. " +"<br>");
}

// task no 9
var colorName = ["Red", "Green","Blue"];
document.writeln("Colors before addition "+colorName +"<br>");

var userColor = prompt("what color you wants to add to the beginning");
// unshift is used for add an element at the beginning of an array
colorName.unshift(userColor);
document.writeln("Colors after addition at the begining "+colorName +"<br>");

userColor = prompt("what color you wants to add to the end");
// push is used for add an element at the end of an array
colorName.push(userColor);
document.writeln("Colors after addition at the end "+colorName+ "<br>");
// unshift is used for add an element at the beginning of an array
colorName.unshift("purple","gray");
document.writeln("two more Colors addition at the beginning "+colorName+ "<br>");
// unshift is used for removing an element at the beginning of an array
colorName.shift();
document.writeln("After Removing one Color at the beginning "+colorName+ "<br>");
colorName.pop();
document.writeln("After Removing one Color at the end "+colorName+ "<br>");

var indexNo = prompt("which index you wants to add a color");
userColor = prompt("what color you wants to add to the index number");
// splice is used to add and remove the element anywhere in the array

colorName.splice(indexNo,0,userColor);
document.writeln("Colors after addition at the user index "+colorName +"<br>");

indexNo  = prompt("which index you wants to remove a color");
userColor = prompt("how many colors you wants to delete");
colorName.splice(indexNo, userColor)
document.writeln("Colors after removing at the user index "+colorName +"<br>");

// task no 10
var studentScore = [320,230,480,120];
document.writeln("Score of students before sorting: " + studentScore + "<br>")
studentScore.sort();
document.writeln("Score of students after sorting: "+studentScore);

// task no 11
var cityNames = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.writeln("cities list: " + cityNames + " <br> ");
var copyCities = cityNames.slice(2,4);
document.writeln("Selected cities list: " + copyCities);

// task no 12
var array=["this "," is "," my ", " cat "];
document.writeln("Array: " + array + "<br>");
var string = array.join(' ');
document.writeln("String: " + string + "<br>");

// task no 13
var devices = [ ];
devices.unshift("keyboard");
devices.splice(1,0,"mouse");
devices.splice(2,0,"printer");
devices.push("monitor");
document.writeln("Devices: " + devices + "<br><br><br><br><br>");
for(var i = 0; i<devices.length;i++){
    document.writeln("Out: <br>");
    document.writeln(devices[i]+"<br>");
}

// task no 14

var devices = [];
devices.unshift("keyboard");
devices.splice(1,0,"mouse");
devices.splice(2,0,"printer");
devices.push("monitor");
document.writeln("Devices: " + devices + "<br><br><br><br><br>");
for(var i = devices.length-1; i>=0;i--){
    document.writeln("Out: <br>");
    document.writeln(devices[i]+"<br>");
}

// TASK NO 15

var mobile = ["Apple","Samsung","Motorolla","Nokia","Sony", "Haier"];

document.writeln("<br><br><br>");
document.writeln("<select>");
for(var i = 0;i<mobile.length;i++){
    document.writeln("<option>" + mobile[i] + "</option>");
}
document.writeln("</select>");

// Chapter start from 17 to 20
// Chapter No 17 to 20

// Q1
var array =[[1],[2],[3]];


// Q2

var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

// Q3

for(var i=1; i<=10;i++){
    document.writeln(i+"<br>");
}

// Q4

var num = prompt("Enter the number you want to generate the table");
var len = prompt("Enter the length of you ant to generate");
document.writeln("Multiplication table of "+num + "<br>");
document.writeln("Length "+ len + "<br>");
for(var i = 1; i<=len; i++){   
        document.writeln( num + " x " + i + "=" + num*i + "<br>");
}



// Q5

var fruits=["apple", "banana", "mango", "orange", "strawberry"];
document.writeln(fruits[0]+"<br>");
document.writeln(fruits[1]+"<br>");
document.writeln(fruits[2]+"<br>");
document.writeln(fruits[3]+"<br>");
document.writeln(fruits[4]+"<br>");

for(var i=0; i<fruits.length;i++){
    document.writeln("Element at index " + i + " is " + fruits[i]+"<br>");
}
// Q6

// a)
document.writeln("Counting: ");
for(var i=1; i<=15;i++){
    document.writeln(i);
}
document.writeln("<br>");
document.writeln("Reverse: ");
// b)
for(var i=10; i>=1;i--){
    document.writeln(i);
}

// c)
document.writeln("<br>");
document.writeln("Even: ");

for(var i=0;i<=20;i++){
    document.writeln(i);
    i+=1;
}

document.writeln("<br>");
document.writeln("Odd: ");

for(var i=1;i<=20;i++){
    document.writeln(i);
    i+=1;
}
// d)
document.writeln("<br>");
document.writeln("Series: ");

for(var i=2;i<=20;i++){
    document.writeln(i+"k,");
    i+=1;
}

// Q7
var a =["cake","apple pie","cookie","chips","patties"];
var flag = false;
var x = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

for(var i=0;i<=a.length;i++){
    if(x === a[i]){
        flag = true;
        document.write(x + " is available at index " + i + " in our bakery");
    }
}

if(flag == false){
    document.write("We are sorry. "+ x +"  is not available in our bakery");
}



// Q8

var a = [24,53,78,91,12];
var largest = a[0];
document.writeln("Array Items");
for(var i = 0;  i<a.length;i++){
    document.writeln(a[i]);
    if(largest<a[i]){
    largest=a[i];
    }
}
document.writeln("<br>The Largest element is "+largest);


// Q9
var a = [24,53,78,91,12];
var smallest = a[0];
document.writeln("Array Items");
for(var i = 0;  i<a.length;i++){
    document.writeln(a[i]);
    if(smallest>a[i]){
    smallest=a[i];
    }
}
document.writeln("<br>The smallest element is "+smallest);



// Q 10

for(var i=1; i<=100;i++){
    if(i%5===0){
        document.writeln(i+",");
    }
}

// Chapter no 21 to 25

// Task no 1

var firstName  =  prompt("Enter first name");
var lastName = prompt("Enter last Name");
var fullName = firstName+lastName;
alert(" Welcome to " + fullName);



// Task no  2

// one way


var mobile  = prompt("enter the mobile model");
for( var i =0 ; i<mobile.length; i++){
    var len = mobile[i];
}
document.write("My favourite phone is: " + mobile + "<br>");
document.write("Length of string: " +len);

// second way

var mobile = prompt("Enter your favorite mobile phone model");
var len = mobile.length;

document.write("My favourite phone is: " + mobile + "<br>");
document.write("Length of string: " +len);



// task no 3 one way

var name = "pakistani";
var index;
for(var  i = 0; i<name.length;i++){
    if(name[i]==='n'){
        document.writeln("String: " + name + "<br>");
        index=i;
        document.writeln("Index of 'n': " +index);   
    }
}

// second way
var name = "pakistani";
var  index = name.indexOf("n");
document.writeln("String: " + name + "<br>");
document.writeln("Index of 'n': " +index);


// task no 4
var name = "hello world";
var index;
for (var i = name.length - 1; i >= 0; i--) {
    if (name[i] === 'l') {
        document.writeln("String: " + name + "<br>");
        index = i;
        document.writeln("Index of 'l': " + index);
        break;
    }
}


var name = "Hello World";
var  index = name.indexOf("l",5);
document.writeln("String: " + name + "<br>");
document.writeln("Index of 'l': " +index);


// task no 5 

var name = "Pakistani";
document.writeln("String: " + name + "<br>");
var index = name[3];
document.writeln("Character at index 3: "  + index);



// / Task  No 6


var firstName  =  prompt("Enter first name");
var lastName = prompt("Enter last Name");
var fullName = firstName.concat(lastName);
alert(" Welcome to " + fullName);



// Task No 7        

var name = "hyderabad";
var replace = "islam";
name = name.slice(5,9);
var con =  replace.concat(name);
alert(con);

// Task no 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

for (var i = 0; i <message.length; i++) {
    if (message.slice(i, i + 3) === "and") { 
    message = message.slice(0, i) + "&" + message.slice(i + 3);
    }
}
console.log(message);

var message = "Ali and Sami are best friends. They play cricket and football together.";

var message1 = message.replace(/and/g,'&');
document.writeln(message1);

// Task No 9

var num ="472";
var type = "string";
document.writeln("value: " +num + "<br>");
document.writeln("Type: " + type +"<br>");
// two method use for convret the string into integer 
Number(num);
parseInt(num);
document.writeln("value: " +num + "<br>");
document.writeln("Type: number" + "<br>");

// Task No 10

var value = prompt("Enter the value in small letters");
document.writeln("User input: " + value + "<br>");
document.writeln("Uppercase: " +value.toUpperCase());


// Task No 11


var value = prompt("Enter any value");
var val = value.slice(0,1);
var val2 = value.slice(1);
val = val.toUpperCase();
val2 = val2.toLowerCase();
var merge = val.concat(val2);
// alert(merge);
document.writeln("UserInput: " + value + "<br>");
document.writeln("TitleCase: " + merge + "<br>");


// Task No 12

var num = 35.36;
var result = num.toString();
result= result.replace('.', "");
document.writeln("Number =" + num + "<br>");
document.writeln("Result =" + result + "<br>");


// Task No 13

var username = prompt("Enter your name without symbol");
var check = /^[A-Za-z]+$/;
if(username.match(check)){
    alert("Valid Username");
}
else{
    alert("Please enter a valid username");
}

// Task No 14

var a =["cake","apple pie","cookie","chips","patties"];
var flag = false;
var x = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var item = x.toLowerCase();
for(var i=0;i<=a.length;i++){
    if(item === a[i]){
        flag = true;
        document.write(item + " is available at index " + i + " in our bakery");
    }
}

if(flag == false){
    document.write("We are sorry. "+ item +"  is not available in our bakery");
}


// task no 15


var  password = prompt("Enter your password");
var check = /^[A-Za-z]\w{7,15}$/;
if(password.match(check)){
    alert("your password is strong");

}
else{
    alert(" enter a valid password");

}


// Task no 16

var university = "University of karachi";
for(var  i = 0; i<university.length;i++){
    document.writeln(university[i] + "<br>");
}


// Task no 17

var name =prompt("Enter any string");
document.writeln("User Input " + name + "<br>");
var index = name.charAt(name.length-1);
document.writeln("last character " + index + "<br>");


// Task no 18

var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
var match;
match = text.match(/the/gi);
document.writeln("Text: " + text +  " <br>");
document.writeln("There are " +match.length+ " occurrence(s) of the word " +match);



// Chapter no 26 to 30


// Task No 1

var  num = +prompt("Enter any positive value in floating point");
if(num>0){
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);
    document.writeln("Number " + num + "<br>");
    document.writeln("Round Off value " + round + "<br>");
    document.writeln("Floor value " + floor + "<br>");
    document.writeln("Ceil value " + ceil + "<br>");
}
else{
    document.writeln("Please enter  a positive value");
}

// Task No 2

var  num = +prompt("Enter any negative value in floating point");
if(num<0){
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);
    document.writeln("Number " + num + "<br>");
    document.writeln("Round Off value " + round + "<br>");
    document.writeln("Floor value " + floor + "<br>");
    document.writeln("Ceil value " + ceil + "<br>");
}
else{
    document.writeln("Please enter  a negative value");
}


// Task No 3 

var num = +prompt("Enter any value for absolute value");
var  value = Math.abs(num);
document.writeln("The absolute value of " + num + " is " + value );



//  Task No 4

var dice = Math.ceil(Math.random()*6);
alert("Random dice value is: " + dice);



// / Task No 5


var  coin1 = "head";
var  coin2 = "tails";
var value =Math.ceil(Math.random()*2)
    if(value===1){
        document.writeln("Random coin value: " + coin1);
    }
    else{
        document.writeln("Random coin value: " + coin2);
    }



// Task No 6

var num = Math.floor(Math.random()*100);
alert("Random Number among 1 to 100 = "+ num);



//   Task No 7

var userInput = prompt("Enter your age in Kg kilograms");
var convert = parseInt(userInput);
document.writeln("The weight of user is " + userInput + " Kilograms");



// task No 8 

var num = +prompt("Enter a number among 1 to 10");
var secretNumber = Math.ceil(Math.random()*10)
if(num === secretNumber){
    alert("congrats buddy you get the number " + secretNumber);
}
else{
    alert("Try again");
}


//      Chapter No 31 to 34


//  Task No 1



var currentTime = new Date();
alert(currentTime);


// Task no 2 

var date = new Date();
var convert = date.toString();
var month = convert.slice(4,7);
alert("Current month: " + month);


// task No 3


var date = new Date();
var convert = date.toString();
var day = convert.slice(0,3);
alert("Current month: " + day);


// Task No 4

var days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentDate = new Date();
var funDay = currentDate.getDay();
if(funDay===0|| funDay==6){
    alert("it's a fun day");
}



//      Task No 5

var date = new Date();
var gettingDate = date.getDate();

if(gettingDate<=15){
    alert("First Fifteen Days of the month");
}
else{
    alert("Last days of the month");
}


// task no 6

var date = new Date();
var getTime = date.getTime();
var getMinutes = getTime/1000;
getMinutes = getMinutes*60*60;
document.writeln("Current date: " + date +"<br>");
document.writeln("Elapsed milliseconds since january 1, 1970: " + getTime +"<br>");
document.writeln("Elapsed minutes since january 1, 1970: " + getMinutes +"<br>");


//      Task No 7

var date = new Date();
var getHour = date.getHours();
if(getHour<=12){
    alert("Its A.M");
}
else{
    alert("Its P.M")
}


//      Task No 8

var laterDate = new Date("Dec, 31, 2020");
alert("Later Date: " +laterDate);


// Task No 9

var thisRamdan = new Date("Apr, 24, 2020");
var thisRamdanTime = thisRamdan.getTime();
var lastRamdan = new Date("June, 18, 2015");
var lastRamdanTime = lastRamdan.getTime();
var difference = thisRamdanTime - lastRamdanTime;
var convertDays = difference / (1000*60*60*24);
document.writeln(convertDays+" days have passed since 1st ramadan, 2015 <br>");


//      Task No 10

var date = new Date("Dec, 05 , 2015 22:50:16");
var referenceTime = date.getTime();
var beginningDate = new Date("Jan, 01, 2015 00:00:00");
var beginningTime = beginningDate.getTime();
var difference = referenceTime - beginningTime;
var convertSeconds = difference / (1000*60);
convertSeconds = Math.ceil(convertSeconds);
document.writeln("On reference date " +date + "<br>")
document.writeln( convertSeconds + " seconds had passed since beginning of the 2015");


//      Task No 11 

var  date = new Date();
document.writeln("Current Date: " + date + "<br>");
date.setHours(11);
document.writeln("1 hour Ago, it was:  " + date + "<br>")

//      Task No 12

var  date = new Date();
document.writeln("Current Date: " + date + "<br>");
date.setFullYear(1920);
document.writeln("100 years back: " + date + "<br>");


// task no 13

var age = +prompt("Enter your age");
document.writeln("Your age is " + age + "<br>");
var date = new Date();
var currentYear = date.getFullYear();
var dobYear = currentYear-age;
document.writeln("Your Birth year is " + dobYear);

//      task no 14

document.writeln("<h1>K-Electric Bill</h1>");
var customerName = prompt("Enter Your Name");
document.writeln("Customer Name: " + customerName + "<br>");
var billMonth = prompt("Enter Month");
document.writeln("Month: " + billMonth + "<br>");
var units = +prompt("Enter the consuming units");
document.writeln("Number of Units: " + units + "<br>");
var chargesUnits = prompt("Enter the charges of Per Unit");
document.writeln("Charges per unit: " + chargesUnits + "<br><br><br><br>");

var lateCharges = 350;
var lateAmount;

var netAmount = units * chargesUnits;
lateAmount = netAmount + lateCharges;

var date = new Date();
var dueDate = date.getDate();
if(dueDate>=15 && dueDate <=31){
    document.writeln("Net Amount Payable (within Due Date): " + netAmount + "<br>");
    document.writeln("Late Payment surcharges: " + lateCharges + "<br>");
    document.writeln("Gross Amount Payable (after Due Date): " + lateAmount + "<br>");
}
else{ 
    document.writeln("Net Amount Payable (within Due Date): " + netAmount + "<br>");
}

//      Chapter no 35 to 38

// Task No 1

function date(){
    var current = new Date();
    alert(current);
}
date();



//  Task No 2   

function greeting(){
    var firstName = prompt("Enter First Name");
    var lastName = prompt(" Enter Last name ");
    var fullName = firstName.concat(lastName);
    alert("Welcome " + fullName);
}
greeting();



//   Task no 3


function sum(num1,num2){
    alert(+num1+num2)
}
sum(num1=+prompt("Enter 1st value"),num2=+prompt("Enter 2nd value"));

// Task No 4

function sum(num1,num2,operator){
    if(operator==='+'){
        alert(+num1+num2);
    }
    else if(operator==='-'){
        alert(num1-num2);
    }
    else if(operator==='*'){
        alert(num1*num2);
    }
    else if(operator==='/'){
        alert(num1/num2);
    }
    else if(operator==='%'){
        alert(num1%num2);
    }
    else{
        alert("you have choose incorrect operator");
    } 
}
sum(num1=prompt("Enter 1st value"),num2=+prompt("Enter 2nd value"),prompt("Enter the operation sign you want to perform"));

// Task no 5 


function square(num){
     num = num*num;
    alert(num);
}
var num = parseInt(prompt("Enter the value"));
square(num);

//   Task No 6
function factorial(){
var num,i;
num = parseInt(prompt("enter the value for factorial"));
var fact=1;
for(i = num ;i>=1;i--){
    fact = fact*i;
}
alert(fact);
}
factorial();


//   Task no 7

function counting() {
    var start = parseInt(prompt("Enter the starting counting value"));
    var end = parseInt(prompt("Enter the value where ending of counting"));
    document.writeln("Counting<br>");
    for (var i = start; i <= end; i++) {
        document.writeln(i + "<br>");
    }
}
counting();


//   Task No 8

var base = parseInt(prompt("Enter base"));
var perpendicular = parseInt(prompt("Enter perpendicular"));
var hypo,baseSquare,perpendicularSquare,hypoSquare;
function hypotenuse() {
    document.writeln("the user give the base " + base + "<br><br><br>");
    document.writeln("the user give the perpendicular " + perpendicular + "<br><br><br>");
    hypo = +base + perpendicular;
    document.writeln("After calculating the base and perpendicular the hypotenuse is " + hypo + "<br><br><br>");
    function square() {
        baseSquare=base*base;
        document.writeln("the base is after calculating the square " + baseSquare + "<br><br><br>");
        perpendicularSquare=perpendicular*perpendicular;
        document.writeln("the perpendicular is after calculating the square " + perpendicularSquare + "<br><br><br>");
        hypoSquare = hypo*hypo;
        document.writeln("the hypotenus is after calculating the square " + hypoSquare + "<br><br><br>");
    }
    square();
    var totalHypo = +baseSquare + perpendicularSquare;
    document.writeln("The hypotenus after calculating " + Math.sqrt(totalHypo) + "<br><br><br>");
}
hypotenuse();


// Task No 9

var a;
function rectangle(width,height){
    return a = width * height;
}
var width =+prompt("Enter the width of rectangular");
var height =+prompt("Enter the height of rectangular");
alert(rectangle(width,height));


// Task No 10


var  word = prompt("Enter your word");
function palindrome(word){
var check= "";
for (var i = word.length-1;i>=0;i--){
    check += word[i];
}
if(word===check){
    alert("your word is palindrome");
    return word;
}
else{
    alert("your word is not a palindrom");
}
}
palindrome(word);



// Task No 11

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 var text =prompt("Enter the string in any case");
 document.write(titleCase(text));


//      Task No 12

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
var long = prompt("Enter the sentence");
document.writeln(find_longest_word(long));


//  Task No 13

function charCount(str, letter) 
{
 var letterCount = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
document.writeln(charCount('JSResourceS.com', 'o'));


//  Task No 14

var radius = 20;
var  circumference;
var pi = 3.142;
var area;
function  calcCircumference(radius){
   return circumference = 2 * pi * radius;
}
function calcArea(area){
    return area = pi* radius * radius;
}
document.writeln("The circumference is  "+ calcCircumference(radius) + " <br>");
document.writeln(" The area is "+ calcArea(area)+"<br>");

// Exercise no 38 to 42

// task no 1

function raised(){
    var result = a;
    for(var i = 1; i < b;i++){
        result = result * a;
    }
    alert(result);
    }
    var a = prompt("Enter base value");
    var b = prompt("Enter Raised value");
    raised(a,b);

// task no 2 

function leapYear() {
    if (year % 4 === 0) {
        alert(year + " is a leap year");
    }
    else {
        alert(year + " is not a leap year");
    }
}
var year = prompt("Enter any year whether check its leap year or not");
leapYear(year);

// task no 3

var a = parseInt(prompt("Enter first side of triangle"));
var b = parseInt(prompt("Enter second side of triangle"));
var c = parseInt(prompt("Enter three side of triangle"));

var s,are;
function se(){
   return s = (a+b+c)/2
}
function area(){
    se();
   return are = Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
console.log(area())

// // task no 4

var subject1 = parseInt(prompt("Enter subject1 marks"));
var subject2 = parseInt(prompt("Enter subject2 marks"));
var subject3 = parseInt(prompt("Enter subject3 marks"));
var average, percentage, totalMarks=300, obtainedMarks;
obtainedMarks = subject1+subject2+subject3; 
function mainFunction(){
    document.writeln("SUBJECT1 Marks: "+ subject1 +"<br>");
    document.writeln("SUBJECT2 Marks: "+ subject2 +"<br>");
    document.writeln("SUBJECT3 Marks: "+ subject3 +"<br>");
    document.writeln("Average of 3 subject Marks "+averageFunction()+"<br>");
    document.writeln("Percentage of 3 subject "+percentageFunction()+" % ");
}
function averageFunction(){
    average = (subject1+subject2+subject3)/3;
    return average
}
function percentageFunction(){
  return percentage = (obtainedMarks/totalMarks)*100;
}
mainFunction();

// task no 5
var count=0;
function stringArrayFunction(stringArray){
    var charSearch = prompt("Enter character you find the index "+stringArray);
    for(var i = 0 ;i<stringArray.length;i++){
        if(charSearch===stringArray[i]){
            document.writeln("Index No of "+ charSearch +" is: "+i+"<br>");
            count++;
        }
    }
    document.writeln("the "+charSearch+" is repeated is "+count+ "  of times");
}
stringArrayFunction(prompt("Enter string"));



// task no 6

var sentence = prompt("Enter any sentence from you delete vowels sentence is not more than 25 charcters");
var count = 0;
function removeVowel() {
    for (var i = 0; i < sentence.length; i++) {
        count = sentence[i];
    }
    if (count > 25) {
        alert("your sentence is too large it must be less than 25 character");
    }
    else {
        splited = sentence.split("")
        for (i = 0; i < splited.length; i++) {
            switch (splited[i]) {
                case "a":
                    splited.splice(i, 1);
                    break;
                case "e":
                    splited.splice(i, 1);
                    break;
                case "i":
                    splited.splice(i, 1);
                    break;
                case "o":
                    splited.splice(i, 1);
                    break;
                case "u":
                    splited.splice(i, 1);
                    break;
            }
        }
        joined = splited.join("");
        document.writeln(joined);
    }
}
removeVowel();


// task no 7

str = "Please read this application and give me gratuity"

function checkVowel() {
    for (i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                switch (str[i + 1]) {
                    case "a":
                        document.writeln("aa found <br>");
                        break;
                    case "e":
                        document.writeln("ae found <br>");
                        break;
                    case "i":
                        document.writeln("ai found <br>");
                        break;
                    case "o":
                        document.writeln("ao found <br>");
                        break;
                    case "u":
                        document.writeln("au found <br>");
                        break;
                }
                break;
            case "e":
                switch (str[i + 1]) {
                    case "a":
                        document.writeln("ea found <br>");
                        break;
                    case "e":
                        document.writeln("ee found <br>");
                        break;
                    case "i":
                        document.writeln("ei found <br>");
                        break;
                    case "o":
                        document.writeln("eo found <br>");
                        break;
                    case "u":
                        document.writeln("eu found <br>");
                        break;
                }
                break;
            case "i":
                switch (str[i + 1]) {
                    case "a":
                        document.writeln("ia found <br>");
                        break;
                    case "e":
                        document.writeln("ie found <br>");
                        break;
                    case "i":
                        document.writeln("ii found <br>");
                        break;
                    case "o":
                        document.writeln("io found <br>");
                        break;
                    case "u":
                        document.writeln("iu found <br>");
                        break;
                }
                break;
            case "o":
                switch (str[i + 1]) {
                    case "a":
                        document.writeln("oa found <br>");
                        break;
                    case "e":
                        document.writeln("oe found <br>");
                        break;
                    case "i":
                        document.writeln("oi found <br>");
                        break;
                    case "o":
                        document.writeln("oo found <br>");
                        break;
                    case "u":
                        document.writeln("ou found <br>");
                        break;
                }
                break;
            case "u":
                switch (str[i + 1]) {
                    case "a":
                        document.writeln("ua found <br>");
                        break;
                    case "e":
                        document.writeln("ue found <br>");
                        break;
                    case "i":
                        document.writeln("ui found <br>");
                        break;
                    case "o":
                        document.writeln("uo found <br>");
                        break;
                    case "u":
                        document.writeln("uu found <br>");
                        break;
                }
                break;
        }
    }
}
checkVowel();

// task no 8

var distance = parseInt(prompt("Enter distance between two cities in Kilometers"));

function kilometerToMeter() {
    meters = distance * 1000;
    document.write(distance + " kilometers into meters: " + meters + "<br>");
}

function kilometerToFeet() {
    feet = distance * 3280;
    document.write(distance + " kilometers into feets: " + feet + "<br>");
}
function kilometerToInches() {
    inches = distance * 39370
    document.write(distance + " kilometers into inches: " + inches + "<br>")
}

function kilometerToCentiMeter() {
    centimeters = distance * 100000;
    document.write(distance + " kilometers into centimeters: " + centimeters + "<br>");
}
kilometerToCentiMeter();
kilometerToInches();
kilometerToFeet();
kilometerToMeter();


// task no 9

function overTime(hours){
    if(hours>40){
        rate = 12.00 * hours;
        return rate;
    }
   }
   document.write("Rate per hour "+ overTime(45)+ " <br>");


// task no 10

function cashierCurrency(){
    var amount = prompt("Enter amount for cash notes: ");
    document.write("Amount in hundred : " + parseInt(amount/100) +"<br>");
    document.write("Amount in 50 : "+ parseInt((amount % 100) / 50) +"<br>");
    document.write("Amount in 10 : "+ parseInt((((amount % 100) % 50) / 10)) +"<br>");
    document.write("Remaining amount : "+ parseInt((((amount % 100) % 50) % 10)) +"<br>");
}
cashierCurrency();


// Exercise no 43 to 48

// task no 1

function alertBox(){
    alert("Welcome to JavaScript");
}

// task no 2

function showAlert(){
    alert("Thanks for purchasing a phone from us");
}

// task no 3

function deleteitem(oo){
        var point=oo.parentNode.parentNode;
         point.parentNode.removeChild(point);
}

// task no 4

function changeImage()
{
    document.getElementById('changeimage').src='https://images.priceoye.pk/huawei-y9s-2019-pakistan-priceoye-1vnu4.jpg';
}
function previousImage()
{
   var image = document.getElementById('changeimage').src='https://images.ctfassets.net/d6skzop43my5/6OyxwWln6Ke5UuX8hHLzZZ/5ae77b5f60dada8a8be63a0102ac7e45/nokia_5_3-front-cyan.png?q=50';
}

// task no 5

function incrementValue(){
    var num = document.getElementById('num').innerHTML++;
}
function decrementValue(){
    var num = document.getElementById('num').innerHTML--;
}

// Exercise no 49 to 52
// task no 1 

function signup() {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("fname").innerHTML = fname;
    document.getElementById("lname").innerHTML = lname;
    document.getElementById("email").innerHTML = email;
    document.getElementById("pass").innerHTML = password;
    document.getElementById("confPass").innerHTML = confirmPassword;
}

// task no 2
function readMore(){
    var para = document.getElementById("para").innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempora voluptates et eligendi eius ipsum odit nobis consequatur, iste, nulla ab sunt voluptatem recusandae praesentium explicabo, esse magni quasi culpa?";
}

// task no 3
function edit() {
    name = prompt("Enter student name:");
    document.getElementById("name").innerHTML = name;
}
function deleteitem(oo) {
    var point = oo.parentNode.parentNode;
    point.parentNode.removeChild(point);
}

// Exercise no 58 to 67

// task no 1

var elem = document.getElementById("main-content");
elem = elem.childNodes;
console.log(elem);

var rend = document.getElementsByClassName("render");
console.log(rend);
document.getElementById('first-name').value = 'fillInput';

document.getElementById('last-name').value = 'fillInput';
document.getElementById('email').value = 'fillEmail';


// task no 2

document.getElementById('form-content').nodeType; 

document.getElementById('lastName').nodeType; 
document.getElementById('lastName').firstElementChild.nodeType; 


document.getElementById('main-content').firstElementChild; 
document.getElementById('main-content').lastElementChild; 

document.getElementById('lastName').nextSibling; 
document.getElementById('lastName').previousSibling; 

document.getElementById('email').parentNode; 
document.getElementById('email').nodeType;
