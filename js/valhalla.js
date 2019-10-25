/**
 * 个人中心
 * http://romel.wiki/account/
**/
switch (GLOBAL.userData.groupArea) {
  // 简体中文
  case 0:
    GLOBAL.language.theName = {
      contributors: '提供者',
      commentPlaceholder: '请不要在此回复BOSS內容，每个公会的BOSS都不一样',
      ruleDetail: '<p>说明</p><p>1. 每周刷新后，地图线路和 BOSS 都会重置；</p><p>2. 每个公会的地图线路是一样的，只是 BOSS 不同。</p>',
      edit: '编辑线路',
      upload: '上传图片'
    };
    break;

  // 繁體中文
  case 2:
    GLOBAL.language.theName = {
      contributors: '提供者',
      commentPlaceholder: '請不要再次回復BOSS內容，每個公會的BOSS都不一樣',
      ruleDetail: '<p>說明</p><p>1. 每週刷新后，地圖線路和 BOSS 都會重置；</p><p>2. 每個公會的地圖線路是一樣的，只是 BOSS 不同。</p>',
      edit: '編輯地圖',
      upload: '上傳圖片'
    };
    break;

  // Japanese
  case 6:
    GLOBAL.language.theName = {
      contributors: '提供者',
      commentPlaceholder: '',
      ruleDetail: '<p>説明</p><p>1. 月曜日の05：00、地図とBOSSを重置します；</p><p>2. ギルド毎の地図が一致ですが。BOSSが違っています。</p>',
      edit: '編集',
      upload: 'アップロード'
    };
    break;

  // English
  default:
    GLOBAL.language.theName = {
      contributors: 'Provider',
      commentPlaceholder: 'Please don\'t reply to what boss in the map, every guild is different.',
      ruleDetail: '<p>Note</p><p>1. Reset every Monday at 5:00</p><p>2. The map of each guild is the same, just boss is different.</p>',
      edit: 'Edit',
      upload: 'Upload Picture'
    };
    break;
};