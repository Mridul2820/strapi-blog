import Query from "./Query";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CATEGORIES_QUERY from "../queries/category/categories";

const Nav = () => {
    return (
        <Container>
            <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => (
                <NavMain>
                    <Logo>
                        <Link to="/">Strapi Blog</Link>
                    </Logo>

                    <NavMenus>
                    {categories.map((category, i) => (
                        <li key={category.slug}>
                            <Link to={`/category/${category.slug}`}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                    </NavMenus>
                </NavMain>
            )}
            </Query>
        </Container>
    );
};

const Container = styled.div`
    padding: 5px 10px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
`

const NavMain = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    padding: 4px;
    margin: 8px;
    border: 1px solid #004b91;
`

const NavMenus = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin-right: 15px;
        text-transform: capitalize;
    }
`

export default Nav;