import * as React from 'react';
import Pagination from '@vettvangur/react-pagination';
import { render } from 'react-dom';

const PaginationExample: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const total = 5;
  const pageSize = 1;
  return (
    <>
      <p>current page: {page}</p>
      <Pagination
        onPageChange={(page) => setPage(page)}
        total={total}
        selectedPage={page}
        pageSize={pageSize} />
    </>
  )
}

render(<PaginationExample />, document.getElementById('pagination'))