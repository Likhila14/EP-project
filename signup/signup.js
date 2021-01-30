 
function validateform(){
     var uname = document.forms["regform"]["uname"].value
     var fname = document.forms["regform"]["fname"].value
     var pass = document.forms["regform"]["pass"].value
     var cpass = document.forms["regform"]["cpass"].value
     var mail = document.forms["regform"]["mail"].value

     if(uname == null || uname==""){
         alert("User Name can't be empty");
         return false;
     }else if(fanme == null || fname == ""){
        alert("Full Name can't be empty");
        return false;
     }else if(pass == null || pass == ""){
        alert("password can't be empty");
        return false;
     }else if(cpass == null || cpass == ""){
        alert("Please type same password in cofirm password");
        return false;
     }else if(mail == null || mail == ""){
        alert("Email can't be empty");
        return false;
     }else if( mail != ""){
         for(const i =0 ; i< mail.length()-10 ; i=i+1){
             if(mail.charAt(i) == '@'){
                 if(mail.charAt(i+1) != 'g' && mail.charAt(i+2) != 'm' 
                 && mail.charAt(i+3) != 'a' && mail.charAt(i+4) != 'i' 
                 && mail.charAt(i+5) != 'l' && mail.charAt(i+6) != '.' 
                 && mail.charAt(i+7) != '.' && mail.charAt(i+8) != 'c'
                 && mail.charAt(i+9) != 'o' && mail.charAt(i+10) != 'm'    ){
                    alert("please enter correct email");
                    return false; 
                 }
             }

         }
     }
        
}