let x;
                var y = 0;
                var decimalSwitch = false; //determine if ther is a decimal 
                var decimalCounter = 0;
                var answer = null;
                var opperator;
                var opp;

                function zeroFun(){
                    x = 0;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()
                }

                function oneFun(){
                    x = 1;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }
                
                function twoFun(){
                    x = 2;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }
                
                function threeFun(){
                    x = 3;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }

                function fourFun(){
                    x = 4;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }

                function fiveFun(){
                    x = 5;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }

                function sixFun(){
                    x = 6;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }

                function sevenFun(){
                    x = 7;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }

                function eightFun(){
                    x = 8;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }

                function nineFun(){
                    x = 9;
                    decimalCounterFun()
                    buttonFun();
                    displayAfterNumber()

                }


                function buttonFun(){
                    if(decimalSwitch === false){
                    y = (y * 10) + x;
                    console.log(y);
                    }

                    else{
                    console.log("inside button, its a decimal " + decimalSwitch);
                    console.log(decimalCounter + " counter   ");
                    console.log(.1^decimalCounter + " dec ");
                    y = y + (x * (Math.pow(.1,decimalCounter)));
                    console.log(y + " this is y");
                    }    
                }


                function decimalFun(){
                    decimalSwitch = true; 
                    console.log("inside decimalFun");
                    console.log(decimalSwitch + " decimal switch");
                    console.log(decimalCounter + "decimal counter");
                    console.log("-----------");
                }


                function displayFun(){
                    document.getElementById("display").innerHTML = answer;
                }
                function displayAfterNumber(){
                    document.getElementById("display").innerHTML = y;
                }
                function displayAfterOpperator(){
                    document.getElementById("display").innerHTML = opp;
                }

                
                // (y*(10^decimalCounter) - ( (y*(10^decimalCounter)) % 10) * .10)
                
                
                function decimalCounterFun(){

                    if(decimalSwitch === true){
                    decimalCounter = decimalCounter + 1;
                    console.log("this is how much deicmal would be" + .1^decimalCounter);
                }    

                }

                

                function backspaceFun(){

      

                     //if trying to backspace and its not a decimal
                     if(decimalSwitch === false){
                         y = (y/10) - (.1 * (y % 10));
                         console.log(y + " work?");
                         displayAfterNumber();

                        }

                     // //if trying to backspace and it is a deciaml 
                     if(decimalSwitch === true && decimalCounter !== 0){
                            console.log(decimalCounter + " this is the decimal counter")
                           
                            y = ((y * (Math.pow(10,decimalCounter))) - ( (y * (Math.pow(10,decimalCounter))) % 10)) / (Math.pow(10,decimalCounter)) ;

                            console.log(y + " this is what happens");
                            displayAfterNumber();
                            decimalCounter = decimalCounter - 1;
                        }

                     //if backspacing and there is a 0, and previosly backspaced from a decimal
                     if(decimalSwitch === true && decimalCounter === 0){
                            decimalSwitch = false;
                            displayAfterNumber();

                        }

                   
                    }

                    
                function plusFun(){
                    //if answer is null, answer will become y
                    if (answer === null){
                        answer = y;
                        console.log(answer);
                    }
                    else{
                    answer = answer + y;
                    }
                    y = 0;
                    opperator = "add";
                    opp = "+"
                    displayAfterOpperator();

                }

                function minusFun(){
                    if (answer === null){
                        answer = y;
                        console.log(answer);
                    }
                    else{
                    answer = answer - y;
                    }
                    y = 0;
                    opperator = "sub";
                    opp = "-";
                    displayAfterOpperator();

                }


                function mulFun(){
                    console.log(answer + "this is inisde mulfun");
                    
                    if (answer === null){
                        answer = y;
                        console.log(answer);
                    }
                    else{
                    answer = answer * y;
                    }
                    y = 0;
                    opperator= "mul";
                    opp="X";
                    displayAfterOpperator();

                }

                function divFun(){
                    if (answer === null){
                        answer = y;
                        console.log(answer);
                    }
                    else{
                    answer = answer / y;
                    }
                    y = 0;
                    opperator = "div";
                    opp = "/";
                    displayAfterOpperator();

                }   


                function sqrtFun(){
                    if (answer === null){
                        answer = y;
                        console.log(answer);
                    }

                    else{
                    answer = math.sqrt(answer) ;
                    }


                    y = 0;
                    opperator = "sqrt";
                    opp = "sqrt";
                    displayFun();

                }   



                function equalsFun(){

                    console.log(opperator);
                    console.log(answer + " answer outside switch");
                    switch(opperator){
                        case "add":
                        answer = answer + y;
                        break;

                        case "sub":
                        answer = answer - y;
                        break;

                        case "mul":
                        console.log(answer + " inside Mul answer b4")
                        console.log(y + " inside Mul y")
                        answer = answer * y;
                        console.log(answer + " inside Mul afters")
                        break;

                        case "div":
                        answer = answer / y;
                        break;

                        default:
                        answer= answer;

                    }
                    opperator = "none"
                    console.log(answer + "this is answer");
                    displayFun();
                }

                function clearFun(){
                    y = 0;
                    decimalSwitch = false; //determine if ther is a decimal 
                    decimalCounter = 0;
                    answer = null;
                    opperator = null;
                    opp = null;
                    document.getElementById("display").innerHTML = 0;
                }




