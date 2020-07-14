import React from 'react';

const Word = (props) => {

    const {word, text, background} = props;
    const hasColor = (text && background) ? true : false;

    return (
        (hasColor) ? 
        <div style={{color:text, background:background}} className="row justify-content-center">The word is: {word}</div>
        :
        ((isNaN(props.word)) ? 
        <div className="row justify-content-center">The word is: {word}</div>
        :
        <div className="row justify-content-center">The number is: {word}</div>)
     );
}
 
export default Word;