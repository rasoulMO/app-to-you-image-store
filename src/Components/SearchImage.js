import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class SearchImage extends React.Component {
    state = { images: [] };
    //anytime we fetch data from API we have to use Async & Await function 
    onSearchSubmit = async (term) => {
        
        //gere we use axios.get method  to data and named as response!!
        const response = await unsplash.get('/search/photos', { 
            params: {query: term},
            
        });
        //here we update our state and call response.data.results!! 
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
    
}


export default  SearchImage ;




