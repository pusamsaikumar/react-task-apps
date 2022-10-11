import React from 'react';
import { Categoriesitems } from '../data';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Container = styled.div`

`;

const Categories = () => {
  return (
    <Container>
        {
            Categoriesitems.map((item)=>(
                <CategoryItem item={item} />
            ))
        }
    </Container>
  )
}

export default Categories