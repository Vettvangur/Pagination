import * as React from 'react'
import { getLastPage, pagination } from 'helpers/paginationHelper';

interface IPaginationProps {
  onPageChange: (page: number) => void;
  total: number;
  selectedPage: number;
  pageSize: number;
  showNextPrev: boolean;
  prevLabel?: Node | string;
  nextLabel?: Node | string;
  disableInlineStyles?: boolean;
  delta?: number;
}

const Pagination: React.FC<IPaginationProps> = (
  {
    onPageChange, 
    total, 
    selectedPage, 
    pageSize, 
    prevLabel = '‹',
    nextLabel = '‹',
    showNextPrev = true,
    disableInlineStyles,
    delta = 3
  }
) => {
  
  let lastPage = getLastPage(total, pageSize,);
  if (lastPage < selectedPage) {
    lastPage += 1
  }
  const paginationArray = pagination(selectedPage, lastPage, delta);

  const handlePageChange = (next: number) => {
    onPageChange(+next);
  }

  const buttonInline = disableInlineStyles ? null : { borderRadius: 5, border: '1px solid #eee' };

  return (
    <div className="pagination">
      {showNextPrev && (
        <button className="pagination__button--prev" onClick={() => handlePageChange(selectedPage - 1)}>{prevLabel}</button>
      )}
      <ul className="pagination__list">
        {paginationArray.map((p, index) => (
          <li className="" key={index}>
            <button style={buttonInline} onClick={() => handlePageChange(p)}>{p}</button>
          </li>
        ))}
      </ul>
      {showNextPrev && (
        <button className="pagination__button--next" onClick={() => handlePageChange(selectedPage + 1)}>{nextLabel}</button>
      )}
    </div>
  )
}

export default Pagination;