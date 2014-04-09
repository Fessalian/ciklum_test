'use strict'

!function ( window, document, undefined ) {

  var injector = {};

  var microangConstructor = function () {};
  microangConstructor.prototype = microangConstructor;

  microangConstructor.prototype.templater = function ( html ) {
    var re = /<%(.+?)%>/g,
    reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
    code = 'with(obj) { var r=[];\n';

    var addToken = function( line, js ) {
      js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') : (code += line !== '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
      return addToken;
    };

    var compiled = function ( data ) {
      var cursor = 0,  result, match;

      while(match = re.exec(html)) {
        addToken(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
      };

      addToken( html.substr(cursor, html.length - cursor) );
      code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, '');
      try {
        result = new Function('obj', code).apply(data, [data]);
      } catch(err) {
        console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n");
      };
      return result;
    };

    return compiled;
  };

  microangConstructor.prototype.service = function ( name, paramsArray, callback ) {
    this.addToInjector( name, paramsArray, callback );
  };

  microangConstructor.prototype.controller = function ( name, paramsArray, callback ) {
    this.addToInjector( name, paramsArray, callback );
    callback.apply( this, this.receiveFromInjector( paramsArray ) );
  };

  microangConstructor.prototype.addToInjector = function ( key, injectArray, value ) {
    if ( injector && injector[key] ) { return; }
    injector[key] = [injectArray, value, undefined];
  };

  microangConstructor.prototype.receiveFromInjector = function ( paramsArray ) {
    var newParamsArray = [];
    paramsArray.forEach( function( name ) {
      if ( !injector[name] ) { return newParamsArray.push( undefined ); }

      if ( injector[name] && injector[name][2] ) {
        newParamsArray.push( injector[name][2] );
      } else {
        injector[name][2] = injector[name][1]();
        newParamsArray.push( injector[name][2] );
      };
    });

    return newParamsArray;
  };



  var microang = window.microang = {};
  microang.prototype = microang;

  microang.prototype.module = function () {
    return new microangConstructor();
  };

} ( window, document, undefined );
