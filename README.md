# gas-fileercopy
Googleドライブで共有されているファイルを、メタデータ（名前、作成日、更新日）を保持して、マイドライブにコピーするGoogle Apps Script（GAS）です。

## 概要
- 共有されたファイル（コピー元）をマイドライブにコピーします。
- コピーの際、元のファイルの「作成日」と「最終更新日」を維持します。
- GASの拡張サービスである「Drive API」を使用しています。

## 使い方

### 1. コピー元の作業（共有元のユーザー）

#### ① ファイルを共有する
　共有したい（コピーさせたい）ファイルを、スクリプト実行者に対して共有（閲覧者 または 編集者）します。

### 2. コピー先の作業（スクリプト実行者）

#### ① Drive API を有効にする
　GASのエディタ画面で、以下の手順でDrive APIを追加します。
　1. 左側メニューの「サービス」の横にある「＋」ボタン（サービスを追加）をクリックします。
　2. リストの中から「**Drive API**」を探して選択します。
　3. バージョンが「**v3**」になっていることを確認し、「追加」をクリックします。
　4. 「サービス」の下に「Drive」という文字が追加されたことを確認します。

#### ② GASの設定を変更する
　コード内の設定項目に、共有された元の「ファイルID」を入力します。
　> **※フォルダIDとは？**
　> フォルダをブラウザで開いた際のURL `https://drive.google.com/drive/folders/〇〇〇` の「〇〇〇（英数字の文字列）」の部分です。
  > ① Googleドキュメントやスプレッドシートなどの場合
  >　　https://docs.google.com/spreadsheets/d/1aBcD2eFgHiJkLmNoPqRsTuVwXyZ1234567890/edit#gid=0
  > 　この場合のファイルIDは、1aBcD2eFgHiJkLmNoPqRsTuVwXyZ1234567890 の部分だけです。
  > ② PDFや画像、動画などのファイルの場合
  > 　https://drive.google.com/file/d/1xYzA2bCdEfGhIjKlMnOpQrStUvW9876543210/view?usp=sharing
  > 　この場合のファイルIDは、1xYzA2bCdEfGhIjKlMnOpQrStUvW9876543210 の部分だけです。

#### ③ GASを実行する
　設定完了後、スクリプトを実行します。処理が完了すると、マイドライブの一番上（ルート）にコピーされたファイルが作成されます。

## 注意点

- フォルダのコピーには対応していません。

## 使用技術

- Google Apps Script (GAS)
- Google Drive API v3

## 画面イメージ

<img src="https://github.com/fukulow25/gas-foldercopy/blob/main/images/screenshot_foldercopy.jpg" width="80%">
# gas-filecopy
