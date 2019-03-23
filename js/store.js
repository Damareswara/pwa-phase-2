function addData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var role=document.querySelector("#role").value;
  var phonenumber=document.querySelector("#phonenumber").value;
//Graduation details
 var college1=document.querySelector("#college1").value;
 var degree1=document.querySelector("#degree1").value;
 var branch1=document.querySelector("#branch1").value;
 var marks1=document.querySelector("#marks1").value;
 //Intermidiate details
 var college2=document.querySelector("#college2").value;
 var degree2=document.querySelector("#degree2").value;
 var branch2=document.querySelector("#branch2").value;
 var marks2=document.querySelector("#marks2").value;
 //10th class details
 var college3=document.querySelector("#college3").value;
var degree3=document.querySelector("#degree3").value;
 var marks3=document.querySelector("#marks3").value;
 //skills details
 var skills=document.querySelector("#skills").value;
 //index db
var request
var idb=window.indexedDB||window.mozIndexedDb||window.msIndexedDB||window.ebktIndexedDB;
if(!idb in navigator){
  alert("Browser is not Supporting");
}
var open=idb.open("StoreData",1);
console.log("indexdDB is created");
open.onupgradeneeded=function(e){
   var request=e.target.result;
   console.log(request);
   var store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
   console.log(store);
}
open.onerror=function(error){
  console.log("object store is not created",+error);
}
open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("formdata","readwrite");
  var storeDB=transaction.objectStore("formdata");
  storeDB.put({
    career:career,
    name:name,
    email:email,
    role:role,
    phonenumber:phonenumber,
    education:[
      {
        college:college1,
        degree:degree1,
        branch:branch1,
        marks:marks1
      },
      {
        college:college2,
        degree:degree2,
        branch:branch2,
        marks:marks2
      },
      {
      college:college3,
      degree:degree3,
      branch:"",
      marks:marks3
    }
  ],
    skills:skills,
    });
    window.open("index.html");
}
}
