import React from "react";
import { Link } from "react-router-dom";

const CatLi = ({cat}) => {
    return(
        <>
		<li><Link to={`/category/${cat.id}`}>{cat.title}</Link><span>({cat.count})</span></li>							
        </>
    )
}

export default CatLi;