import React from "react";
import { OtherDataItem } from "./OtherdataItem";

export const OtherDataList = ({ resource }) => {
    const myMap = [
      { key: 'films', title: 'Films' },
      { key: 'people', title: 'People' },
      { key: 'species', title: 'Species' },
      { key: 'vehicles', title: 'Vehicles' },
      { key: 'starships', title: 'Starships' },
      { key: 'pilots', title: 'Pilots' },
      { key: 'characters', title: 'Characters' },
      { key: 'residents', title: 'residents' }
      

    ];
  
    const filteredKeys = myMap.filter(({ key }) => resource[key] !== undefined);
  
    return (
      <div>
        {
          filteredKeys.map(({ title, key }) => {
            return (<div key={key} className='otherDataItemListContainer'>
              <h3>{title}</h3>
              <ol>
                {
                  resource[key].map(url => <OtherDataItem key={url} url={url} />)
                }
              </ol>
            </div>)
          })
        }
      </div>
    )
  }