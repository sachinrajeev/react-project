import React from 'react';
import './season.css';

const Getseason = (lat,month) => {                          //method
  if (month>2 && month<9){
    return lat>0? 'summer':'winter';
  }
  else{
    return lat>0? 'winter':'summer';                 //>0 north
  }
  };

const seasonConfig ={                                 // !!!!!!!!!dynamic component
  summer:{ text :"lets hit the beach",
           iconName:'sun'
          },
  winter:{text:"its cold outside",
          iconName:'snowflake'}

};

const Seasondetails= props=>{

   const Season = Getseason(props.latit,new Date().getMonth());
                                                            //const text= Season==='winter'? 'its cold':' its is hot';
                                                            //const icon = Season==='winter'? 'snowflake':'sun';
    const {text, iconName}= seasonConfig[Season];
 
      return(
        <div className={`season-details ${Season}`}>
          
         <i className={`icon-left massive ${iconName} icon`}/>  

         <h1>{text} {Season}</h1>

         <i className={`icon-right massive ${iconName} icon`}/>  

        </div>
                                                                      //className={`${icon} icon`} (es5 syntax)

      );
    
}
export default Seasondetails;