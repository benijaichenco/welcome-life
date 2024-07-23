import Image1 from "../images/image1.webp";
import Image2 from "../images/image2.webp";
import Image3 from "../images/image3.webp";
import Image4 from "../images/image4.webp";
import Image5 from "../images/image5.webp";
import Image6 from "../images/image6.webp";
import Image7 from "../images/image7.webp";

function Gallery() {
  const allPictures = [
    { id: 1, src: Image1, alt: "Image 1" },
    { id: 2, src: Image2, alt: "Image 2" },
    { id: 3, src: Image3, alt: "Image 3" },
    { id: 4, src: Image4, alt: "Image 4" },
    { id: 5, src: Image5, alt: "Image 5" },
    { id: 6, src: Image6, alt: "Image 6" },
    { id: 7, src: Image7, alt: "Image 7" },
  ];

  return (
    <div className="gallery heb">
      {allPictures.map((pic) => (
        <div key={pic.id} className="picture-container">
          <img src={pic.src} alt={pic.alt} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
