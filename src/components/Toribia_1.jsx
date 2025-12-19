import React from 'react';
import GaleriaCabaña from './GaleriaCabaña';
const images = [
  {
    url: "https://images.unsplash.com/photo-1611656752661-d66725c3bc0c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzNzEyMjk&ixlib=rb-1.2.1&q=80"
  },
  {
    url: "https://images.unsplash.com/photo-1622398703904-7ae5d55f8e1a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzNzEzMjk&ixlib=rb-1.2.1&q=80"
  },
  {
    url: "https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzODUwOTg&ixlib=rb-1.2.1&q=80"
  },
  {
    url: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzODUxNzM&ixlib=rb-1.2.1&q=80"
  }
];

const Toribia_1 = () => {
  return (
    <GaleriaCabaña title="Cabaña Toribia I" images={images} />
  );
};

export default Toribia_1;
