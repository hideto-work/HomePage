


const image = document.querySelector('img');
const text1 = document.querySelector('.txt1');
const viewportCenterX = window.innerWidth / 2;

let isCrossingCenterLine = false; // 中央ラインを通過しているかのフラグ

window.addEventListener('scroll', () => {
  const imageBounds = image.getBoundingClientRect();

  const imageCenterX = imageBounds.left + imageBounds.width / 2;
  
  if (!isCrossingCenterLine && imageCenterX <= viewportCenterX) {
    isCrossingCenterLine = true;
    alert('画像の中央がPCの中央ラインを通過しました');
    text1.classList.remove('opacity-0')
    text1.querySelector("p").classList.add('animate__fadeIn');
  }
});

//-----------------------------------------------------

// const myElement = document.querySelector('img');

// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     // if (entry.isIntersecting) {
//     //   alert('要素が表示されました');
//     // }
//     const imageBounds = entry.boundingClientRect;
//     const viewportCenterX = window.innerWidth / 2;

//     if (imageBounds.left <= viewportCenterX && imageBounds.right >= viewportCenterX) {
//       alert('画像の中央がPCの中央ラインを通過しました');
//     }
    
//   });
// };

// const options = {
//   root: null,
//   rootMargin: '0px',
//   //threshold: 0.5
//   threshold: 1
// };

// const observer = new IntersectionObserver(callback, options);

// observer.observe(myElement);

//------------------------------------


// const image = document.querySelector('img');
// const viewportCenterX = window.innerWidth / 2;

// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     const imageBounds = entry.boundingClientRect;
//     const imageCenterX = imageBounds.left + imageBounds.width / 2;

//     if (imageCenterX <= viewportCenterX) {
//       alert('画像の中央がPCの中央ラインを通過しました');
//       // アラートが表示された後に処理を停止する場合は、以下の行のコメントを解除します
//       // observer.unobserve(image);
//     }
//   });
// };

// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: [0] // thresholdを0に設定して、交差判定を1ピクセル以上の重なりで行う
// };

// const observer = new IntersectionObserver(callback, options);

// observer.observe(image);

