function help(){
    alert("Hi there👋. "+
    "This calculator does addition, subtraction, multiplication and division. "+
    "We are BODMAS certified so don't worry about that :). "+
    "You may notice that nothing happens when you type using your own keys. "+
    "Please make use of our keys that you see on the screen at this point. "+
    "But not to worry, our developers are working hard to ensure you'll be able to use your keyboard soon. "+
    "Happy calculating! ")
}  
    function zero(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"0";
        }
        
    }
    
    function one(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"1";
        }
    }
    function two(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"2";
        }
    }
    
    function three(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"3";
        }
    }
    
    function four(){
        var userinp=document.querySelector("#currentsum").innerHTML;
       let exbef=userinp.slice(-1);
       if (exbef==")"){
            alert("Please insert an operator after your brackets")
        } else {
           document.getElementById("currentsum").innerHTML=userinp+"4";
      }
    }
    
    function five(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"5";
        }
    }
    
    function six(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"6";
        }
    }
    
    function seven(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"7";
        }
    }
    
    function eight(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"8";
        }
    }
    
    function nine(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+"9";
        }    }
    
    function point(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef=="."){
            alert("You may not have two .'s in a row")
         }else if(exbef==")"){
            alert("Please insert an operator after your brackets")
         } else {
            document.getElementById("currentsum").innerHTML=userinp+".";
        }
    }

    function openbracket(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let userin=Array.from(userinp);
        let exbef=userinp.slice(-1);

        let arrayopenb=[]
        for (const item of userinp){
            if (item=="("){
                arrayopenb.push(item);
            }            
        }
        
        function countclosed(value){
            if (value==")"){
                return value
            }
        }
        let arraycloseb=userin.filter(countclosed);
        let openlength= arrayopenb.length;
        let closelength= arraycloseb.length;
        let OC=(openlength-closelength);

        if (OC!=0){
        alert("Please close your existing brackets before opening new ones")
        } else if (exbef=="("){
            alert("You may not have two ('s in a row")
        } else if (exbef=="."){
            alert("Please indicate your operator before the bracket")
        } else if (exbef==")"){
            alert("Please indicate your operator before the bracket")
        } else if (exbef=="+"){
            document.getElementById("currentsum").innerHTML=userinp+"(";
        } else if (exbef==''){
            document.getElementById("currentsum").innerHTML=userinp+"(";
        } else if (exbef=="-"){
            document.getElementById("currentsum").innerHTML=userinp+"(";
        } else if (exbef=="/"){
            document.getElementById("currentsum").innerHTML=userinp+"(";
        } else if (exbef=="*"){
            document.getElementById("currentsum").innerHTML=userinp+"(";
        } else{
            alert("Please indicate your operator before the bracket")
    }
    }

    function closebracket(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let userin=Array.from(userinp);
        let exbef=userinp.slice(-1);

        let arrayopenb=[]
        for (const item of userinp){
            if (item=="("){
                arrayopenb.push(item);
            }            
        }
        
        function countclosed(value){
            if (value==")"){
                return value
            }
        }
        let arraycloseb=userin.filter(countclosed);
        let openlength= arrayopenb.length;
        let closelength= arraycloseb.length;
        let OC=(openlength-closelength);


        if (exbef==")"){
            alert("You may not have two )'s in a row")
        } else if (exbef=="("){
            alert("Please type in a number or sum before closing your brackets")
        } else if (exbef=="+"){
            alert("Please type in a number before closing your brackets")
        } else if (exbef==''){
            alert("You may not start your sum with a closing bracket")
        } else if (exbef=="-"){
            alert("Please type in a number before closing your brackets")
        } else if (exbef=="/"){
            alert("Please type in a number before closing your brackets")
        } else if (exbef=="*"){
            alert("Please type in a number before closing your brackets")
        } else if (OC<1){
            alert("Please open brackets before closing them")
        } else {
            document.getElementById("currentsum").innerHTML=userinp+")";
        }

    }
    
    function plus(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==''){
            document.getElementById("currentsum").innerHTML=userinp;
            alert("Please do not start your sum with a +")
         } else if (exbef=="+"){
            alert("You may not have two +'s in a row")
         } else if(exbef=="-"){
            alert("You may not have -+")
         } else if(exbef=="/"){
            alert("You may not have /+")
         } else if(exbef=="*"){
            alert("You may not have *+")
         }
         else {
            document.getElementById("currentsum").innerHTML=userinp+"+";
        }       
    }
    function minus(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef=="-"){
            alert("You may not have --. Rather use +")
        } else if(exbef=="+"){
            alert("You may not have +-. Rather use the - only")
        } else{
            document.getElementById("currentsum").innerHTML=userinp+"-";
        }
        
    } 

    function divide(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);

        if (exbef==''){
            alert("Please do not start your sum with a /")
         } else if (exbef=="/"){
            alert("You may not have two /'s in a row")
         } else if(exbef=="-"){
            alert("You may not have -/")
         } else if(exbef=="+"){
            alert("You may not have +/")
         } else if(exbef=="*"){
            alert("You may not have */")
         }
         else {
            document.getElementById("currentsum").innerHTML=userinp+"/";
        } 
    }

    function multiply(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef==''){
            document.getElementById("currentsum").innerHTML=userinp;
            alert("Please do not start your sum with a *")
         } else if (exbef=="*"){
            alert("You may not have two *'s in a row")
         } else if(exbef=="-"){
            alert("You may not have -*")
         } else if(exbef=="/"){
            alert("You may not have /*")
         } else if(exbef=="+"){
            alert("You may not have +*")
         }
         else {
            document.getElementById("currentsum").innerHTML=userinp+"*";
        } 
    }

    function clearall(){
        document.getElementById("currentsum").innerHTML="";
    }  
    
    function deleteone(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp.slice(0,-1);
    } 

    function equals1(){
        var inpwbracks=document.querySelector("#currentsum").innerHTML;
        let test=inpwbracks.split(/[()]/)
        for (const item of test) {

            if(isNaN(item[0]+item[item.length-1])){
                console.log(item)
                
            } else {   
                console.log(item)  
                console.log(isNaN(item[0]+item[item.length-1]));

                let NewNumb=item.split(/[-+/*]/);
                let opssb=item.split(/[01234567890.]/);
                
                let NewNumbs=[];
                for (const item of NewNumb){
                    if (item !=''){
                        NewNumbs.push(item);
                    }
                }        
                function filtermoi(value){
                    if (value!=''){
                        return value;
                    }
                }
                let operatorbs = opssb.filter(filtermoi);

                if (item.indexOf("-")==0){
                    NewNumbs.splice(0,1,NewNumbs[0]*-1);
                    operatorbs.splice(0,1);
                }
                if (item.indexOf("+")==0){
                    NewNumbs.splice(0,1,"+"+NewNumbs[0]);
                    operatorbs.splice(0,1);
                }

                if(operatorbs.indexOf("/-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("/-")+1,1,NewNumbs[operatorbs.indexOf("/-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("/-"),1,"/")
                }
                if(operatorbs.indexOf("/-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("/-")+1,1,NewNumbs[operatorbs.indexOf("/-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("/-"),1,"/")
                }
                if(operatorbs.indexOf("/-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("/-")+1,1,NewNumbs[operatorbs.indexOf("/-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("/-"),1,"/")
                }
                if(operatorbs.indexOf("/-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("/-")+1,1,NewNumbs[operatorbs.indexOf("/-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("/-"),1,"/")
                }

                if(operatorbs.indexOf("*-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("*-")+1,1,NewNumbs[operatorbs.indexOf("*-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("*"),1,"*")
                }
                if(operatorbs.indexOf("*-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("*-")+1,1,NewNumbs[operatorbs.indexOf("*-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("*"),1,"*")
                }
                if(operatorbs.indexOf("*-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("*-")+1,1,NewNumbs[operatorbs.indexOf("*-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("*"),1,"*")
                }
                if(operatorbs.indexOf("*-")!=-1){
                    NewNumbs.splice(operatorbs.indexOf("*-")+1,1,NewNumbs[operatorbs.indexOf("*-")+1]*-1);
                    operatorbs.splice(operatorbs.indexOf("*"),1,"*")
                }
                
                for (const item of operatorbs){
                    if(item=="/"){
                    NewNumbs.splice(operatorbs.indexOf("/"),2,(NewNumbs[operatorbs.indexOf("/")]/NewNumbs[operatorbs.indexOf("/")+1]));
                    operatorbs.splice(operatorbs.indexOf("/"),1);  
                    }
                }
                for (const item of operatorbs){
                    if(item=="/"){
                    NewNumbs.splice(operatorbs.indexOf("/"),2,(NewNumbs[operatorbs.indexOf("/")]/NewNumbs[operatorbs.indexOf("/")+1]));
                    operatorbs.splice(operatorbs.indexOf("/"),1);  
                    }
                }
                for (const item of operatorbs){
                    if(item=="/"){
                    NewNumbs.splice(operatorbs.indexOf("/"),2,(NewNumbs[operatorbs.indexOf("/")]/NewNumbs[operatorbs.indexOf("/")+1]));
                    operatorbs.splice(operatorbs.indexOf("/"),1);  
                    }
                }
                for (const item of operatorbs){
                    if(item=="/"){
                    NewNumbs.splice(operatorbs.indexOf("/"),2,(NewNumbs[operatorbs.indexOf("/")]/NewNumbs[operatorbs.indexOf("/")+1]));
                    operatorbs.splice(operatorbs.indexOf("/"),1);  
                    }
                }


                for (const item of operatorbs){   
                    if (item=="*"){
                    NewNumbs.splice(operatorbs.indexOf("*"),2,(NewNumbs[operatorbs.indexOf("*")+1]*NewNumbs[operatorbs.indexOf("*")]));
                    operatorbs.splice(operatorbs.indexOf("*"),1);
        
                    }
                }
                for (const item of operatorbs){   
                    if (item=="*"){
                    NewNumbs.splice(operatorbs.indexOf("*"),2,(NewNumbs[operatorbs.indexOf("*")+1]*NewNumbs[operatorbs.indexOf("*")]));
                    operatorbs.splice(operatorbs.indexOf("*"),1);
        
                    }
                }
                for (const item of operatorbs){   
                    if (item=="*"){
                    NewNumbs.splice(operatorbs.indexOf("*"),2,(NewNumbs[operatorbs.indexOf("*")+1]*NewNumbs[operatorbs.indexOf("*")]));
                    operatorbs.splice(operatorbs.indexOf("*"),1);
        
                    }
                }
                for (const item of operatorbs){   
                    if (item=="*"){
                    NewNumbs.splice(operatorbs.indexOf("*"),2,(NewNumbs[operatorbs.indexOf("*")+1]*NewNumbs[operatorbs.indexOf("*")]));
                    operatorbs.splice(operatorbs.indexOf("*"),1);
        
                    }
                }

                for (const item of operatorbs){
                    if (item=="-"){
                    NewNumbs.splice(operatorbs.indexOf("-"),2,parseFloat(NewNumbs[operatorbs.indexOf("-")])-parseFloat(NewNumbs[operatorbs.indexOf("-")+1]));
                    operatorbs.splice(operatorbs.indexOf("-"),1);
                    }
                }
                for (const item of operatorbs){
                    if (item=="-"){
                    NewNumbs.splice(operatorbs.indexOf("-"),2,parseFloat(NewNumbs[operatorbs.indexOf("-")])-parseFloat(NewNumbs[operatorbs.indexOf("-")+1]));
                    operatorbs.splice(operatorbs.indexOf("-"),1);
                    }
                }
                for (const item of operatorbs){
                    if (item=="-"){
                    NewNumbs.splice(operatorbs.indexOf("-"),2,parseFloat(NewNumbs[operatorbs.indexOf("-")])-parseFloat(NewNumbs[operatorbs.indexOf("-")+1]));
                    operatorbs.splice(operatorbs.indexOf("-"),1);
                    }
                }
                for (const item of operatorbs){
                    if (item=="-"){
                    NewNumbs.splice(operatorbs.indexOf("-"),2,parseFloat(NewNumbs[operatorbs.indexOf("-")])-parseFloat(NewNumbs[operatorbs.indexOf("-")+1]));
                    operatorbs.splice(operatorbs.indexOf("-"),1);
                    }
                }        
            
                for (const item of operatorbs){
                    if (item=="+"){
                    NewNumbs.splice(operatorbs.indexOf("+"),2,parseFloat(NewNumbs[operatorbs.indexOf("+")+1])+parseFloat(NewNumbs[operatorbs.indexOf("+")]));
                    operatorbs.splice(operatorbs.indexOf("+"),1);
                    }
                }
                for (const item of operatorbs){
                    if (item=="+"){
                    NewNumbs.splice(operatorbs.indexOf("+"),2,parseFloat(NewNumbs[operatorbs.indexOf("+")+1])+parseFloat(NewNumbs[operatorbs.indexOf("+")]));
                    operatorbs.splice(operatorbs.indexOf("+"),1);
                    }
                }
                for (const item of operatorbs){
                    if (item=="+"){
                    NewNumbs.splice(operatorbs.indexOf("+"),2,parseFloat(NewNumbs[operatorbs.indexOf("+")+1])+parseFloat(NewNumbs[operatorbs.indexOf("+")]));
                    operatorbs.splice(operatorbs.indexOf("+"),1);
                    }
                }
                for (const item of operatorbs){
                    if (item=="+"){
                    NewNumbs.splice(operatorbs.indexOf("+"),2,parseFloat(NewNumbs[operatorbs.indexOf("+")+1])+parseFloat(NewNumbs[operatorbs.indexOf("+")]));
                    operatorbs.splice(operatorbs.indexOf("+"),1);
                    }
                }
                test.splice(test.indexOf(item),1,NewNumbs)
            }
        }
        console.log(test)

        let userinp = test.join('');

        let NewNum=userinp.split(/[-+/*]/);
        let opss=userinp.split(/[01234567890.]/);
        
        let NewNums=[];
        for (const item of NewNum){
            if (item !=''){
                NewNums.push(item);
            }
        }
    
        function filtermoi(value){
            if (value!=''){
                return value;
            }
        }

    
        let operators = opss.filter(filtermoi);

        console.log(test);
        console.log(userinp);


         if (userinp.indexOf("-")==0){
                if (userinp.indexOf("--")==0){
                operators.splice(0,1)
                } else if (userinp.indexOf("--")>0) {
                NewNums.splice(operators.indexOf("--")+1,1,NewNums[operators.indexOf("--")+1]*-1);
                operators.splice(operators.indexOf("--"),1,"-")
                } else {
                NewNums.splice(0,1,NewNums[0]*-1);
                operators.splice(0,1);
            }
        }
    
        if(operators.indexOf("/-")!=-1){
            NewNums.splice(operators.indexOf("/-")+1,1,NewNums[operators.indexOf("/-")+1]*-1);
            operators.splice(operators.indexOf("/-"),1,"/")
        }
        if(operators.indexOf("/-")!=-1){
            NewNums.splice(operators.indexOf("/-")+1,1,NewNums[operators.indexOf("/-")+1]*-1);
            operators.splice(operators.indexOf("/-"),1,"/")
        }
        if(operators.indexOf("/-")!=-1){
            NewNums.splice(operators.indexOf("/-")+1,1,NewNums[operators.indexOf("/-")+1]*-1);
            operators.splice(operators.indexOf("/-"),1,"/")
        }
        if(operators.indexOf("/-")!=-1){
            NewNums.splice(operators.indexOf("/-")+1,1,NewNums[operators.indexOf("/-")+1]*-1);
            operators.splice(operators.indexOf("/-"),1,"/")
        }
        if(operators.indexOf("/-")!=-1){
            NewNums.splice(operators.indexOf("/-")+1,1,NewNums[operators.indexOf("/-")+1]*-1);
            operators.splice(operators.indexOf("/-"),1,"/")
        }
    
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*-"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*-"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*-"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*-"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*-"),1,"*")
        }

        if(operators.indexOf("--")!=-1){
            if (userinp.indexOf("--")==0){
                operators.splice(0,1)
            } else {
            NewNums.splice(operators.indexOf("--")+1,1,NewNums[operators.indexOf("--")+1]*-1);
            operators.splice(operators.indexOf("--"),1,"-")
            }
        }

        if(operators.indexOf("--")!=-1){
            if (userinp.indexOf("--")==0){
                operators.splice(0,1)
            } else {
            NewNums.splice(operators.indexOf("--")+1,1,NewNums[operators.indexOf("--")+1]*-1);
            operators.splice(operators.indexOf("--"),1,"-")
            }
        }
        if(operators.indexOf("--")!=-1){
            if (userinp.indexOf("--")==0){
                operators.splice(0,1)
            } else {
            NewNums.splice(operators.indexOf("--")+1,1,NewNums[operators.indexOf("--")+1]*-1);
            operators.splice(operators.indexOf("--"),1,"-")
            }
        }
        if(operators.indexOf("--")!=-1){
            if (userinp.indexOf("--")==0){
                operators.splice(0,1)
            } else {
            NewNums.splice(operators.indexOf("--")+1,1,NewNums[operators.indexOf("--")+1]*-1);
            operators.splice(operators.indexOf("--"),1,"-")
            }
        }

        if(operators.indexOf("+-")!=-1){
            NewNums.splice(operators.indexOf("+-")+1,1,NewNums[operators.indexOf("+-")+1]*-1);
            operators.splice(operators.indexOf("+-"),1,"+")
        }

        if(operators.indexOf("+-")!=-1){
            NewNums.splice(operators.indexOf("+-")+1,1,NewNums[operators.indexOf("+-")+1]*-1);
            operators.splice(operators.indexOf("+-"),1,"+")
        }
        if(operators.indexOf("+-")!=-1){
            NewNums.splice(operators.indexOf("+-")+1,1,NewNums[operators.indexOf("+-")+1]*-1);
            operators.splice(operators.indexOf("+-"),1,"+")
        }
        if(operators.indexOf("+-")!=-1){
            NewNums.splice(operators.indexOf("+-")+1,1,NewNums[operators.indexOf("+-")+1]*-1);
            operators.splice(operators.indexOf("+-"),1,"+")
        }
        if(operators.indexOf("+-")!=-1){
            NewNums.splice(operators.indexOf("+-")+1,1,NewNums[operators.indexOf("+-")+1]*-1);
            operators.splice(operators.indexOf("+-"),1,"+")
        }
    
        for (const item of operators){
            if(item=="/"){
            NewNums.splice(operators.indexOf("/"),2,(NewNums[operators.indexOf("/")]/NewNums[operators.indexOf("/")+1]));
            operators.splice(operators.indexOf("/"),1);  
            }
        }
        for (const item of operators){
            if(item=="/"){
            NewNums.splice(operators.indexOf("/"),2,(NewNums[operators.indexOf("/")]/NewNums[operators.indexOf("/")+1]));
            operators.splice(operators.indexOf("/"),1);  
            }
        }
        for (const item of operators){
            if(item=="/"){
            NewNums.splice(operators.indexOf("/"),2,(NewNums[operators.indexOf("/")]/NewNums[operators.indexOf("/")+1]));
            operators.splice(operators.indexOf("/"),1);  
            }
        }
        for (const item of operators){
            if(item=="/"){
            NewNums.splice(operators.indexOf("/"),2,(NewNums[operators.indexOf("/")]/NewNums[operators.indexOf("/")+1]));
            operators.splice(operators.indexOf("/"),1);  
            }
        }
        for (const item of operators){
            if(item=="/"){
            NewNums.splice(operators.indexOf("/"),2,(NewNums[operators.indexOf("/")]/NewNums[operators.indexOf("/")+1]));
            operators.splice(operators.indexOf("/"),1);  
            }
        }
    
    
        for (const item of operators){   
            if (item=="*"){
            NewNums.splice(operators.indexOf("*"),2,(NewNums[operators.indexOf("*")+1]*NewNums[operators.indexOf("*")]));
            operators.splice(operators.indexOf("*"),1);
    
            }
        }
        for (const item of operators){   
            if (item=="*"){
            NewNums.splice(operators.indexOf("*"),2,(NewNums[operators.indexOf("*")+1]*NewNums[operators.indexOf("*")]));
            operators.splice(operators.indexOf("*"),1);
    
            }
        }
        for (const item of operators){   
            if (item=="*"){
            NewNums.splice(operators.indexOf("*"),2,(NewNums[operators.indexOf("*")+1]*NewNums[operators.indexOf("*")]));
            operators.splice(operators.indexOf("*"),1);
    
            }
        }        
        for (const item of operators){   
            if (item=="*"){
            NewNums.splice(operators.indexOf("*"),2,(NewNums[operators.indexOf("*")+1]*NewNums[operators.indexOf("*")]));
            operators.splice(operators.indexOf("*"),1);
    
            }
        }
        for (const item of operators){   
            if (item=="*"){
            NewNums.splice(operators.indexOf("*"),2,(NewNums[operators.indexOf("*")+1]*NewNums[operators.indexOf("*")]));
            operators.splice(operators.indexOf("*"),1);
    
            }
        }
        
        for (const item of operators){
            if (item=="-"){
            NewNums.splice(operators.indexOf("-"),2,parseFloat(NewNums[operators.indexOf("-")])-parseFloat(NewNums[operators.indexOf("-")+1]));
            operators.splice(operators.indexOf("-"),1);
        }
        }
        for (const item of operators){
            if (item=="-"){
            NewNums.splice(operators.indexOf("-"),2,parseFloat(NewNums[operators.indexOf("-")])-parseFloat(NewNums[operators.indexOf("-")+1]));
            operators.splice(operators.indexOf("-"),1);
            }
        }
        for (const item of operators){
            if (item=="-"){
            NewNums.splice(operators.indexOf("-"),2,parseFloat(NewNums[operators.indexOf("-")])-parseFloat(NewNums[operators.indexOf("-")+1]));
            operators.splice(operators.indexOf("-"),1);
            }
        }
        for (const item of operators){
            if (item=="-"){
            NewNums.splice(operators.indexOf("-"),2,parseFloat(NewNums[operators.indexOf("-")])-parseFloat(NewNums[operators.indexOf("-")+1]));
            operators.splice(operators.indexOf("-"),1);
            }
        }
        for (const item of operators){
            if (item=="-"){
            NewNums.splice(operators.indexOf("-"),2,parseFloat(NewNums[operators.indexOf("-")])-parseFloat(NewNums[operators.indexOf("-")+1]));
            operators.splice(operators.indexOf("-"),1);
            }
        }
    
       
        for (const item of operators){
            if (item=="+"){
            NewNums.splice(operators.indexOf("+"),2,parseFloat(NewNums[operators.indexOf("+")+1])+parseFloat(NewNums[operators.indexOf("+")]));
            operators.splice(operators.indexOf("+"),1);
            }
        }  
        for (const item of operators){
            if (item=="+"){
            NewNums.splice(operators.indexOf("+"),2,parseFloat(NewNums[operators.indexOf("+")+1])+parseFloat(NewNums[operators.indexOf("+")]));
            operators.splice(operators.indexOf("+"),1);
            }
        }    
        for (const item of operators){
            if (item=="+"){
            NewNums.splice(operators.indexOf("+"),2,parseFloat(NewNums[operators.indexOf("+")+1])+parseFloat(NewNums[operators.indexOf("+")]));
            operators.splice(operators.indexOf("+"),1);
            }
        } 
        for (const item of operators){
            if (item=="+"){
            NewNums.splice(operators.indexOf("+"),2,parseFloat(NewNums[operators.indexOf("+")+1])+parseFloat(NewNums[operators.indexOf("+")]));
            operators.splice(operators.indexOf("+"),1);
            }
        } 
        for (const item of operators){
            if (item=="+"){
            NewNums.splice(operators.indexOf("+"),2,parseFloat(NewNums[operators.indexOf("+")+1])+parseFloat(NewNums[operators.indexOf("+")]));
            operators.splice(operators.indexOf("+"),1);
            }
        } 

        console.log(NewNums[0])
    
       let finalanswer=NewNums[0];
       document.getElementById("currentsum").innerHTML=finalanswer;

}
//Should work
