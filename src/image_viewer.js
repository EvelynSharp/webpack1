// import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {
  const image = document.createElement('img');
  image.src = small;
  //small here is the data presentation of the image
  document.body.appendChild(image);
};

//
// const bigImage = document.createElement('img');
// bigImage.src = big;
//
// document.body.appendChild(bigImage);
