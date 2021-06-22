import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Articles = ({ articles }) => {
    const leftArticlesCount = Math.ceil(articles.length / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);

    return (
        <Container>
            <LeftGrid>
            {leftArticles.map((article, i) => (
                <Card 
                    article={article} 
                    key={`article__${article.slug}`} 
                />
            ))}
            </LeftGrid>

            <Rightgrid>
            {rightArticles.map((article, i) => (
                <Card 
                    article={article} 
                    key={`article__${article.slug}`} 
                />
            ))}
            </Rightgrid>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
`

const LeftGrid = styled.div`
    
`

const Rightgrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat( auto-fit, 300px );

    column-gap: 20px;

    a {
        width: 100%;
    }
`

export default Articles;