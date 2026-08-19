import React, { useMemo, useState } from "react";
import "./DataTable.css";

export default function DataTable({
  data = [],
  columns = [],
  pageSize = 5,
  loading = false,
  selectable = true,
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const [selectedRows, setSelectedRows] = useState(new Set());

  const [visibleColumnKeys, setVisibleColumnKeys] =
    useState(new Set(columns.map((column) => column.key)));

  // Visible columns
  const visibleColumns = columns.filter((column) =>
    visibleColumnKeys.has(column.key)
  );

  // Search
  const filteredData = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return data;

    return data.filter((row) =>
      columns.some((column) =>
        String(row[column.key] ?? "")
          .toLowerCase()
          .includes(query)
      )
    );
  }, [data, columns, search]);

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;

    return [...filteredData].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];

      if (valueA == null) return 1;
      if (valueB == null) return -1;

      if (
        typeof valueA === "number" &&
        typeof valueB === "number"
      ) {
        return sortDirection === "asc"
          ? valueA - valueB
          : valueB - valueA;
      }

      const result = String(valueA).localeCompare(
        String(valueB),
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      );

      return sortDirection === "asc" ? result : -result;
    });
  }, [filteredData, sortKey, sortDirection]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(sortedData.length / pageSize)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Search
  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  // Sort
  const handleSort = (column) => {
    if (!column.sortable) return;

    if (sortKey === column.key) {
      setSortDirection((previous) =>
        previous === "asc" ? "desc" : "asc"
      );
    } else {
      setSortKey(column.key);
      setSortDirection("asc");
    }

    setPage(1);
  };

  // Select row
  const toggleRow = (id) => {
    setSelectedRows((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  // Select all
  const allCurrentPageSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row) =>
      selectedRows.has(row.id)
    );

  const toggleAll = () => {
    setSelectedRows((previous) => {
      const next = new Set(previous);

      if (allCurrentPageSelected) {
        paginatedData.forEach((row) => {
          next.delete(row.id);
        });
      } else {
        paginatedData.forEach((row) => {
          next.add(row.id);
        });
      }

      return next;
    });
  };

  // Column visibility
  const toggleColumn = (key) => {
    setVisibleColumnKeys((previous) => {
      const next = new Set(previous);

      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }

      return next;
    });
  };

  const showAllColumns = () => {
    setVisibleColumnKeys(
      new Set(columns.map((column) => column.key))
    );
  };

  const hideAllColumns = () => {
    setVisibleColumnKeys(new Set());
  };

  // Pagination
  const previousPage = () => {
    setPage((previous) => Math.max(1, previous - 1));
  };

  const nextPage = () => {
    setPage((previous) =>
      Math.min(totalPages, previous + 1)
    );
  };

  const goToPage = (pageNumber) => {
    setPage(
      Math.max(1, Math.min(totalPages, pageNumber))
    );
  };

  // Result range
  const startItem =
    sortedData.length === 0
      ? 0
      : (currentPage - 1) * pageSize + 1;

  const endItem = Math.min(
    currentPage * pageSize,
    sortedData.length
  );

  return (
    <div className="table-container">

      {/* Toolbar */}
      <div className="table-toolbar">

        <div className="search-wrapper">
          <input
            type="search"
            className="table-search"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              handleSearch(e.target.value)
            }
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => handleSearch("")}
            >
              ×
            </button>
          )}
        </div>

        {/* Column selector */}
        <details className="column-menu">
          <summary>Columns</summary>

          <div className="column-dropdown">

            <div className="column-actions">
              <button onClick={showAllColumns}>
                Show all
              </button>

              <button onClick={hideAllColumns}>
                Hide all
              </button>
            </div>

            {columns.map((column) => (
              <label
                key={column.key}
                className="column-option"
              >
                <input
                  type="checkbox"
                  checked={visibleColumnKeys.has(
                    column.key
                  )}
                  onChange={() =>
                    toggleColumn(column.key)
                  }
                />

                {column.label}
              </label>
            ))}
          </div>
        </details>
      </div>

      {/* Selection bar */}
      {selectable && selectedRows.size > 0 && (
        <div className="selection-bar">
          <span>
            {selectedRows.size} row
            {selectedRows.size !== 1 ? "s" : ""}
            {" "}selected
          </span>

          <button
            onClick={() => setSelectedRows(new Set())}
          >
            Clear selection
          </button>
        </div>
      )}

      {/* Table */}
      <div className="table-wrapper">
        <table>

          <thead>
            <tr>

              {selectable && (
                <th className="checkbox-column">
                  <input
                    type="checkbox"
                    checked={allCurrentPageSelected}
                    onChange={toggleAll}
                  />
                </th>
              )}

              {visibleColumns.map((column) => (
                <th
                  key={column.key}
                  className={
                    column.sortable ? "sortable" : ""
                  }
                  onClick={() => handleSort(column)}
                >
                  <div className="header-content">

                    <span>{column.label}</span>

                    {column.sortable && (
                      <span className="sort-icon">
                        {sortKey === column.key
                          ? sortDirection === "asc"
                            ? "↑"
                            : "↓"
                          : "↕"}
                      </span>
                    )}

                  </div>
                </th>
              ))}

            </tr>
          </thead>

          <tbody>

            {/* Loading */}
            {loading && (
              <tr>
                <td
                  colSpan={
                    visibleColumns.length +
                    (selectable ? 1 : 0)
                  }
                  className="table-message"
                >
                  Loading...
                </td>
              </tr>
            )}

            {/* Empty */}
            {!loading &&
              paginatedData.length === 0 && (
                <tr>
                  <td
                    colSpan={
                      visibleColumns.length +
                      (selectable ? 1 : 0)
                    }
                    className="table-message"
                  >
                    No records found
                  </td>
                </tr>
              )}

            {/* Rows */}
            {!loading &&
              paginatedData.map((row) => (
                <tr
                  key={row.id}
                  className={
                    selectedRows.has(row.id)
                      ? "selected-row"
                      : ""
                  }
                >

                  {selectable && (
                    <td className="checkbox-column">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(row.id)}
                        onChange={() =>
                          toggleRow(row.id)
                        }
                      />
                    </td>
                  )}

                  {visibleColumns.map((column) => (
                    <td key={column.key}>
                      {column.render
                        ? column.render(
                            row[column.key],
                            row
                          )
                        : String(
                            row[column.key] ?? "-"
                          )}
                    </td>
                  ))}

                </tr>
              ))}

          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">

        <div className="pagination-info">
          Showing{" "}
          <strong>{startItem}</strong>
          {" - "}
          <strong>{endItem}</strong>
          {" of "}
          <strong>{sortedData.length}</strong>
        </div>

        <div className="pagination-controls">

          <button
            disabled={currentPage === 1}
            onClick={previousPage}
          >
            Previous
          </button>

          <div className="page-numbers">
            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((pageNumber) => (
              <button
                key={pageNumber}
                className={
                  pageNumber === currentPage
                    ? "active"
                    : ""
                }
                onClick={() =>
                  goToPage(pageNumber)
                }
              >
                {pageNumber}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={nextPage}
          >
            Next
          </button>

        </div>
      </div>

    </div>
  );
}