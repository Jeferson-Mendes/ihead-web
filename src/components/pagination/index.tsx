import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { PaginationSectionStyled } from './style';

interface IProps {
  totalPages: number;
  handleGoPage(page:number): Promise<void>;
}

const BasicPagination:React.FC<IProps> = ({ totalPages, handleGoPage }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: number) => {
    setPage(value);
    handleGoPage(value)
  };

  return (
    <PaginationSectionStyled>
        <Stack spacing={2}>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
    </PaginationSectionStyled>
  );
}

export default BasicPagination;
