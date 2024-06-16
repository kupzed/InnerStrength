import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardKomunitas = ({ image, title, date, content, link, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-200">
      <Link to={link}>
        <img className="w-full" src={image} alt={title} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center flex-wrap">
       <Link to={link}> <button className="inline-flex items-center bg-[#F7EEDD] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" className="mr-1">
            {<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <g clip-path="url(#clip0_897_6388)">
    <path d="M7.6167 5.75168V2.56268C7.6167 2.33693 7.48095 2.13293 7.2732 2.04443C7.0662 1.95668 6.82395 2.00093 6.6627 2.15918L0.287699 8.34669C0.178199 8.45244 0.116699 8.59794 0.116699 8.75019C0.116699 8.90244 0.178199 9.04794 0.287699 9.15369L6.6627 15.3412C6.82545 15.4987 7.06695 15.5429 7.2732 15.4559C7.48095 15.3674 7.6167 15.1634 7.6167 14.9377V11.7502H8.6802C12.1572 11.7502 15.3627 13.6402 17.0449 16.6792L17.0607 16.7077C17.1612 16.8907 17.3517 17.0002 17.5542 17.0002C17.6007 17.0002 17.6472 16.9949 17.6937 16.9829C17.9427 16.9192 18.1167 16.6949 18.1167 16.4377C18.1167 10.6072 13.4239 5.85218 7.6167 5.75168Z" fill="#696A6F"/>
  </g>
  <defs>
    <clipPath id="clip0_897_6388">
      <rect width="18" height="18" fill="white" transform="translate(0.116699 0.5)"/>
    </clipPath>
  </defs>
</svg>}
          </svg>
          Balas
        </button>
        </Link>
        <button className="inline-flex items-center bg-[#F7EEDD] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" className="mr-1">
            {<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <g clip-path="url(#clip0_1847_1905)">
    <path d="M14.4333 0.5H3.98951C3.13893 0.5 2.39209 1.19973 2.39209 2.02798V17.4775C2.39209 17.7548 2.46925 17.9858 2.59361 18.1644C2.74234 18.3778 2.9818 18.5001 3.23859 18.5C3.48137 18.5 3.73985 18.3919 3.97855 18.188L8.65111 14.2208C8.79542 14.0976 9.00271 14.0269 9.21824 14.0269C9.43369 14.0269 9.64056 14.0976 9.78529 14.2212L14.4422 18.1874C14.6818 18.3919 14.9224 18.5001 15.1648 18.5001C15.5746 18.5001 15.9741 18.184 15.9741 17.4776V2.02798C15.9741 1.19973 15.2839 0.5 14.4333 0.5Z" fill="#696A6F"/>
  </g>
  <defs>
    <clipPath id="clip0_1847_1905">
      <rect width="18" height="18" fill="white" transform="translate(0.183105 0.5)"/>
    </clipPath>
  </defs>
</svg>}
          </svg>
          Simpan
        </button>
        <button onClick={handleLike} className="inline-flex items-center bg-[#F7EEDD] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            {<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <g clip-path="url(#clip0_1847_134)">
    <path d="M5.15472 7.875H2.58121C2.34614 7.87558 2.1209 7.96938 1.95491 8.13583C1.78892 8.30228 1.69574 8.52777 1.6958 8.76284V17.1255C1.69574 17.3606 1.78892 17.5861 1.95491 17.7525C2.1209 17.919 2.34614 18.0128 2.58121 18.0134H5.15472C5.39003 18.0129 5.61556 17.9192 5.78195 17.7528C5.94834 17.5864 6.04204 17.3609 6.04256 17.1255V8.76284C6.04204 8.52753 5.94834 8.302 5.78195 8.13561C5.61556 7.96922 5.39003 7.87551 5.15472 7.875Z" fill="#696A6F"/>
    <path d="M17.6891 10.7865C17.689 10.3852 17.5298 10.0003 17.2464 9.71623C17.2222 9.69004 17.1962 9.66565 17.1685 9.64326C17.4824 9.51024 17.7407 9.27288 17.8997 8.97133C18.0588 8.66978 18.1088 8.32255 18.0412 7.98839C17.9737 7.65423 17.7928 7.35364 17.5292 7.13749C17.2656 6.92134 16.9354 6.80289 16.5945 6.80218H11.3161C11.3453 6.7511 11.372 6.70488 11.3964 6.65867C11.5482 6.41346 11.6692 6.15037 11.7564 5.87542C11.8727 5.49428 11.9437 5.10076 11.968 4.70299C12.0017 4.12831 11.92 3.55269 11.7279 3.01004C11.5357 2.46739 11.2369 1.96867 10.8491 1.54326C10.7029 1.37729 10.5249 1.24244 10.3256 1.14674C10.1262 1.05104 9.90967 0.996453 9.68878 0.986234C9.38705 0.974649 9.09207 1.07748 8.86294 1.27414C8.6338 1.47081 8.48742 1.74677 8.45311 2.04677C8.45109 2.05801 8.45027 2.06942 8.45067 2.08083V4.21164L7.03986 7.78731C6.92433 8.07811 6.75049 8.34218 6.52905 8.56326V16.8043C6.8773 16.9003 7.23162 16.9726 7.58959 17.0208C7.72264 17.0386 7.85672 17.0476 7.99094 17.0476H15.1447C15.4983 17.0471 15.8374 16.9073 16.0885 16.6584C16.2121 16.5348 16.3101 16.388 16.3769 16.2265C16.4437 16.065 16.4779 15.8918 16.4777 15.717C16.4786 15.3945 16.3608 15.0828 16.1469 14.8414C16.4286 14.7821 16.6879 14.6445 16.8949 14.4444C17.1019 14.2442 17.2481 13.9897 17.3167 13.7101C17.3854 13.4305 17.3736 13.1371 17.2828 12.8639C17.1921 12.5907 17.026 12.3486 16.8036 12.1657C17.0677 12.0445 17.2914 11.8502 17.4483 11.6058C17.6052 11.3613 17.6888 11.077 17.6891 10.7865Z" fill="#696A6F"/>
  </g>
  <defs>
    <clipPath id="clip0_1847_134">
      <rect width="18" height="18" fill="white" transform="translate(0.883301 0.5)"/>
    </clipPath>
  </defs>
</svg>}
          </svg>
          {likes}
        </button>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{date}</span>
      </div>
    </div>
  );
};

export default CardKomunitas;
