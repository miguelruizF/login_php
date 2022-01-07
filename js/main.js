$("#formLogin").submit(function(e) {
    e.preventDefault();
    var usuario = $.trim($("#usuario").val()); //Se capturan los valores de los input
    var password = $.trim($("#password").val());

    if (usuario.length == "" || password.length == "") {
        Swal.fire({
            icon: 'warning',
            title: "Debe ingresar un usuario y/o contraseña",
        });
        return false;
    } else {
        $.ajax({
            url: "BD/login.php", //a donde se enviaran los datos
            type: "POST", //metodo de envio
            datatype: "json", //tipo de formato
            data: { usuario: usuario, password: password },
            success: function(data) {
                if (data == "null") {
                    Swall.fire({
                        icon: "error",
                        title: "Usuario y/o password incorrecta",
                    });
                } else {
                    Swal.fire({
                        icon: "success",
                        title: "Bienvenido",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Ingresar"
                    }).then((result) => {
                        if (result.value) {
                            window.location.href = "https://www.youtube.com/";
                        }
                    });
                }
            }
        });
    }
});