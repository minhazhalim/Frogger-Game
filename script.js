document.addEventListener('DOMContentLoaded',() => {
     const squares = document.querySelectorAll('.grid div');
     const logLeft = document.querySelectorAll('.log-left');
     const logRight = document.querySelectorAll('.log-right');
     const carLeft = document.querySelectorAll('.car-left');
     const carRight = document.querySelectorAll('.car-right');
     const timeLeft = document.querySelector('#time-left');
     const result = document.querySelector('#result');
     const button = document.querySelector('#button');
     const width = 9;
     let currentIndex = 76;
     let currentTime = 20;
     let timerID;
     function win(){
          if(squares[4].classList.contains('frog')){
               result.innerHTML = 'You Won';
               squares[currentIndex].classList.remove('frog');
               clearInterval(timerID);
               document.removeEventListener('keyup',moveFrog);
          }
     }
     function lose(){
          if((currentTime === 0) || (squares[currentIndex].classList.contains('c1')) || (squares[currentIndex].classList.contains('l5')) || (squares[currentIndex].classList.contains('l4'))){
               result.innerHTML = 'You Lose';
               squares[currentIndex].classList.remove('frog');
               clearInterval(timerID);
               document.removeEventListener('keyup',moveFrog);
          }
     }
     function moveFrog(event){
          squares[currentIndex].classList.remove('frog');
          switch(event.keyCode){
               case 37:
                    if(currentIndex % width !== 0){
                         currentIndex -= 1;
                    }
                    break;
               case 38:
                    if(currentIndex - width >= 0){
                         currentIndex -= width;
                    }
                    break;
               case 39:
                    if(currentIndex % width < width - 1){
                         currentIndex += 1;
                    }
                    break;
               case 40:
                    if(currentIndex + width < width * width){
                         currentIndex += width;
                    }
                    break;
          }
          squares[currentIndex].classList.add('frog');
          lose();
          win();
     }
     function autoMoveCars(){
          carLeft.forEach(carsLeft => moveCarLeft(carsLeft));
          carRight.forEach(carsRight => moveCarRight(carsRight));
     }
     function moveCarLeft(carsLeft){
          switch(true){
               case carsLeft.classList.contains('c1'):
                    carsLeft.classList.remove('c1');
                    carsLeft.classList.add('c2');
                    break;
               case carsLeft.classList.contains('c2'):
                    carsLeft.classList.remove('c2');
                    carsLeft.classList.add('c3');
                    break;
               case carsLeft.classList.contains('c3'):
                    carsLeft.classList.remove('c3');
                    carsLeft.classList.add('c1');
                    break;
          }
     }
     function moveCarRight(carsRight){
          switch(true){
               case carsRight.classList.contains('c1'):
                    carsRight.classList.remove('c1');
                    carsRight.classList.add('c3');
                    break;
               case carsRight.classList.contains('c2'):
                    carsRight.classList.remove('c2');
                    carsRight.classList.add('c1');
                    break;
               case carsRight.classList.contains('c3'):
                    carsRight.classList.remove('c3');
                    carsRight.classList.add('c2');
                    break;
          }
     }
     function autoMoveLogs(){
          logLeft.forEach(logsLeft => moveLogLeft(logsLeft));
          logRight.forEach(logsRight => moveLogRight(logsRight));
     }
     function moveLogLeft(logsLeft){
          switch(true){
               case logsLeft.classList.contains('l1'):
                    logsLeft.classList.remove('l1');
                    logsLeft.classList.add('l2');
                    break;
               case logsLeft.classList.contains('l2'):
                    logsLeft.classList.remove('l2');
                    logsLeft.classList.add('l3');
                    break;
               case logsLeft.classList.contains('l3'):
                    logsLeft.classList.remove('l3');
                    logsLeft.classList.add('l4');
                    break;
               case logsLeft.classList.contains('l4'):
                    logsLeft.classList.remove('l4');
                    logsLeft.classList.add('l5');
                    break;
               case logsLeft.classList.contains('l5'):
                    logsLeft.classList.remove('l5');
                    logsLeft.classList.add('l1');
                    break;
          }
     }
     function moveLogRight(logsRight){
          switch(true){
               case logsRight.classList.contains('l1'):
                    logsRight.classList.remove('l1');
                    logsRight.classList.add('l5');
                    break;
               case logsRight.classList.contains('l2'):
                    logsRight.classList.remove('l2');
                    logsRight.classList.add('l1');
                    break;
               case logsRight.classList.contains('l3'):
                    logsRight.classList.remove('l3');
                    logsRight.classList.add('l2');
                    break;
               case logsRight.classList.contains('l4'):
                    logsRight.classList.remove('l4');
                    logsRight.classList.add('l3');
                    break;
               case logsRight.classList.contains('l5'):
                    logsRight.classList.remove('l5');
                    logsRight.classList.add('l4');
                    break;
          }
     }
     function moveWithLogLeft(){
          if(currentIndex >= 27 && currentIndex < 35){
               squares[currentIndex].classList.remove('frog');
               currentIndex += 1;
               squares[currentIndex].classList.add('frog');
          }
     }
     function moveWithLogRight(){
          if(currentIndex > 18 && currentIndex <= 26){
               squares[currentIndex].classList.remove('frog');
               currentIndex -= 1;
               squares[currentIndex].classList.add('frog');
          }
     }
     function movePieces(){
          currentTime--;
          timeLeft.textContent = currentTime;
          autoMoveCars();
          autoMoveLogs();
          moveWithLogLeft();
          moveWithLogRight();
          lose();
     }
     button.addEventListener('click',() => {
          if(timerID){
               clearInterval(timerID);
          }else{
               timerID = setInterval(movePieces,1000);
               document.addEventListener('keyup',moveFrog);
          }
     });
});