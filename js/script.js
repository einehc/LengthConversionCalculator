           function convert(){
            let value = document.querySelector("#input").value;
            let selectVal = document.querySelector("#selector1").value;
            let selectVal2 = document.querySelector("#selector2").value;
        
        let answer = 0;
          
            switch(true){
                case (value == false):
                    alert("Please Input A Value");
                    break;
                case (selectVal == false):
                    alert("Invalid Input");
                    break;
                case (selectVal2 == false):
                    alert("Invalid Input");
                        break;
                        default:

            // METER
            if(selectVal === "meter"){
               if(selectVal2 === "meter"){
                    answer = value;
                   
                    }
               else if(selectVal2 === "kilometer"){
                answer += value / 1000;
                
                }
               else if(selectVal2 === "decimeter"){
                    answer += value * 10;
                   
                    }
               else if(selectVal2 === "centimeter"){
                    answer += value * 100;
                  
                    }
               else if(selectVal2 === "millimeter"){
                    answer += value * 1000;
                 
                    }
               else if(selectVal2 === "mile"){
                    answer += value / 1609.344;
                    
                    }
                else if(selectVal2 === "yard"){
                        answer += value * 1.0936133;
                      
                    }
                else if(selectVal2 === "foot"){
                        answer += value * 3.2808399;
                   
                    }
               else {
                        answer += value * 39.3700787;
                        
                    }
            }


            // KILOMETER
            if(selectVal === "kilometer"){
                if(selectVal2 === "meter"){
                    answer += value * 1000;
                    
                     }
                else if(selectVal2 === "kilometer"){
                    answer = value;
                    
                 }
                else if(selectVal2 === "decimeter"){
                     answer += value * 10000;
                    
                     }
                else if(selectVal2 === "centimeter"){
                     answer += value * 100000;
                     
                     }
                else if(selectVal2 === "millimeter"){
                     answer += value * 1000000;
                    
                     }
                else if(selectVal2 === "mile"){
                     answer += value / 1.609344;
                     
                     }
                 else if(selectVal2 === "yard"){
                         answer += value * 1093.6133;
                         
                     }
                 else if(selectVal2 === "foot"){
                         answer += value * 3280.8399;
                        
                     }
                else {
                         answer += value * 39370.0787;
                         
                     }
             }


              // DECIMETER
            if(selectVal === "decimeter"){
                if(selectVal2 === "meter"){
                    answer += value / 10;
                   
                     }
                else if(selectVal2 === "kilometer"){
                    answer += value / 10000;
                    
                 }
                else if(selectVal2 === "decimeter"){
                     answer = value;
                     
                     }
                else if(selectVal2 === "centimeter"){
                     answer += value * 10;
                     
                     }
                else if(selectVal2 === "millimeter"){
                     answer += value * 100;
                    
                     }
                else if(selectVal2 === "mile"){
                     answer += value / 16093.44;
                     
                     }
                 else if(selectVal2 === "yard"){
                         answer += value / 9.144;
                        
                     }
                 else if(selectVal2 === "foot"){
                         answer += value / 3.048;
                       
                     }
                else {
                         answer += value * 3.93700787;
                      
                     }
             }


             // CENTIMETER
            if(selectVal === "centimeter"){
                if(selectVal2 === "meter"){
                    answer += value / 100;
                  
                     }
                else if(selectVal2 === "kilometer"){
                    answer += value / 100000;
                  
                 }
                else if(selectVal2 === "decimeter"){
                    answer += value / 10;
                  
                     }
                else if(selectVal2 === "centimeter"){
                     answer = value;
                
                     }
                else if(selectVal2 === "millimeter"){
                     answer += value * 10;
                 
                     }
                else if(selectVal2 === "mile"){
                     answer += value / 160934.4;
                    
                     }
                 else if(selectVal2 === "yard"){
                         answer += value / 91.44;
                     
                     }
                 else if(selectVal2 === "foot"){
                         answer += value / 30.48;
                        
                     }
                else {
                         answer += value / 2.54;
                        
                     }
             }


            // MILLIMETER
            if(selectVal === "millimeter"){
                if(selectVal2 === "meter"){
                    answer += value / 1000;
                    
                     }
                else if(selectVal2 === "kilometer"){
                    answer += value / 1000000;
                  
                 }
                else if(selectVal2 === "decimeter"){
                    answer += value / 100;
                    
                     }
                else if(selectVal2 === "centimeter"){
                    answer += value / 10;
                   
                     }
                else if(selectVal2 === "millimeter"){
                     answer = value;
                     
                     }
                else if(selectVal2 === "mile"){
                     answer += value / 1.6093E+6;
                    
                     }
                 else if(selectVal2 === "yard"){
                         answer += value / 914.4;
                      
                     }
                 else if(selectVal2 === "foot"){
                         answer += value / 304.8;
                      
                     }
                else {
                         answer += value / 25.4;
                      
                     }
             }


             // MILE
            if(selectVal === "mile"){
                if(selectVal2 === "meter"){
                    answer += value * 1609.344;
                  
                     }
                else if(selectVal2 === "kilometer"){
                    answer += value * 1.609344;
                  
                 }
                else if(selectVal2 === "decimeter"){
                    answer += value * 16093.44;
                  
                     }
                else if(selectVal2 === "centimeter"){
                    answer += value * 160934.4;
                   
                     }
                else if(selectVal2 === "millimeter"){
                    answer += value * 1.6093E+6;
                   
                     }
                else if(selectVal2 === "mile"){
                     answer = value;
                   
                     }
                 else if(selectVal2 === "yard"){
                         answer += value * 1760;
                       
                     }
                 else if(selectVal2 === "foot"){
                         answer += value * 5280;
                     
                     }
                else {
                         answer += value * 63360;
                     
                     }
             }


            // YARD
            if(selectVal === "yard"){
                if(selectVal2 === "meter"){
                    answer += value / 1.0936133;
                   
                     }
                else if(selectVal2 === "kilometer"){
                    answer += value / 1093.6133;
                   
                 }
                else if(selectVal2 === "decimeter"){
                    answer += value * 9.144;
                    
                     }
                else if(selectVal2 === "centimeter"){
                    answer += value * 91.44;
                    
                     }
                else if(selectVal2 === "millimeter"){
                    answer += value * 914.4;
                    
                     }
                else if(selectVal2 === "mile"){
                    answer += value / 1760;
                     
                     }
                 else if(selectVal2 === "yard"){
                         answer = value;
                  
                     }
                 else if(selectVal2 === "foot"){
                         answer += value * 3;
                 
                     }
                else {
                         answer += value * 36;
               
                     }
             }



              // FOOT
            if(selectVal === "foot"){
                if(selectVal2 === "meter"){
                    answer += value / 3.2808399;
                 
                     }
                else if(selectVal2 === "kilometer"){
                    answer += value / 3280.8399;
               
                 }
                else if(selectVal2 === "decimeter"){
                    answer += value * 3.048;
             
                     }
                else if(selectVal2 === "centimeter"){
                    answer += value * 30.48;
             
                     }
                else if(selectVal2 === "millimeter"){
                    answer += value * 304.8;
             
                     }
                else if(selectVal2 === "mile"){
                    answer += value / 5280;
               
                     }
                 else if(selectVal2 === "yard"){
                    answer += value / 3;
            
                     }
                 else if(selectVal2 === "foot"){
                         answer = value;
                    
                     }
                 else {
                         answer += value * 12;
              
                     }
             }


            // INCH
            if(selectVal === "inch"){
                if(selectVal2 === "meter"){
                    answer += value / 39.3700787;
              
                     }
                else if(selectVal2 === "kilometer"){
                    answer += value / 39370.0787;
             
                 }
                else if(selectVal2 === "decimeter"){
                    answer += value / 3.93700787;
              
                     }
                else if(selectVal2 === "centimeter"){
                    answer += value * 2.54;
                
                     }
                else if(selectVal2 === "millimeter"){
                    answer += value * 25.4;
             
                     }
                else if(selectVal2 === "mile"){
                    answer += value / 63360;
              
                     }
                 else if(selectVal2 === "yard"){
                    answer += value / 36;
            
                     }
                 else if(selectVal2 === "foot"){
                         answer += value / 12;
             
                     }
                 else {
                         answer = value;
                 
                     }
             }
            document.querySelector("#display").value= answer;
        
            };
        
            function reset(){
                $("#LengthForm").form("reset");
            }

        }

           
        
    
        
            