function comprobar(){
    //Comprueba si los campos están vacios y muestra un error para cada campo.
    if( document.getElementById("email").value == null || document.getElementById("email").value.length == 0){
        alert("[ERROR] Campo del email vacio, intentelo de nuevo");
        return false;

    }else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(document.getElementById("email").value))) {
        alert("[ERROR] La dirección de email es incorrecta");
        return false;
    }
    alert("[SUCCEED] DATOS ENVIADOS AL SERVIDOR");
    return true;
}


function comprobar2(){
    //Comprueba si los campos están vacios y muestra un error para cada campo.
    if( document.getElementById("name").value == null || document.getElementById("name").value.length == 0){
        alert("[ERROR] Campo del nombre vacio, intentelo de nuevo");
        return false;
    }else if (document.getElementById("email").value == null || document.getElementById("email").value.length == 0) {
        alert("[ERROR] Campo del email vacio, intentelo de nuevo");
        return false;
    }else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(document.getElementById("email").value))) {
        alert("[ERROR] La dirección de email es incorrecta");
        return false;
    }else if (document.getElementById("asunto1").value == null || document.getElementById("asunto1").value.length == 0) {
        alert("[ERROR] Campo del asunto vacio, intentelo de nuevo");
    return false;
    }else if (document.getElementById("mensaje").value == null || document.getElementById("mensaje").value.length == 0) {
        alert("[ERROR] Campo del mensaje vacio, intentelo de nuevo");
    return false;
    }
    alert("[SUCCEED] DATOS ENVIADOS AL SERVIDOR");
    return true;
}

function Mostrarsmile() {
    
    document.getElementById("smile").style.visibility ='visible';
}