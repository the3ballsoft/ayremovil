var codigoOK = 2010114051;
var codigoError = 1234;
var passOK = '123456';
var passError = 'invalida123';

describe('Funciones de login', function() {


  it('Login correcto', function() {
    var respuesta = iniciarSesion(codigoOK, passOK);
    expect(respuesta.responseJSON.msg).toEqual("true");
  });

  it('Login incorrecto', function() {
    var respuesta = iniciarSesion(codigoOK, passError);
    expect(respuesta.responseJSON.msg).toEqual("false");
  });

  it('Codigo no existe', function() {
    var respuesta = iniciarSesion(codigoError, passOK);
    expect(respuesta.responseJSON.msg).toEqual("El codigo no existe!");
  });

});
