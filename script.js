

const myElement = document.querySelector('#myElement');

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      alert('要素が表示されました');
    } else {
      alert('要素が非表示です');
    }
  });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(callback, options);

observer.observe(myElement);




// const options = {
//     root: null, // ビューポートをルートとして使用
//     rootMargin: '0px', // ビューポートのマージン
//     threshold: 0.5 // 要素がビューポートの50％以上表示された場合にイベントを発火
//   };
  
//   const target = document.querySelector('img');
//   observer.observe(target);

//   const observer = new IntersectionObserver(callback, options);

//   function callback(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // 要素がビューポート内に表示された場合の処理
//         // ここで画像の読み込みを開始したり、アクションを実行したりできます
//         alert('you did it!')
//       } else {
//         alert('you do not did it!')
//         // 要素がビューポート外に表示された場合の処理
//         // ここで画像の読み込みを停止したり、アクションを中断したりできます
//       }
//     });
//   }