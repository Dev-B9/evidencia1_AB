const note1 = document.getElementById("note1")
const note2 = document.getElementById("note2")
const note3 = document.getElementById("note3")
const note = document.getElementById("Note")
const lost = document.getElementById("lostSubject")
const recover = document.getElementById("recoverNote")
const pass = document.getElementById("passNote")
const honors = document.getElementById("honorsNote")
const finalMessage = document.getElementById("finalMessage")
const winSubject = document.getElementById("resultNote")

note1.addEventListener("keyup", dataRequest)
note2.addEventListener("keyup", dataRequest)
note3.addEventListener("keyup", dataRequest)

let passeNote= 3.5
let recoverNote = 2.1
let honorsNote = 4.6
let FinalNote = 0

function dataRequest() {
    
    if(note1.value >5 || note1.value <0){
        note1.value=""
    }
    if(note2.value >5 || note2.value <0){
        note2.value=""
    }
    if(note3.value >5 || note3.value <0){
        note3.value=""
    }
    else
    {

        
    const number1 = Number(note1.value) * 0.3;  //0.3
    const number2 = Number(note2.value) * 0.3;   //0.3
    const number3 = Number(note3.value) * 0.4;   //0.4
   
        if(Number(note1.value !="" && note2.value !="" ||note2.value != "" && note3.value!="" ) ){
            NecessaryNote(number1,number2)
            StudentCalculation(number1, number2, number3)
        }
        
        if (note1.value != "" && note2.value != "" && note3.value!="") {
            StudentCalculation(number1, number2, number3)
            clearMessage()
            
        }
        if(note1.value =="" && note2.value =="" && note3.value=="" ){
            clearMessage()
            finalMessage.innerHTML=""
            note.innerHTML=""
    }

        if(note2.value =="" && note3.value ==""){
            clearMessage()
                finalMessage.innerHTML=""
                note.innerHTML=""
            }

            if(note.textContent==""){
              note.innerHTML="RESULTADO"
            }
    
    }
   
}

function StudentCalculation(number1,number2,number3) {

    FinalNote = number1+number2+number3
    note.innerHTML=FinalNote.toFixed(2)
    
    if(FinalNote <= 2.0){
        finalMessage.innerHTML = "he lost the subject";
    }else if(FinalNote >= 2.1 && FinalNote <= 3.4){
        finalMessage.innerHTML = "He lost the subject, but he can recover";
    }else if(FinalNote >= 3.5 && FinalNote <= 4.5){
        finalMessage.innerHTML = "you passed the subject";
    }else if(FinalNote >= 4.6 && FinalNote <= 5.0){  
        finalMessage.innerHTML = "you passed the subject with honors in excellence";
    }

    if(number3==0){
        NecessaryNote(number1,number2)
    }
    
}

function NecessaryNote(number1,number2){
 
    let twoNumbersCalculate = number1 + number2

    let recoverRequired = ((recoverNote - twoNumbersCalculate) / 0.4).toFixed(2)
    let passRequired = ((passeNote - twoNumbersCalculate) / 0.4).toFixed(2)
    let honorsRequired = ((honorsNote - twoNumbersCalculate) / 0.4).toFixed(2)
    
    if(FinalNote <2.1){
        recover.innerHTML=`Para recuperar necesita : ${recoverRequired}`
    }
    
    if(recoverRequired < 0){
        recover.innerHTML=`To recover you need : it is not necessary`
    }

    if(FinalNote <3.5 ){
        pass.innerHTML=`To win you need: ${passRequired}`
    }
    
    if(FinalNote < 4.5){
        honors.innerHTML=`For honors you need: ${honorsRequired}`
    }
}

function clearMessage() {
    recover.innerHTML=" "
    pass.innerHTML=" "
    honors.innerHTML=" "
    
}