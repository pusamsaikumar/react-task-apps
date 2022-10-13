import React from 'react';
import { Categoriesitems } from '../data';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { mobile } from '../resposive';

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
  ${mobile({padding:"0px",flexDirection:"column"})};
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