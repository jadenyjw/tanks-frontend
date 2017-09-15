import React, {Component} from 'react';
import Scroll, {scroller} from 'react-scroll';  

class BugReport extends React.Component {
    constructor() {
      super();
      this.state = { width: 0, height: 0, file: '',imagePreviewUrl: '' };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.scrollToTop = this.scrollToTop.bind(this);
    }
  
    //general scaling
    scrollToTop() {
        Scroll.animateScroll.scrollToTop();
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }



    //Handles submission, to be done.
    _handleSubmit(e) {
      e.preventDefault();//Prevent going off application.
  
      console.log('uploading ', this.state.file);
    }
  

    //Handles loading of files.
    _handleImageChange(e) {
      e.preventDefault();//Prevent going off application.

      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {


      const style = {
        height: this.state.width * 0.5,
        width: this.state.width *0.7,
        padding:'1vw',
        margin: '0px',
        color: '#FDE3A7',
        display: 'inline-block',
        backgroundColor:'#22313f',
        overflow: 'auto',

        border: this.state.width * 0.01 + 'px outset #FDE3A7'
      };


      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent" style = {style}>
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
          <textarea className="bugText">
            Bug Description please; I expect a proper, grammatically correct paragraph.
          </textarea>
          <input type="submit" value="Submit" className="submitBug"/>
        </div>
      )
    }
  }
    
export default BugReport;