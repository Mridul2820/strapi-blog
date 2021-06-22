import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Articles from "../components/Articles";
import Query from "../components/Query";
import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";

const Category = () => {
    let { id } = useParams();

    return (
        <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
        {({ data: { categories } }) => {

            if (categories.length) {
            return (
                <Container>
                    <div>
                        <h1>{categories[0].name}</h1>
                        <Articles articles={categories[0].articles} />
                    </div>
                </Container>
            );
            }
        }}
        </Query>
    );
};

const Container = styled.div`
    padding: 50px;
    
    h1 {
        text-transform: capitalize;
    }
`

export default Category;