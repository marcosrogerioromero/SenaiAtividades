
var menuNormal=$('.menu-normal');
$('#menu-hamburguer').click(function(){ //Função ao click no mobile
    for (let index = 0; index < menuNormal.length; index++) {
            if(menuNormal[index].style.display == 'inline'){ //Se estiver visivel
                menuNormal[index].style.display = 'none' //Fica invisivel
            } else{ //Senão
                menuNormal[index].style.display = 'inline'//Fica visivel
    
            }
        
    }
    
    
});

