import { v4 as uuid } from 'uuid';
import axios from 'axios';
import queryString from 'query-string';

const getCID = () => {
  if (!localStorage.analyticsCID) {
    localStorage.analyticsCID = uuid();
  }
  return localStorage.analyticsCID;
};

const GA_URL = 'https://www.google-analytics.com/collect';
const GA_TRACKING_ID = 'UA-159341099-1';

export const trackEvent = (category, action, label) => {
  const analyticsTrackOptions = {
    v: 1,
    tid: GA_TRACKING_ID,
    cid: getCID(),
    t: 'event',
    ec: category,
    ea: action,
    el: label,
  };

  axios.post(GA_URL, queryString.stringify(analyticsTrackOptions));
};

export default { trackEvent };
