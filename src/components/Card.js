import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ article }) => {
    const imageUrl =
        process.env.NODE_ENV !== "development"
        ? article.image.url
        : process.env.REACT_APP_BACKEND_URL + article.image.url;

    return (
        <Link to={`/article/${article.slug}`}>
            <CardMain>
                <CardImg>
                    <img
                        src={imageUrl}
                        alt={article.image.url}
                        height="100"
                    />
                </CardImg>
                <CardBody>
                    <p id="category">
                        {article.category.name}
                    </p>
                    <p id="title">
                        {article.title}
                    </p>
                </CardBody>
            </CardMain>
        </Link>
    );
};

const CardMain = styled.div`
    margin-bottom: 20px;
    width: 100%;
`
const CardImg = styled.div`
    height: 90%;
    width: 100%;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        vertical-align: middle;
    }
`

const CardBody = styled.div`
    padding: 5px;
    min-height: 55px;
    height: 10%;

    #category {
        font-weight: 500;
    }

    #title {
        letter-spacing: 0.4px;
        font-size: 22px;
        font-size: 1.375rem;
        line-height: 1.13636;
    }
`

export default Card;