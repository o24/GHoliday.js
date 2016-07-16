## 参考
https://ics.media/entry/3405/2

## setup
npm install browser-sync 
npm install gulp

vit gulpfile.js

=======================
// gulpプラグインの読みこみ
var gulp = require('gulp');
 
// browser-syncのプラグインの読み込み
var browserSync = require("browser-sync");
 
// タスクの設定
// ここの名前が"gulp xxx"になる
gulp.task("watch", function () {
    browserSync({
        server: {
            baseDir: "src" // ルートとなるディレクトリを指定
        }
    });
 
    // srcフォルダ以下のファイルを監視
    gulp.watch("src/**", function() {
        browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
    });
});

=======================

# run
gulp watch
