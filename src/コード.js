function copyFileKeepingDates() {
  // ==========================================
  // # 概要
  // ==========================================
  // 共有されたファイル（コピー元）をマイドライブにコピーします。
  // その際、メタデータ（名前、作成日、更新日）を保持します。
  // 注意）サービスにDRIVE（V3）が必要です
  // 注意）フォルダには対応していません
  // ==========================================
  // # 使い方
  // ==========================================
  // 設定項目に共有されたファイル（コピー元）のファイルIDを入力しスクリプトを実行してください。
  // ファイルIDは以下①②のURLの一部分です
  // ① Googleドキュメントやスプレッドシートなどの場合
  // 　https://docs.google.com/spreadsheets/d/1aBcD2eFgHiJkLmNoPqRsTuVwXyZ1234567890/edit#gid=0
  // 　この場合のファイルIDは、1aBcD2eFgHiJkLmNoPqRsTuVwXyZ1234567890 の部分だけです。
  // ② PDFや画像、動画などのファイルの場合
  // 　https://drive.google.com/file/d/1xYzA2bCdEfGhIjKlMnOpQrStUvW9876543210/view?usp=sharing
  // 　この場合のファイルIDは、1xYzA2bCdEfGhIjKlMnOpQrStUvW9876543210 の部分だけです。

  // ==========================================
  // # 設定項目
  // 共有されたファイル（コピー元）のファイルIDを入力してください
  const SOURCE_FILE_ID = 'ここにファイルIDを入力';
  // ==========================================

  try {
    // 1. コピー元ファイルのメタデータ（名前、作成日、更新日）を取得
    const fileMeta = Drive.Files.get(SOURCE_FILE_ID, {fields: 'name, createdTime, modifiedTime'});
    
    // 2. マイドライブのルートIDを取得
    const rootFolderId = DriveApp.getRootFolder().getId();
    
    // 3. 日付情報を維持したまま、ファイルをマイドライブにコピー
    const copiedFile = Drive.Files.copy({
      name: fileMeta.name + " (コピー)",
      parents: [rootFolderId],
      createdTime: fileMeta.createdTime,
      modifiedTime: fileMeta.modifiedTime
    }, SOURCE_FILE_ID);
    
    Logger.log(`ファイルのコピーが完了しました: ${copiedFile.name}`);
  } catch (error) {
    Logger.log('エラーが発生しました: ' + error.toString());
  }
}
