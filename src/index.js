// import sum from './sum';
// //just need below to run/execute, no need for exporting
// //certain codes in image_viewer
// import './image_viewer';
//
// const total = sum(10,5);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click Me';

button.onclick = () => {
  System.import('./image_viewer')
    .then( module => module.default() )
    //default come from the export in image_viewer
};

document.body.appendChild(button);
