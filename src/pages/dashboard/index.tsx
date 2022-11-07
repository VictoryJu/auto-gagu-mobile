import Recipe from 'src/components/Recipe';
import styled from 'styled-components';
import useRecipe from 'src/common/hook/usePurchases';
import { GetServerSideProps } from 'next';
import { useQuery, dehydrate } from '@tanstack/react-query';
import { recipe } from 'src/common/service/api';
import { QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { start } = query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['purchases'],
    async () => await recipe.fetchPurchases(Number(start), 10, '')
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const DashBoard = () => {
  const { start } = useRouter().query;
  const { usePurchases } = useRecipe();
  const { data: receipeData } = usePurchases(Number(start), 10, '');

  return (
    <>
      <SearchWrap>
        <SearchInput></SearchInput>
        <SearchBtn>영수증 검색</SearchBtn>
      </SearchWrap>
      <Recipe receipeData={receipeData} />
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
