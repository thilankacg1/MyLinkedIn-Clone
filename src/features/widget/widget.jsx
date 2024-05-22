import React from 'react';
import './widget.css'
import {  InfoSharp } from '@mui/icons-material';

function Widget() {

    const newsArticle = (heading, subtitle, time) => {
        return(
        <div className="widget__article">
                <div>{heading}</div>
                <span>{time} . {subtitle}</span>
        </div>
        )
    }
  return (
    <div className="widget">
        <div className="widget__header">
            <h3>LinkedIn News</h3>
            <InfoSharp />
        </div>
        <h4 className='widget__headerSubtitle'>Top stories</h4>
        {newsArticle("Microsoft launches PCs for AI era", "1,201 readers", "1h ago")}
        {newsArticle("Green energy transition 'too slow'", "20 readers", "2h ago")}
    </div>
  )
}

export default Widget
