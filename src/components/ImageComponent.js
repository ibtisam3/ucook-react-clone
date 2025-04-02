// Defining a functional component called ImageComponent
function ImageComponent({ imagePath, alt, className }) {
    // Rendering an <img> element with the provided props
    return <img src={imagePath} alt={alt} className={className} />;
   }
   
   // Exporting the ImageComponent as the default export
   export default ImageComponent;