import React from 'react';
import './style.css';
import Imagecard from './imageCard';

const Imageresult =props=>{
    const imagename= props.images.map((image)=>{
        return <Imagecard key={image.id} image={image}/>; 
                               //const imagename= props.images.map(({description,id,urls})=>{
                               // return <Imagecard key={id} src={urls.regular} alt={description}></img>; 
               
                 //OR           //return <img key={image.id} src={image.urls.regular} alt={image.description}></img>; 
                                //key for remove warning
    });
    return <div className="imagelisting">{imagename}</div>;            //for css
};

export default Imageresult;