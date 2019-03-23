var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
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
  var info=storeDB.get(paramValue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
    resume(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data)
{
var img=document.createElement("img");
img.src="image/boy.svg";
left.append(img);
var h3=document.createElement("h3");
h3.textContent=data.name;
left.append(h3);
var em=document.createElement("h3");
em.textContent="Email.ID";
left.append(em);
var email=document.createElement("p");
email.textContent=data.email;
left.append(email);
}
function resume(data) {
  console.log("dammmu");
  var career=document.createElement("h2");
  career.textContent="Career Objective";
  right.append(career);
  var car=document.createElement("p");
  car.textContent=data.career;
  right.append(car);
  var edu=document.createElement("h3");
  edu.textContent="Education details";
  right.append(edu);
  var table=document.createElement("table");
  let row='';
  row +="<tr><th>"+"college"+"</th>"+
  "<th>"+"degree"+"</th>"+
  "<th>"+"branch"+"</th>"+
  "<th>"+"marks"+"</th></tr>";
  for(i in data.education){
  row +="<tr><td>"+data.education[i].college+"</td>"+
  "<td>"+data.education[i].degree+"</td>"+
  "<td>"+data.education[i].branch+"</td>"+
  "<td>"+data.education[i].marks+"</td></tr>";
}
table.innerHTML=row;
right.append(table);
}
