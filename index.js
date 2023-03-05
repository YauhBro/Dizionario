 function search(){
let searchBar=document.getElementById("search").value //get the input value
let link="https://api.dictionaryapi.dev/api/v2/entries/en/"+searchBar //link for fetching sequence
return link
}
let counter=0
function darkmode(){
    if(counter==1){
        //DAYMODE
    document.body.style.backgroundColor="white"
    setCharactersColor()
    counter=0    
    }
    else{
          //NIGHTMODE
        document.body.style.backgroundColor="black"
        setCharactersColor()
        counter=1
    }

}
function setCharactersColor(){
    if(counter==0){
    document.getElementById("title").style.color="white"
    document.getElementById("phonetic").style.color="white"
    document.getElementById("sound").style.color="white"
    document.getElementById("definition1").style.color="white"
    document.getElementById("definition2").style.color="white"
    document.getElementById("type1").style.color="white"
    document.getElementById("type2").style.color="white"
    document.getElementById("synonyms").style.color="white"
    document.getElementById("antonyms").style.color="white"
    document.getElementById("phonetic").style.color="white"
    }
    if(counter==1){
        document.getElementById("title").style.color="black"
        document.getElementById("phonetic").style.color="black"
        document.getElementById("sound").style.color="black"
        document.getElementById("definition1").style.color="black"
        document.getElementById("definition2").style.color="black"
        document.getElementById("type1").style.color="black"
        document.getElementById("type2").style.color="black"
        document.getElementById("synonyms").style.color="black"
        document.getElementById("antonyms").style.color="black"
        document.getElementById("phonetic").style.color="black"

    }
}
async function catchContent(){

    function clearContent(){
    document.getElementById("title").innerHTML=""
    document.getElementById("phonetic").innerHTML=""
    document.getElementById("sound").innerHTML=""
    document.getElementById("definition1").innerHTML=""
    document.getElementById("definition2").innerHTML=""
    document.getElementById("type1").innerHTML=""
    document.getElementById("type2").innerHTML=""
    document.getElementById("synonyms").innerHTML=""
    document.getElementById("antonyms").innerHTML=""
    document.getElementById("phonetic").innerHTML=""
    document.getElementById("sound").style.visibility="false"
    }

    clearContent()
    let link= search()
    const response= await fetch(link)
    const text=await response.json()
    document.getElementById("title").innerHTML=text[0].word //SET THE TITLE IN THE TITLE ELEMENT
    document.getElementById("phonetic").innerHTML="Phonetic:"+text[0].phonetics[1].text
    document.getElementById("sound").setAttribute("src", text[0].phonetics[1].audio)
    let dimAttr=text[0].meanings[0].length
    let list1 = document.getElementById("definition1");
    let list2 = document.getElementById("definition2");

function f1(){
    let dim= text[0].meanings[0].definitions.length
    document.getElementById("type1").innerHTML="type:"+text[0].meanings[0].partOfSpeech
    list1.innerHTML="Meanings:"
    for (i = 0; i < dim; ++i) {
        var li = document.createElement('li');
        li.innerText = text[0].meanings[0].definitions[i].definition
        list1.appendChild(li);
        }
        if(text[0].meanings[0].synonyms!=""){
            document.getElementById("synonyms").innerHTML="Synonyms:"+text[0].meanings[0].synonyms
        }
        if(text[0].meanings[0].antonyms!=""){
            document.getElementById("antonyms").innerHTML="Antonyms:"+text[0].meanings[0].antonyms
        }
     
    }  

function f2(){
    document.getElementById("type2").innerHTML="type:"+text[0].meanings[1].partOfSpeech
    list2.innerHTML="Meanings:"
    let dim2= text[0].meanings[1].definitions.length
    for (i = 0; i < dim2; ++i) {
    var li = document.createElement('li');
    li.innerText = text[0].meanings[1].definitions[i].definition
    list2.appendChild(li);
    }

}

    if(dimAttr==1){
       f1()
        }  
        else{
            f1()
            f2()
            }
            

    console.log(text[0].meanings[1].definitions[0].definition)
    
    
}
