describe('Navegacion y seguridad', function(){
  var URLnoRegistrada = 'http://localhost:8100/noregistrada';

  it('Debe redireccionar / a /#/login', function() {
    browser.get('http://localhost:8100/');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/login');
      });
    });

  it('url no registrada redirecciona a /#/login', function() {
    browser.get(URLnoRegistrada);
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/login');
      });
    });
});


describe('Vista de Login', function() {
  beforeEach(function() {
    browser.get('http://localhost:8100/#/login');
  });
});

describe('Funciones de login', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100/#/login');
  });

  it('Login correcto', function() {
    // expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
  });

  it('Login incorrecto', function() {
    // expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
  });

  it('Codigo no existe', function() {
    // expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
  });

});