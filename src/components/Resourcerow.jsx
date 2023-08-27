import React from "react";
import { OtherDataList } from "./OtherDataList";
import { InfoKeysByResourceName } from "../coman/coman";
import './compo_styles.css'

export const ResourceRow = ({ resource, srNo, resourceName }) => {
  const keys = InfoKeysByResourceName[resourceName] || ['name'];

  return (
    <tr>
      <td>{srNo}</td>
      <td>
        <div>
          {keys.map(key => (
            <div key={key}>
              <span className="title">{capitalizeFirstLetter(key)}&nbsp; : &nbsp; </span> <span className="detail">{capitalizeFirstLetter(resource[key])}</span>
            </div>
          ))}
        </div>
      </td>
      <td className="other-data-column">
        <OtherDataList resource={resource} />
      </td>
    </tr>
  );
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
