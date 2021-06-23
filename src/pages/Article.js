import React from "react";
import { useParams } from "react-router";
import Query from "../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../queries/article/article";
import styled from "styled-components";

const Article = () => {
    let { id } = useParams();

    return (
        <Query query={ARTICLE_QUERY} slug={id}>
        {({ data: { articles } }) => {

            if (articles.length) {
                console.log("articles", articles);
                const imageUrl =
                    process.env.NODE_ENV !== "development"
                    ? articles[0].image.url
                    : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;

            return (
                <Container>
                    <h1>{articles[0].title}</h1>

                    <BlogBanner>
                        <img src={imageUrl} alt={articles[0].title} />
                    </BlogBanner>

                    <BlogBody>
                        <ReactMarkdown children={articles[0].content} />
                        <p>
                            <Moment format="MMM Do YYYY">{articles[0].published_at}</Moment>
                        </p>
                    </BlogBody>
                </Container>
            );
            }
        }}
        </Query>
    );
};

const Container = styled.div`
    padding: 20px;
`


const BlogBanner = styled.div`
    img {
        margin: 20px;
        max-width: 800px;
        width: 100%;
    }
`

const BlogBody = styled.div`
    margin-left: 20px;
`

export default Article;