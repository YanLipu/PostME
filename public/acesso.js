var userName = 'oi'
function acesso(form){

/*Checa nome e senha - maiusculas serão
convertidas para minusculas
*/

     form.nome.value = form.nome.value.toLowerCase()
     form.password.value = form.password.value.toLowerCase()

     userName = form.nome.value;     
    
     if (form.nome.value == "yan" && form.password.value == "123" || 
        form.nome.value == "kardek" && form.password.value == "123"){
         location = "index.html"
     }
     else{
        form.nome.value == ""
        form.password.value == ""
        alert("Dados Incorretos")
     }
}