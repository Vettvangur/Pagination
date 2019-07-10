export interface IPaginationProps {
  onPageChange: (page: number) => void;
  total: number;
  selectedPage: number;
  pageSize: number;
  showNextPrev?: boolean;
  prevLabel?: Node | string;
  nextLabel?: Node | string;
  disableInlineStyles?: boolean;
  delta?: number;
}
declare const Pagination: React.FC<IPaginationProps>;
export default Pagination;
