import './home.css'


const ImageList = (props) =>{

    const imageFindings = props.imagesData.map(image=>{
        return (
        <div className='image' key={image.id}>
        <img src={image.urls.regular} alt={image.alt_description}/>
    </div>)
    })
    
    return(
        <div className='images'>
            {imageFindings}          
        </div>
    )
}

export default ImageList