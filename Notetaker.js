console.log("javascript");

shownotes();

let adddBtn=document.getElementById("addBtn");
adddBtn.addEventListener("click",function (e) {
let addTxt=document.getElementById("addTxt");
let addtitle=document.getElementById("addtitle");
let notes=localStorage.getItem("notes");
if(notes==null)
{
   noteobj=[];
}
else
{
noteobj=JSON.parse(notes);
}
let myobj={
  text : addTxt.value,
  title: addtitle.value
}
noteobj.push(myobj);
localStorage.setItem("notes",JSON.stringify(noteobj));
addTxt.value=" ";
addtitle.value=" ";
shownotes();
    
});

function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
{
   noteobj=[];
}
else
{
noteobj = JSON.parse(notes);
}

let html="";
noteobj.forEach(function(element,index)
{
    html += ` <div class="notecard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> ${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <Button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</a>
    </div>
  </div>
    `;
});

let notesElm=document.getElementById("notes");
if (noteobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

function deleteNote(index)
{
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
      } else {
        noteobj = JSON.parse(notes);
      }
    
      noteobj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(noteobj));
      shownotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
