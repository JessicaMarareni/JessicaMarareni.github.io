function zero(){
    var userinp=document.querySelector("#currentsum").innerHTML;
    document.getElementById("currentsum").innerHTML=userinp+"0";
    }
    
    function one(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"1";
    }
    function two(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"2";
    }
    
    function three(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"3";
    }
    
    function four(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"4";
    }
    
    function five(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"5";
    }
    
    function six(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"6";
    }
    
    function seven(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"7";
    }
    
    function eight(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"8";
    }
    
    function nine(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"9";
    }
    
    function point(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        let exbef=userinp.slice(-1);
        if (exbef!="."){
            document.getElementById("currentsum").innerHTML=userinp+".";
         } else {
            document.getElementById("currentsum").innerHTML=userinp;
            alert("You may not have two .'s in a row")
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
        var userinp=document.querySelector("#currentsum").innerHTML;
        let NewNum=userinp.split(/[-+/*]/);
        let opss=userinp.split(/[01234567890.]/);
        document.getElementById("tester").innerHTML=userinp;
        
        let NewNums=[]

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

        if (userinp.indexOf("-")==0){
            NewNums.splice(0,1,NewNums[0]*-1);
            operators.splice(0,1);
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
            operators.splice(operators.indexOf("*"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*"),1,"*")
        }
        if(operators.indexOf("*-")!=-1){
            NewNums.splice(operators.indexOf("*-")+1,1,NewNums[operators.indexOf("*-")+1]*-1);
            operators.splice(operators.indexOf("*"),1,"*")
        }

//Then I also need to solve the rounding problem

document.getElementById("c").innerHTML=NewNums;
document.getElementById("o").innerHTML=operators;

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

        let finalanswer=NewNums[0];
        document.getElementById("currentsum").innerHTML=finalanswer;

}
    
