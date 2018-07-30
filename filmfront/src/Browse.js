import React from 'react';




class Browse extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=644f21e59b17cbf67e64dbcba7a57278&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(response => response.json())
    .then(data => console.log(data))
  }

render() {

  return (
    <div>
      blue
    </div>
  )
}
}  

export default Browse;