 
    function get_url(){
       // modificar acá la URL según donde esté ejecutando
        return  'http://127.0.0.1:5000/';

        // return 'https://malucila.pythonanywhere.com/';

    } 
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    function validarEnviar(){
    parrafo = document.getElementById("error")
    // ANALIZO EL NOMBRE
    if(document.formulario.nombre.value.length <= 2){
        // alert("Ingrese un nombre correcto.")
        document.formulario.nombre.focus()
        parrafo.innerHTML = "Nombre incorrecto."
        return
    }
     // ANALIZO EL APELLIDO
     if(document.formulario.apellido.value.length <= 2){
        // alert("Ingrese un nombre correcto.")
        document.formulario.apellido.focus()
        parrafo.innerHTML = "Apellido incorrecto."
        return
    }
   
    let edadEntera = parseInt(document.formulario.edad.value)
     
    if(isNaN(edadEntera)){
        // alert("Tiene que ingresar un número valido en la edad.")
        document.formulario.edad.focus()
        parrafo.innerHTML = "Edad incorrecta."
        return
    }
    else{
        if(edadEntera < 18 || edadEntera > 65){
            // alert("Tiene que ser mayor de edad o tener menos de 65 años.")
            document.formulario.edad.focus()
            parrafo.innerHTML = "Edad incorrecta."
            return 
        }
    } 
   
    // ANALIZO SI SELECCIONÓ DE FORMA CORRECTA
   /*  if(document.formulario.interes.selectedIndex == 0){
        // alert("Debe seleccionar un motivo de su contacto.")
        document.formulario.interes.focus()
        parrafo.innerHTML = "Seleccion incorrecta."
        return 
    } */

    parrafo.innerHTML = "Gracias por completar el formulario!"
    document.formulario.submit()
}
