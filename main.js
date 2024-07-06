const regras = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
const characters = " abcdefghijklmnopqrstuvwxyz\n";
const mensagem = "Digite o texto que você deseja criptografar ou descriptografar";

var textPreCript = "";
var textPosCript = "";

const textarea = document.getElementById("text-crip");
const resultPanel = document.getElementById("result");

document.getElementById("cript").onclick = ()=>{
    
    textPreCript = textarea.value;
    let criptText = criptografar(textarea.value);
    textPosCript = criptText;    

    if(typeof criptText == "boolean"){
        console.log(false);
    }else{

        resultPanel.querySelector("img").style.display = "none";
        resultPanel.querySelector("h3").style.display = "none";
        resultPanel.querySelector("p").textContent = criptText;
        resultPanel.querySelector("p").className = "text-result";
        resultPanel.querySelector("button").style.display = "block";
        resultPanel.style.justifyContent = "space-between";

    }    


}

document.getElementById("descript").onclick = ()=>{

    textPreCript = textarea.value;
    let descriptText = descriptografar(textarea.value);
    textPosCript = descriptText;    

    if(typeof descriptText == "boolean"){
        console.log(false);
    }else{

        resultPanel.querySelector("img").style.display = "none";
        resultPanel.querySelector("h3").style.display = "none";
        resultPanel.querySelector("p").textContent = descriptText;
        resultPanel.querySelector("p").className = "text-result";
        resultPanel.querySelector("button").style.display = "block";
        resultPanel.style.justifyContent = "space-between";

    }    


}

/**@param {string} text  */
function criptografar(text){

    let criptText = "";       

    for(let ii = 0; ii<text.length; ii++){

        if(text[ii] == text[ii].toUpperCase() && !characters.includes(text[ii])){
            console.log(!characters.includes(text[ii]));
            console.log("|"+text[ii]+"|");
            console.log(ii);
            return false;
        }

        for(let cc = 0; cc<regras.length; cc++){               

            if(text[ii] == regras[cc][0]){
                criptText += regras[cc][1];                
                break;
            }else if(cc == regras.length-1){
                criptText += text[ii];                
                break;
            }

        }            

    }        

    return criptText; 

}

/**@param {string} text  */
function descriptografar(text){
    
    let descriptText = "";       

    for(let ii = 0; ii<text.length; ii++){

        if(text[ii] == text[ii].toUpperCase() && !characters.includes(text[ii])){
            console.log(!characters.includes(text[ii]));
            console.log("|"+text[ii]+"|");
            console.log(ii);
            return false;
        }

        for(let cc = 0; cc<regras.length; cc++){               

            if(regras[cc][1] == text.substring(ii, ii+regras[cc][1].length)){

                descriptText += regras[cc][0];
                ii += regras[cc][1].length-1;
                break;

            }else if(cc == regras.length-1){

                descriptText += text[ii];                
                break;

            }

        }            

    }        

    return descriptText;

}
