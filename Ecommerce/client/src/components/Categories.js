import React from 'react';
import { Categoriesitems } from '../data';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
`;

const Categories = () => {
  return (
    <Container>
        {
            Categoriesitems.map((item)=>(
                <CategoryItem item={item} key={item.id} />
            ))
        }
    </Container>
  )
}

export default Categories