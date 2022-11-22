import { Collapse, Button } from "react-bootstrap";
import { useState } from "react";

const SearchBooks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        Search book
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <input type="text" id="searchInput" />
        </div>
      </Collapse>
    </>
  );
};

export default SearchBooks;
