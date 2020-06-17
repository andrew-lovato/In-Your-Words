
// const startLogic = require('./startButton')
export const inputsList = document.querySelector('ul');
export const startButton = document.querySelector('#startButton')
export const poemsList = document.getElementById('savedThoughts');
export const submitButton = document.getElementById('submitThoughts');
export const noOfWords = document.getElementById('noOfWords')
export const countdownSpan = document.getElementById('countdownSpan')
let timer = null

export const startGame = startButton.onclick = () => {
    clearTimeout(timer);
    clearForm()
    const ranNum = generateRanNum();
    generateInputs(ranNum)
    displayWordCount(ranNum)
    changeToRestartText()
    timer = countdownClock(ranNum);

}

submitButton.onclick = () => {
    const poem = savePoem();
    console.log(poem)
    displayPoem(poem);
    clearForm()
}



const generateRanNum = () => {
    let ranNum = Math.floor(Math.random() * 20);
    return randomNumber
}

changeToRestartText = () => {
    startButton.textContent = 'Restart Game'
}


// const generateInputs = () => {
//     const listItem = document.createElement('li');
//     // const submitButton = document.createElement('button');

//     for(let i = 1; i <= ranNum; i++){
//         const input = document.createElement('input');
//         input.style.display = 'block'
//         listItem.appendChild(input).setAttribute('type', 'text');
//         console.log(ranNum)
//     }
//     inputsList.appendChild(listItem);
//     inputsList.appendChild(submitButton).style.display = 'inline'
// }


// const savePoem = () => {
//         let poemArr = [];
//         const input = document.querySelectorAll('input');
//         input.forEach(element => {
//             poemArr.push(element.value);
//         })
//         // console.log(poemArr)
//         return poemArr; 
// }

    const displayPoem = (poem) => {
        const savedPoem = document.createElement('li')
        const savedText = document.createElement('span')
        const deletePoem = document.createElement('button')
        
            savedPoem.appendChild(savedText);
            console.log(poem)
          
        savedText.textContent = poem.toString();
        savedPoem.appendChild(deletePoem);
        deletePoem.textContent = 'Delete';
        poemsList.appendChild(savedPoem)
    
        deletePoem.onclick = (e) => {
        poemsList.removeChild(savedPoem);
    }
}

// const clearForm = () => {
//     if(startButton.textContent === 'Restart Game'){
//         const inputLi = document.querySelectorAll('ul > li');
//         inputLi.forEach(element => {
//             element.remove()
//         });
//         inputsList.appendChild(submitButton).style.display = 'none'

//     }
// }

const displayWordCount = (ranNum) => {
    noOfWords.textContent = ranNum;
}


countdownClock = async (ranNum) => {
    const startingNum = ranNum * 30;
    for(let i = startingNum; i >= 0; i--) {
        await new Promise(resolve => {
            timer = setTimeout(() => {
            countdownSpan.textContent = [i];
            resolve()
         }, 1000)
       });
    }
}


const bubSort = (arr) => {
    let notDone;
    for(let i = arr.length; i > 0; i--){
        notDone = true
        for(let j = 0; j < i - 1; i++){
            if(arr[j] > arr[j + 1])
           let  temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            notDone = false
        }
    }
    if(notDone) break;
    }
return arr
}