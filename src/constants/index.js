import { isArray } from "lodash";

// export const ROOT_API_URL = 'https://zalupa.by/';
// http://crimssondead-001-site1.ftempurl.com/taskmanager/api/Project/GetProjectList
export const ROOT_API_URL = 'http://crimssondead-001-site1.ftempurl.com/api';

export const removeQueryParams = (router, keysForRemove) => {
  const { asPath } = router;
  const [href, query] = asPath.split('?');
  const keys = isArray(keysForRemove) ? keysForRemove : [keysForRemove];
  const updatedPath = new URLSearchParams(query);
  keys.forEach((key) => {
    updatedPath.delete(key);
  });

  return `${href}?${updatedPath.toString()}`;
};

export function getRandomInt(max) {
  return 10;
  return Math.floor(Math.random() * max);
}