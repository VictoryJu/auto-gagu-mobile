import Recipe from 'src/components/Recipe';
import styled from 'styled-components';
import useRecipe from 'src/common/hook/usePurchases';
import { GetServerSideProps } from 'next';
import { useQuery, dehydrate } from '@tanstack/react-query';
import { recipe } from 'src/common/service/api';
import { QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ['purchases', 0],
    async () => await recipe.fetchPurchases(Number(0), 10, '')
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const DashBoard = () => {
  const [start, setStart] = useState(0);
  const [page, setPage] = useState(1);
  const { usePurchases } = useRecipe();
  const { data: receipeData } = usePurchases(Number(start), 10, '');

  const onChange = useCallback(
    (LPage: number) => {
      setPage(LPage);
      setStart((LPage - 1) * 10);
    },
    [page]
  );

  return (
    <>
      <SearchWrap>
        <SearchInput></SearchInput>
        <SearchBtn>영수증 검색</SearchBtn>
      </SearchWrap>
      <Recipe receipeData={receipeData} onChange={onChange} page={page} />
    </>
  );
};

const SearchWrap = styled.div`
  padding: 20px;
  display: flex;
  width: 300px;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  padding: 11px;
  flex: 1;
  outline: none;
`;

const SearchBtn = styled.button`
  border: none;
  background-color: #275d7c;
  padding: 10px;
  color: #fff;
  flex: 1;
`;

export default DashBoard;
