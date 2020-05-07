import React from 'react';
import Searchbar from './searchbar';
import youtube from '../apis/youtube';
import Videolists from './videoresult';
import Videodetail from './videocomponent';

const KEY ="AIzaSyBijcb_IQ_wyAxhzVqaJHO-iTNSFehwWWA";

class App extends React.Component{
  state= {videos: [] , selectedvideo: null};

   componentDidMount(){
     this.Searchres('cars');
   }
    Searchres= async terms =>{
        console.log(terms);  
        const searchresult= await youtube.get('/search',{
          params:{ 
            part:'snippet',
            maxResults:5,
            key:KEY,
            q:terms
        }
         });
         this.setState({
           videos:searchresult.data.items,
           selectedvideo:searchresult.data.items[0]
        })
         
                                                            
    };
    onvideoselect = videos=>{
      console.log('hii',videos)
      this.setState({selectedvideo:videos});
     
    }

    render(){
        return (
          <div className="ui container">
            <Searchbar onEnter={this.Searchres} />
            <div className="ui grid">
              <div className="ui row">
                <div className="ten wide column">
                   <Videodetail video={this.state.selectedvideo}/>
                 </div>
                 <div className="five wide column">
                   <Videolists onvideoselect={this.onvideoselect} videos={this.state.videos} />
                 </div>
               </div>
            </div>
          </div>
        )
    }
  
}

export default App;