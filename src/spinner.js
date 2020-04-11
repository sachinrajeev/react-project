import  React from 'react';

const Spinner =(props)=>{
    return (                                                                     //ui segment (small)
        <div >             
            <div className="ui active dimmer">
<div className="ui text loader">{props.message}</div>  
            </div>
        </div>                                                                  //{props.message || 'Loading....' }

    );
};
Spinner.defaultProps = {
    message:'Loading...'                                                        //like above 
}
export default Spinner;
