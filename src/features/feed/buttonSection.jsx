import React from 'react';

function ButtonSection({ label, Icon, color }) {
  return (
    <div className="feed__createPost">
       <Icon style={{color:color}}/>
        <span>{label}</span>
      </div>
  )
}

export default ButtonSection;
