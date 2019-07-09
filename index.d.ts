declare module "@vettvangur/react-paginator" {
}


export default function Pagination(props: IPaginationProps): JSX.Element;

export interface IPaginationProps {
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