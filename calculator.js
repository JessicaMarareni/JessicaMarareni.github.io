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
        document.getElementById("currentsum").innerHTML=userinp+".";
    }
    
    function plus(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"+";
    }
    
    function minus(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"-";
    } 

    function divide(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"/";
    }

    function multiply(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp+"*";
    }

    function clearall(){
        document.getElementById("currentsum").innerHTML="";
    }  
    
    function deleteone(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=userinp.slice(0,-1);
    } 
    
    function equals(){
        var userinp=document.querySelector("#currentsum").innerHTML;
        document.getElementById("currentsum").innerHTML=eval(userinp);
    }
    
    function tester(){
    var userinp=document.querySelector("#currentsum").innerHTML;
    let userlength=userinp.length;
    //Looks like we can use innerHTML or textContent for query
    document.getElementById("tester").innerHTML="The string length is:"+"<br>"+userlength;
    }
    
    