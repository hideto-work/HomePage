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
