
// document.addEventListener("DOMContentLoaded", () => {
//     var element_tar = document.querySelector('.target');
//     // element_tar.innerHTML = 'ダミーテキストA';
//     // element
//         // テキストの挿入
//         var newParagraph = document.createElement('p');
//         newParagraph.textContent = '新しいテキスト';
//         element_tar.appendChild(newParagraph);   
// });


document.addEventListener('DOMContentLoaded', function() {
    var targetElement = document.querySelector('.target');
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'ダミーテキストA';
    targetElement.insertBefore(newParagraph,targetElement.firstChild);
});
