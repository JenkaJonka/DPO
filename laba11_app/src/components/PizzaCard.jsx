import React from "react";



function Pizza(props) {
    return (
        <div>
            <img className="pizza_img" src={props.img} alt="pizza"></img>
            <div className="text_form">
            <h2 className="pizza_title">{props.title}</h2>
            <p className="pizza_text">{props.text1}</p>
            <select className="diameter" name="" id="">
                <option value="">Диаметр</option>
                <option value="">25 см</option>
                <option value="">30 см</option>
                <option value="">35 см</option>
            </select>
            <p className="pizza_price">От {props.text2} ₽</p>
            </div>
        </div>


    )
}

export default Pizza;