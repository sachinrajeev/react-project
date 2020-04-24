import React from 'react';

class Imagecard extends React.Component{
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state={spans:0};

    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.Setspans)
                           // console.log(this.imageRef)
    };     //console.log(this.imageRef.current.clientHeight); this is early (before the pic load so no height)
   
   Setspans=()=>{
       const height=this.imageRef.current.clientHeight;
       const spans = Math.ceil(height/20);
       this.setState({spans:spans});
   }
   
    render(){
        const {description,urls} = this.props.image;
        return(
           <div style={{ gridRowEnd:`span ${this.state.spans}`}}>
               <img 
                ref={this.imageRef}
                src={urls.regular} 
                alt={description}
               />
           </div>
        );
         } ;
}
export default Imagecard;