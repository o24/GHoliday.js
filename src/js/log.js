var Log = function () {};

/**
 * cssのカラースタイル
 * HEX,または色名(red, blue, greenなど)
 **/
Log.color = function (message, color) {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf("trident") != -1) {
    console.log(message);
  } else {
    var style = "color:" + color + ";"
    var fix_message = "%c" + message + "[aho]";
    console.log(fix_message, style);
  }
}

Log.red = function (message) {
  this.color(message, "red");
}

Log.green = function (message) {
  this.color(message, "green");
}

Log.blue = function (message) {
  this.color(message, "blue");
}

Log.d = function (message) {
  if (this.isProduction) {
    return;
  }

  console.debug(message);
}

Log.w = function (message) {
  if (this.isProduction) {
    return;
  }

  console.warn(message);
}

Log.i = function (message) {
  if (this.isProduction) {
    return;
  }

  console.info(message);
}

Log.e = function (message) {
  if (this.isProduction) {
    return;
  }
  console.error(message);
}
