// 1. way to print in JS

// console.log("this is by js ");
// //alert("war");
// document.write("js documents write");

// 2.  js console  API

// console.log("this is by js ");
// console.warn("Waring");
// console.error("Error");

//3. js variables
// var a = 10;
// var b = 20;

// let a1 = 78;      // this block level scope ....using in functions....
// const a3 = 786;   // never be change 

// // console.log(a+b);

//4. Data types

// #premitives data types......

// var str = "saad";     //string
// var t = true;       // booleans
// var x;             //undifined.....
// var n = null;        // null....
//var s=symbol();


// console.log(str);
// console.log(t); 
// console.log(x);
// console.log(n);
// console.log(str,t); // combine with ,



//#reference data types....

// var marks = { saad: 90, taaha: 80 } //obj
// var arr = [1, 2, 3, 4, 5, 6]; // array
// console.log(marks)
// console.log(arr);




// 5. opearations ,conditions same as others languages....



//6. functions ....

// function sum(a, b) {
//     c = a + b;
//     return c;
// }
// c1 = sum(2, 4);
// console.log(c1);

// 7.loops

// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// for each loop 

// arr.forEach(function (e) {
//     console.log(e)
// })


//while loop
// let j=0;
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

// do while loop
// let j1=4;
// do{
//     console.log(arr[j1]);
//     j1++;
// }while(j1<3)


// 8.array method 

// var arr_m = ['saad', true, 45, null, undefined];
// console.log(arr_m);
// arr_m.pop();                // delete the   element  from the last
// console.log(arr_m);
// arr_m.push("ss")            //insert the element  from the last
// console.log(arr_m);
// arr_m.shift();              // delete the   element  from the start
// console.log(arr_m);
// arr_m.unshift("saad_bhai"); // insert the   element  from the last
// console.log(arr_m);
// var arr3=[243,34,332,299,12];
// console.log(arr3);
// arr3.sort();
// console.log(arr3);


// 9.String methods........ as same as java //

// 10.Dates......

// let mydates = new Date();
// console.log(mydates.getTime());
// console.log(mydates.getFullYear());
// console.log(mydates.getDay());
// console.log(mydates.getDate());
// console.log(mydates.getMonth());



//  11.DOM :Document object model.........

// document.getElementById('i').style.color='red';

// let ele=document.getElementById('i');
// console.log(ele)

// let e2 =document.getElementsByClassName('c');
// console.log(e2);

// e2[0].classList.add("cc");
// console.log(e2.innerHTML);
// console.log(e2.innerText);

// d=document.getElementsByTagName('div');
// console.log(d);


// selecting using query


// sel =document.querySelectorAll('.container');
// console.log(sel);


// 12. Events

// function o(){
//     console.log("the button was clicked ");
// }

// window.onload=function(){
//     console.log("window loaded")

// }

// cls.addEventListener('click',function(){
//     console.log("clicked in container")
// })

// cls.addEventListener('mouseover',function(){
//     console.log("move on container")
// })

// cls.addEventListener('mouseout',function(){
//     console.log("move out of container")
// })


// 13. set timeout and set interval


//arrow functions

// // function add(a,b){
// //     return a+b;
// // }

// sub=(a,b) =>{
//  return a-b;
// }



// 14.Settimmer  and setInterval................

                    // log123= () =>{
                    //     console.log("the log function");
                    // }

                    // log12= () =>{
                    //     console.log("the log function for the set interval");
                    // }

                    // setTimeout(log123,2000); // after 2 seconds the function calls
                    // setInterval(log12,4000); // after evry 2 seconds the function calls
                    // /// we use clearInterval  to cancel  the setTimeout and setInterval 
                    // clearInterval();

                    // // we do can declere the  them as follow

                    // a123=setTimeout(log123,2000); 
                    // a12=setInterval(log12,4000);
                    // clearInterval(a123); //the setTimeout interval will cancel here 
                    // clearInterval(a12);    // the setInterval cancel here ...


//15 .Local storage  and JSON

            // localStorage.setItem('taah','123');
            // localStorage.getItem('saad');
            //  //localStorage.removeItem('saad'); remove particular keyword and value
            // // // to clear the storage we have localstrorage.clear();

            //JSON 

            obj ={nama:'saad',length:1,a:{this:'that'}}
            jso=JSON.stringify(obj); // Json converts the obj to the string
            console.log(typeof jso); // typeod return the type of data type ......
            console.log(jso);
            // JSON 

            parsed=JSON.parse(`{"nama":"saad","length":"1","a":{"this":"that"}}`);
            console.log(parsed);
 

// //ECMASCRIPT is the standard script is used for maintaining the js.


function ok(){
    console.log("saad is the smartest");
    alert("warnig........!")
}

// == ====

// Document.write("diff b/w == ===");
console.log(2=='2');
console.log(2==='2');


var i=1;
var j=0;
document.write(i +" "+j+"&nbsp &nbsp")




