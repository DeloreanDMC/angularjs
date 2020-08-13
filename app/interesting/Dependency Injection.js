myMod.provider('greeting', function() {
    this.$get = function() {
      return function(name) {
        alert("Hello, " + name);
      };
    };
  });
  
  myMod.factory('greeting', function() {
    return function(name) {
      alert("Hello, " + name);
    };
  });
  
  myMod.service('greeting', function() {
    return function(name) {
      alert("Hello, " + name);
    };
  });
  
  myMod.value('greeting', function(name) {
    alert("Hello, " + name);
  });
  
  
  myMod.config(function($provide) {
    $provide.provider('greeting', function() {
      this.$get = function() {
        return function(name) {
          alert("Hello, " + name);
        };
      };
    });
  });
  
  myMod.config(function($provide) {
    $provide.factory('greeting', function() {
      return function(name) {
        alert("Hello, " + name);
      };
    });
  });
  
  myMod.config(function($provide) {
    $provide.value('greeting', function(name) {
      alert("Hello, " + name);
    });
  });
  
  //**********************************************************
  
  myMod.provider('greeting', function() {
    var text = 'Hello, ';
        
    this.setText = function(value) {
      text = value;
    };
        
    this.$get = function() {
      return function(name) {
        alert(text + name);
      };
    };
  });
  
  myMod.config(function(greetingProvider) {
    greetingProvider.setText("Howdy there, ");
  });
  
  myMod.run(function(greeting) {
    greeting('Ford Prefect');
  });