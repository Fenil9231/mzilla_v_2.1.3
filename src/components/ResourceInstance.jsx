import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getUniqResourceIdsFromRecords } from "../store/services/helper";
import { capitalizeFirstLetter, getResourceInstanceUrl } from "../coman/coman";
import { useAppStore } from "../store";
import { OtherDataList } from "./OtherDataList";
import Table from "react-bootstrap/Table";
import { SecondaryLoader } from "../coman/loder";
import "./compo_styles.css";

export const ResourceInstance = () => {
  const { resource, id } = useParams();
  const resourcesById = useAppStore((state) => state.data.resourcesById);
  const fetchInstance = useAppStore((state) => state.actions.fetchInstance);
  const url = getResourceInstanceUrl(resource, id);
  const currentResource = resourcesById[url];
  const countRef = useRef(0);

  useEffect(() => {
    if (countRef.current === 0) {
      if (!currentResource) {
        fetchInstance(url, true);
      }
    }
    countRef.current++;
  }, [currentResource, fetchInstance, url]);

  const { isFetching, errMsg, data } = currentResource || {};

  useEffect(() => {
    if (data) {
      const urls = getUniqResourceIdsFromRecords([data]);
      urls.forEach((url) => {
        if (resourcesById[url] === undefined) {
          fetchInstance(url, true);
        }
      });
    }
  }, [data, resourcesById, fetchInstance, url]);

  if (isFetching) {
    return <SecondaryLoader />;
  }

  if (errMsg) {
    return <h3>{errMsg}</h3>;
  }

  if (!data) {
    return null;
  }

  const keysToExclude = [
    "characters",
    "films",
    "vehicles",
    "opening_crawl",
    "planets",
    "starships",
    "species",
    "people",
    "homeworld",
    "residents",
    "pilots"
  ];

  const tableHeaders = Object.keys(data).filter(
    (key) => key !== "url" && !keysToExclude.includes(key)
  );

  return (
    <div className="tab-container">
      <Table  bordered hover responsive>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Field</th>
            <th>Value</th>
            {/* <th>Otherdata</th> */}
          </tr>
        </thead>
        <tbody>
          {tableHeaders.map((header, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="header-cell">{capitalizeFirstLetter(header)}</td>
              <td>{capitalizeFirstLetter(data[header])}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table  bordered hover responsive>
        <thead>
          <tr>
            <th>Otherdata</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <div colSpan="4">
              <OtherDataList resource={data} />
            </div>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
