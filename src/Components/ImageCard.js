import React from 'react'

class ImageCad extends React.Component {
    constructor (props) {
        super(props);

        this.state = { spans: 0 };
        // with this line of code we accessing the DOM with refs!! it most be with class function component!! 
        this.imageRef = React.createRef();
    }
    //here we use that line to get the image first and dislayet after!! 
    componentDidMount() {
      this.imageRef.current.addEventListener('load', this.setSpans)
    }
     
    //here its have to be Arrow function!!
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10)

        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
                
            </div>
        );
    }
    
}

export default ImageCad;