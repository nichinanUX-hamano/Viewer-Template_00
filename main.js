// main.js

import 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';

const viewer = document.querySelector('model-viewer');
//const model1Button = document.getElementById('model1Button');
//const model2Button = document.getElementById('model2Button');

/*
// デフォルトモデルを設定
let clickCount = 0;
// ページが読み込まれたときに初期ビューを設定
viewer.cameraOrbit = '0deg 90deg 1m';
// クリックイベントハンドラを設定
viewer.addEventListener('click', () => {
  clickCount++;
  // クリック回数に応じて異なるビューを設定
  switch (clickCount % 3) {
    case 1:
      viewer.cameraOrbit = '45deg 90deg 1m'; // ビュー1
      break;
    case 2:
      viewer.cameraOrbit = '120deg 120deg 2m'; // ビュー2
      break;
    case 0:
      viewer.cameraOrbit = '90deg 90deg 1m';  // ビュー3
      break;
    default:
      break;
  }
});
*/

/*
// デフォルトモデルを設定
viewer.src = 'model/apple.glb';

// ボタンのクリックイベントハンドラを設定
model1Button.addEventListener('click', () => {
viewer.src = 'model/apple.glb';
});

model2Button.addEventListener('click', () => {
viewer.src = 'model/boat.glb';
});
*/