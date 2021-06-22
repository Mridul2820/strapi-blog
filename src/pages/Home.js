import React from "react";
import styled from "styled-components";
import Articles from "../components/Articles";
import Query from "../components/Query";
import ARTICLES_QUERY from "../queries/article/articles";

const Home = () => {
    return (
        <Container>
            <h1>Strapi blog</h1>
            <Query query={ARTICLES_QUERY}>
                {({ data: { articles } }) => {
                    return <Articles articles={articles} />
                }}
            </Query>
        </Container>
    );
};

const Container = styled.div`
    padding: 50px;
`

export default Home;