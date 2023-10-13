import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../store";
import { ResourceRow } from "./Resourcerow";
import { useParams } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { SecondaryLoader } from "../coman/loder";

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
  }, [resource, next, fetchList]);

  useEffect(() => {
    if (fetchCountRef.current === 0 && makeInitialFetch) {
      fetchResourceList();
    }
  }, [fetchResourceList, makeInitialFetch]);

  return (
      <div className="tab-container">
        <h3 className="mt-4">MovieZilla's - Starwar {resource}</h3>



        <Table  bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>Sr No</th>
              <th>Details</th>
              <th>Other Data</th>
            </tr>
          </thead>
          <tbody>
            {req.isFetching && (
              <h3 className="msgforloading">
                Fetching !! Please Wait ...
              </h3>
            )}
            {req.errMsg && <div className="text-danger mt-3">{req.errMsg}</div>}
            {records.map((rec, index) => (
              <ResourceRow
                resourceName={resource}
                key={rec.name + index}
                resource={rec}
                srNo={index + 1}
              />
            ))}
          </tbody>
        </Table>

        {!noMoreRecords && (
          <Button
            variant="primary"
            className="mb-4"
            disabled={isLoadingMore}
            onClick={() => fetchResourceList()}
          >
            {isLoadingMore ? <SecondaryLoader /> : <> More {resource} </>}
          </Button>
        )}
      </div>
  );
};
