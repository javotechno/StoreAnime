import styled from "styled-components";

const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
  
  button {
    box-shadow: 0px 6px 0px 1px #bfbfbf;
    background-color: #ffffff;
    padding: 9px 15px;
    color: #bfbfbf;
    border-radius: 5px;
    font-weight: bolder;
    border: none;
    outline: #bfbfbf solid 1px;
    cursor: pointer;

    :hover {
      background-color: #566fc9;
      color: white;
      outline: none;
    }

    :active {
      transform: translateY(5%);
      box-shadow: none;
    }
  }
  .active {
    background-color: #222;
    color: #FFF;
  }
`

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationStyle className="pagination">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
    </PaginationStyle>
  );
};

export default Pagination;
