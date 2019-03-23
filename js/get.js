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
  var info=storeDB.getAll();
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
  }
}
function display(data){
var parent=document.querySelector(".parent");
for(var i=0;i<data.length;i++){
var child=document.createElement("div");
 child.classList.add("child");
var image=document.createElement("img");
image.src="image/boy.svg";
image.alt=data[i].name;
var name=document.createElement("h2");
name.textContent=data[i].name;
var role=document.createElement("p");
role.textContent=data[i].role;

var link=document.createElement("a");
link.href="resume.html?id="+data[i].id;
link.textContent="view profile";
child.append(image);
child.append(name);
child.append(role);
child.append(link);
parent.append(child);
}
}
