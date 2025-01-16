
class InvalidCredentialsResponseDTO {
  status;
  timestamp;
  path;
  errors;
  message;
}

class UnexpecteErrorDTO {
  status;
  timestamp;
  path;
  errors;
  message;
}

class MetaPaginateResponseDTO {
  itemCount;
  totalItems;
  itemsPerPage;
  totalPages;
  currentPage;
}

class PaginateResponseDTO {
  items;
  meta;
}

class FindBaseResponseDTO {}