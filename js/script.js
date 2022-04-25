window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function openNav() {
    document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "leer mas";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "leer menos";
        moreText.style.display = "inline";
    };
};

/*formulario*/

$(document).ready(function() {

    $("#error").hide();

    $("#formulario").submit(function() {
        var mensaje = "";

        /*formulario de CONTACTO*/

        if ($("#nombre").val().trim().length == 0) {

            mensaje = "El Nombre esta en blanco";
        }

        if ($("#correo").val().trim().length == 0) {

            mensaje = "El Correo esta en blanco";
        }

        /*if($("#telefono").val().trim().length==0){

            mensaje = "El Teléfono esta en blanco";
        }*/

        if ($("#asunto").val().trim().length == 0) {

            mensaje = "El Asunto esta en blanco";
        }

        if ($("#comentario").val().trim().length == 0) {

            mensaje = "El Comentario esta en blanco";
        }

        if (mensaje != "") {

            $("#error").html(mensaje);
            $("#error").show();
            event.preventDefault();
        }

        if (mensaje == "") {

            this.submit();
        }
    });

})

$(document).ready(function() {

    $("#errorR").hide();

    $("#formularioR").submit(function() {
        var mensaje = "";

        /*formulario de REGISTRO*/

        if ($("#nombreR").val().trim().length == 0) {

            mensaje = "El Nombre esta en blanco";
        }

        if ($("#correoR").val().trim().length == 0) {

            mensaje = "El Correo esta en blanco";
        }

        if ($("#usuarioR").val().trim().length == 0) {

            mensaje = "El Usuario esta en blanco";
        }

        if ($("#contraseñaR").val().trim().length == 0) {

            mensaje = "La Contraseña es incorrecta";
        }

        if ($("#vContraseñaR").val().trim().length == 0) {

            mensaje = "La Contraseña es incorrecta";
        }

        if ($("#vContraseñaR").val().trim().length == 0) {

            mensaje = "La Contraseña es incorrecta";
        }

        if (mensaje != "") {

            $("#errorR").html(mensaje);
            $("#errorR").show();
            event.preventDefault();
        }

        if (mensaje == "") {

            this.submit();
        }
    });

})


/*Formulario inicio de sesión*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if (usuario.length == 0) {
        alert('No has escrito nada en el usuario');
        return;
    }
    var clave = document.getElementById('contraseña').value;
    if (clave.length < 6) {
        alert('La contraseña no es válida');
        return;
    }
    this.submit();
}

/*API*/

window.addEventListener('load', () => {
    let lon
    let lat

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            /*console.log(posicion.coords.latitude)*/
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            let temperaturaValor = document.getElementById('temperatura-valor')
            let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

            let ubicacion = document.getElementById('ubicacion')
            let iconoAnimado = document.getElementById('icono-animado')

            let vientoVelocidad = document.getElementById('viento-velocidad')

            const url = 'https://api.openweathermap.org/data/2.5/weather?q=Viña&lang=es&units=metric&appid=6a665223ff4469670b30b1b8357fe566'

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = temp + '°C'

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = data.wind.speed + 'm/s'

                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = 'animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = 'animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            iconoAnimado.src = 'animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            iconoAnimado.src = 'animated/snowy-6.svg'
                            break;
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'animated/weather.svg'
                            break;
                        case 'Clouds':
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            break;
                        default:
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
})