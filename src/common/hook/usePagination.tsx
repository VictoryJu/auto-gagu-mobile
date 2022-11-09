import Pagination from 'react-js-pagination';

type Props = {
  page: number;
  totalCount: number;
  callBack: any;
};

const UsePagination = ({ page, totalCount, callBack }: Props) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
      totalItemsCount={totalCount}
      pageRangeDisplayed={10} // paginator의 페이지 범위
      onChange={callBack}
    />
  );
};

export default UsePagination;
