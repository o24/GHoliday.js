/**
 * Google カレンダーから祝日を取得する
 **/
var GHoliday = function () {};

GHoliday.DATE_SUFFIX = "T00%3A00%3A00.000Z";
GHoliday.zeroPadding = function (num) {
  if (num > 9) {
    return "" + num;
  }
  return "0" + num;
}

GHoliday.formatDate = function (date, disabled_suffix) {
  var year = date.getFullYear();
  var month = GHoliday.zeroPadding(date.getMonth() + 1);
  var day = GHoliday.zeroPadding(date.getDate());

  var suffix = !disabled_suffix ? GHoliday.DATE_SUFFIX : "";

  var str = year + "-" + month + "-" + day + suffix;
  return str;
};

/**
 * @params
 * api_key : API for Google V3
 * start_date : "yyyy-mm-dd"
 * end_date : "yyyy-mm-dd"
 * callback : function(error, json)
 **/
GHoliday.getHoliday = function (params) {

  var api_key, start_date, end_date;

  if (params && params.api_key) {
    api_key = params.api_key;
  } else {
    api_key = "AIzaSyBYhp__H_KU3ogZPGdJ12xns6EjLBLLVxQ";
  }

  var today;
  if (params && params.start_date) {
    today = Date.parse(params.start_date);
    //start_date = params.start_date + "date_suffix";
  } else {
    today = new Date();
  }
  start_date = GHoliday.formatDate(today);

  if (params && params.end_date) {
    //end_date = params.end_date + "date_suffix";
    today = Date.parse(params.end_date);
  } else {
    today.setYear(today.getFullYear() + 1);
    //start_date = GHoliday.formatDate(today);
  }
  end_date = GHoliday.formatDate(today);

  var url = "https://www.googleapis.com/calendar/v3/calendars/japanese__ja@holiday.calendar.google.com/events" + "?key=" + api_key + "&timeMin=" + start_date + "&timeMax=" + end_date + "&maxResults=200&orderBy=startTime&singleEvents=true";

  $.ajax({
      url: url,
      method: "get",
    })
    .done(function (res) {
      if (params.callback)
        params.callback(false, res.items);
    })
    .fail(function (res) {
      if (params.callback)
        params.callback(true, null);
    });
}
