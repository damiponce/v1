import { useState, useContext } from 'react';
import styled from 'styled-components';
import WithHover from '../cursor/WithHover';

const Container = styled.div`
    width: max-content;
    padding: 8px 16px;
    position: relative;
    font-size: 0;
    z-index: 70000;
`;

const NavLink = (props) => {
    return <Container {...props} />;
};

export default WithHover(NavLink, 'block');
