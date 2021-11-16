//Adicionar o menu hamburguer em uma variavel, pegando ele pelo id 
var mobile = document.getElementById('menu-hamburguer') 

//Adicionar o menu normal em uma variavel, pegando ele pela classe
var menu = document.getElementsByClassName('menu-normal')

mobile.onclick = function(){ //Função ao click no mobile
    for(i=0;i<menu.length;i++){ //Condição para percorrer todos elementos da variavel
        if(menu[i].style.display == 'inline'){ //Se estiver visivel
            menu[i].style.display = 'none' //Fica invisivel
        } else{ //Senão
            menu[i].style.display = 'inline'//Fica visivel
        }
    }
    
}

