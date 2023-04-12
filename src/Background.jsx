import React from 'react';
import './Background.css';

function Background(props) {
  return (
    <div className="background" 
        style={{backgroundImage: `url(${props.image})`}}>
        {props.children}
    </div>
  );
}

export default Background;
