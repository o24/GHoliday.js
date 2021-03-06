# GHoliday.js
Googleカレンダー(V3)から祝日を取得します。

## Required
* jQuery
検証済みバージョン: 2.1.1(`$.ajax()`が使えるバージョンならどのバージョンでも使えるはずです)

## APIキー取得方法
[Google API Console](https://console.developers.google.com/?hl=JA)にてGoogleカレンダー(V3)のAPIキーを発行してください

APIキーの取得方法は[こちら](http://blog.o24.me/?p=954)を見て下さい

## APIキー設定
> g_holiday.js

```
GHoliday.API_KEY = "ここにAPIキーを設定してください";
```

## 使い方
jQueryをロード後、`g_holiday.js`をロードしてください

```
<!-- html tag -->
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/g_holiday.js"></script>

// code
GHoliday.getHoliday({
  start_date: "yyyy-mm-dd",
  end_date: "yyyy-mm-dd",
  callback: function (error, res) {
    // 何か
  }
});
```

## LICENSE
```
The MIT License (MIT)

Copyright (c) 2016 o24.me

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
