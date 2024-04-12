
const flowers = document.querySelectorAll('.flower');

flowers.forEach((flower) => {
  const randomTop = Math.floor(Math.random() * 100); 
  const randomLeft = Math.floor(Math.random() * 1200);
  const randomSpeed = Math.floor(Math.random() * 15)+4;

  flower.style.top = `${randomTop}px`;
  flower.style.left = `${randomLeft}px`;
  flower.style.animationDuration = `${randomSpeed}s`
});


// const numOfFlowers = 5;

// const flowers = document.querySelectorAll('.flower');


// for (let i = 0; i < numOfFlowers; i++) {
//   const flower = document.createElement('div');
//   flower.classList.add('flower');

//   document.body.appendChild(flower);
// }

// var mouse = document.querySelector('.mouse');
//     window.addEventListener('mousemove',function(event){    
//     mouse.style.left = event.clientX + mouse.offsetWidth/2 + 'px' ;
//     mouse.style.top = event.clientY +mouse.offsetHeight/2 + 'px';       
// });

// window.addEventListener('mouseout', function(event) {
//             mouse.style.display = 'none'; // 隐藏光标
//         });

//         window.addEventListener('mouseover', function(event) {
//             mouse.style.display = 'block'; // 显示光标
//         });