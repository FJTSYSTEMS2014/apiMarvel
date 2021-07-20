import React, { Component } from 'react';

export class App extends Component {
  state={
    profileImg:'https://i0.wp.com/danielswanick.com/wp-content/uploads/2016/08/animated-page-load-1.gif?resize=800%2C540&ssl=1'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
			<div className="page">
				<div className="container">
					<h1 className="heading">Agrega una imagen desde tu PC</h1>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">...</i>
						Selecciona tu foto
					</label>
          </div>
				</div>
			</div>
		);
	}
}

export default App;
