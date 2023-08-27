import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../store";
import { ResourceRow } from "./Resourcerow";
import { useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

export const ResourceList = () => {
  const { resource } = useParams();
  const { next, records, req } = useAppStore((state) => state.data[resource]);
  const { fetchList } = useAppStore((state) => state.actions);
  const noMoreRecords = records.length > 0 && !next;
  const fetchCountRef = useRef(0);
  const makeInitialFetch =
    records.length === 0 && !next && Object.keys(req).length === 0;

  const [isLoadingMore, setIsLoadingMore] = useState(false); // State for tracking loading of "Load More" button

  const fetchResourceList = React.useCallback(() => {
    setIsLoadingMore(true); // Set loading state to true when "Load More" is clicked
    fetchList(resource, next)
      .then(() => setIsLoadingMore(false)) // Set loading state to false after fetch is complete
      .catch(() => setIsLoadingMore(false)); // Handle errors and set loading state to false
    fetchCountRef.current++;
  }, [resource, next,fetchList]);

  useEffect(() => {
    if (fetchCountRef.current === 0 && makeInitialFetch) {
      fetchResourceList();
    }
  }, [fetchResourceList, makeInitialFetch]);

  return (
    <div className="container">
      <h3 className="mt-4">MovieZilla's - Starwar {resource}</h3>

      {/* Show loader or error message */}
      {req.isFetching && (
        <Spinner animation="border" role="status" className="mt-3" />
      )}
      {req.errMsg && <div className="text-danger mt-3">{req.errMsg}</div>}

      {/* Table */}
      <table className="table table-bordered mt-4">
        <thead className="thead-dark">
          <tr>
            <th>Sr No</th>
            <th>Details</th>
            <th>Other Data</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, index) => (
            <ResourceRow
              resourceName={resource}
              key={rec.name + index}
              resource={rec}
              srNo={index + 1}
            />
          ))}
        </tbody>
      </table>

      <Button
        variant="primary"
        className="mb-4"
        disabled={isLoadingMore || noMoreRecords}
        onClick={() => fetchResourceList()} 
      >
        {isLoadingMore ? (
          <Spinner animation="border" size="sm" role="status" className="mr-2" />
        ) : (
          "Load More ..."
        )}
      </Button>
    </div>
  );
};
