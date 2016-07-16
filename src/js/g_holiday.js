/**
 * Google カレンダーから祝日を取得する
 *
 * License : MIT
 * 2016 o24.me
 **/
var GHoliday = function () {};

// APIキーを設定してください
GHoliday.API_KEY = "APIキーを設定してください";

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
 * Googleカレンダーから祝日取得
 *
 * @params api_key : Googleカレンダー V3 の APIキー
 * @params start_date : String "yyyy-mm-dd"
 * @params end_date : String "yyyy-mm-dd"
 * @params callback : function(error, Object<Array>)
 **/
GHoliday.getHoliday = function (params) {

  var api_key, start_date, end_date;

  if (params && params.api_key) {
    api_key = params.api_key;
  } else {
    api_key = GHoliday.API_KEY;
  }

  var today;
  if (params && params.start_date) {
    today = new Date(params.start_date);
  } else {
    today = new Date();
  }
  start_date = GHoliday.formatDate(today);

  if (params && params.end_date) {
    today = new Date(params.end_date);
  } else {
    today.setYear(today.getFullYear() + 1);
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
