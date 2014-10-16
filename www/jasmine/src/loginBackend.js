
function iniciarSesion(codigo, password){
    var res=$.ajax(
            {
                url: 'http://ayremovil.herokuapp.com/auth/login',
                type: 'POST',
                async: false,
                data: {"codigo": codigo, "password" : password},
                success: function(data) {
                  return data;
                    if(data.msg === "true"){
                      return "login correcto";
                    }
                    if(data.msg === "false"){
                      return "datos invalidos";
                    }
                },
                error: function(data){
                  return data.msg;
                }
            }).success();
    return res;
  }
