import { isArray } from "lodash";

export const ROOT_API_URL = 'https://zalupa.by/';

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