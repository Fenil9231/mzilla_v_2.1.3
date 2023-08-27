import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../store";
import { getResourceIdFromUrl } from "../coman/coman";
import { SecondaryLoader } from "../coman/loder";
import { TfiReload } from 'react-icons/tfi';
import { RiSignalWifiErrorFill } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import './compo_styles.css'

export const OtherDataItem = ({ url }) => {
  const resourcesById = useAppStore(state => state.data.resourcesById);
  const fetchInstance = useAppStore(state => state.actions.fetchInstance);
  const urlData = resourcesById[url];
  const { id, resourceName } = getResourceIdFromUrl(url);
  const { ref, inView } = useInView({
    threshold: 1
  });

  useEffect(() => {
    if (inView && !urlData) {
      fetchInstance(url, true);
    }
  }, [inView, urlData, url,fetchInstance]);

  if (!urlData) {
    return (
      <div className='otherDataItem' ref={ref} data-test-id={`instance_${resourceName}_${id}`}>
        <SecondaryLoader /> &nbsp;&nbsp;&nbsp; {id}
      </div>
    );
  }
  const retry = () => fetchInstance(url, true);
  const { isFetching, errMsg, data } = urlData;
  const displayText = data?.title || data?.name;

  return (
    <div className='otherDataItem' ref={ref} data-test-id={`instance_${resourceName}_${id}`}>
      {isFetching ? (
        <div>
          <SecondaryLoader /> &nbsp;&nbsp;&nbsp; {id}
        </div>
      ) : errMsg ? (
        <div style={{ color: 'red' }}>
          {<RiSignalWifiErrorFill/>} &nbsp;&nbsp;&nbsp; <span className="pointer" onClick={retry}><TfiReload /></span> &nbsp;&nbsp; {id}
        </div>
      ) : (
        <div>
          <a
            style={{ marginRight: '2rem'}}
            target='_blank'
            rel="noreferrer"
            href={`http://images.google.com/images?um=1&hl=en&safe=active&nfpr=1&q=starwars+${resourceName}+${displayText}`}>
            {displayText}
          </a>
          <Link to={`/${resourceName}/${id}`}>{id}</Link>
        </div>
      )}
    </div>
  );
}
