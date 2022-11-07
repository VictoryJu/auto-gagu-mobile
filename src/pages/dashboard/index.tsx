import { RecipeComponent } from 'src/components/RecipeComponent';
import styled from 'styled-components';

const DashBoard = () => {
  return (
    <>
      <SearchWrap>
        <SearchInput></SearchInput>
        <SearchBtn>영수증 검색</SearchBtn>
      </SearchWrap>
      <RecipeComponent />
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
