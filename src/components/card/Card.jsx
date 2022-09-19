import template from 'C:/learn/react/projects/movieSearcher/src/template.json'
import "./Card.scss"
import { useLayoutEffect, useEffect } from 'react';
import { useState } from 'react';

export const Card = () => {

    const mouseDownHanlder = e => {
        if (!e.target.parentElement?.dataset?.card) return
        const mouseUpHandler = () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        }
        const target = document.querySelector("#cardMain")
        const cardMainCoords = target.getBoundingClientRect();
        const between = e.clientX - Math.round(cardMainCoords.left);
        const mouseMoveHandler = e => {
            if (e.target !== target) return
            const firstCoords = e.clientX-Math.round(cardMainCoords.left)-between;
            const lastCoords = e.target.parentElement.parentElement.style.transform;

        }
        window.addEventListener("mouseup", mouseUpHandler);
        window.addEventListener("mousemove", mouseMoveHandler);
    };

    useEffect(() => {
        window.addEventListener("mousedown", mouseDownHanlder);
        return () => {
            window.removeEventListener("mousedown", mouseDownHanlder);
        };
    }, [])
// style={{transform: "translateX(0px)"}}
    return (
        <div className='cards-container'>
            <div data-card="main" className='cards-collection'>
                <div data-card="1" className='card'>
                    <div className='card-image'>
                        <img src={template.Poster} alt="poster" />
                    </div>
                    <div>
                        <div>rating 1</div>
                    </div>
                </div>
                <div id="cardMain" data-card="2" className='card-main'>
                    <div className='card-image-main'>
                        <img src={template.Poster} alt="poster" />
                    </div>
                    <div>
                        <div>rating 1</div>
                    </div>
                </div>
                <div data-card="3" className='card'>
                    <div className='card-image'>
                        <img src={template.Poster} alt="poster" />
                    </div>
                    <div>
                        <div>rating 1</div>
                    </div>
                </div>
            </div>
        </div>
    )
};