import React from 'react';
import './Definitions.css';

const Definitions = ({word, meanings, language, themeMode}) => {
  return (
    <div className='meanings'>
        {/* ---------- audio start ---------- */}
        {
            meanings[0] && word && language === 'en' && (
                <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                style={{backgroundColor:"white", borderRadius:10, width: "100%"}} 
                controls 
                >
                    Your browser doesn't support audio element
                </audio>
            )
        }
        {/* ---------- audio end ---------- */}
        {/* ---------- meanings start ---------- */}
        {word === "" ? (<span className='subTitle'> Start by typing a word in search</span>) : (
            meanings.map((mean) => mean.meanings.map((item) => (
                item.definitions.map((def) => (
                    <div className='singleMean' id={themeMode} >
                        <b>{def.definition}</b>
                        <hr style={{backgroundColor:"black", width:"100%"}}/>
                        {
                            def.example && (
                                <span>
                                    <b>Example : </b>{def.example}
                                </span>
                            )
                        }
                        {
                            def.synonyms && (
                                <span>
                                    <b>Synonyms : </b>
                                    {def.synonyms.map((s)=>`${s},`)}
                                </span>
                            )
                        }
                    </div>
                ))
            )))
        )}
        {/* ---------- meanings end ---------- */}
    </div>
  )
}

export default Definitions
