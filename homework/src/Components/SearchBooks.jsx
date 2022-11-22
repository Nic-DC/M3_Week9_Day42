import { Collapse, Button } from "react-bootstrap";
import { useState } from "react";

const SearchBooks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="warning"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="ml-3 mb-3"
      >
        Search book
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="ml-3 mb-3">
          <input type="text" id="searchInput" />
        </div>
      </Collapse>
    </>
  );
};

export default SearchBooks;
