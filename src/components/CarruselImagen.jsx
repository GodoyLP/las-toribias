/* COMPONENTE DESACTIVADO PARA EVITAR ERRORES DE BUILD EN VERCEL
import React, { useState } from 'https://cdn.skypack.dev/react@18.2.0'; // Las importaciones CDN rompen el build
import ReactDOM from 'https://cdn.skypack.dev/react-dom@18.2.0';

const CarruselImagen = () => {
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
  ]
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return(
    <div>
      <SelectedImages selectedImg={selectedImg.url} />
      <Images images={images} selectImg={selectedImg.url} setSelectedImages={setSelectedImg}/>
    </div>
  )
}

export default CarruselImagen;




const SelectedImages = (props) => {
  const { selectedImg } = props
  return(
    <div className="flex">
      <img className="img" src={selectedImg} alt="img"/>
    </div>
  )
}

const Images = (props) => {
  const { images, selectImg, setSelectedImages } = props;
  return(
    <div className="flex">
      {images.map((data, index) => {
        return(
          <img style={{borderBottom: selectImg === data.url ? '8px solid #B388FF': ''}} className="mini-img" key={index} src={data.url} alt="images" onClick={() => setSelectedImages(data)}/>
        )
      })}
    </div>
  )
}

ReactDOM.render(<CarruselImagen />, document.querySelector("#app"));
*/

const CarruselImagen = () => {
  return null;
}
export default CarruselImagen;