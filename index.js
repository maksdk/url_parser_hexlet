import url from 'url';
import querystring from 'querystring';

export const make = (urlStr) => {
   const {
      protocol,
      host,
      pathname,
      query
   } = url.parse(urlStr);

   return {
      protocol,
      host,
      pathname,
      query
   };
};

export const setProtocol = (data, protocol) => {
   data.protocol = protocol.replace(":", "") + ":";
};

export const getProtocol = (data) => {
   const {
      protocol
   } = data;
   return protocol;
};

export const setHost = (data, host) => {
   data.host = host;
};

export const getHost = (data) => {
   const {
      host
   } = data;
   return host;
};

export const setPath = (data, pathname) => {
   data.pathname = pathname;
};

export const getPath = (data) => {
   const {
      pathname
   } = data;
   return pathname;
};

export const setQueryParam = (data, key, value) => {
   const {
      query
   } = data;

   const parsedQuery = querystring.parse(query);
   parsedQuery[key] = value;

   const queryStr = querystring.stringify(parsedQuery);

   data.query = queryStr;
};

export const getQueryParam = (data, name, defParam = null) => {
   const {
      query
   } = data;
   const parsedQuery = querystring.parse(query);

   if (parsedQuery && parsedQuery[name]) return parsedQuery[name];

   return defParam;
};

export const toString = (path) => {
   const {
      protocol,
      host,
      pathname,
      query
   } = path;

   const q = query ? `?${query}` : ``;

   return `${protocol}//${host}${pathname}${q}`;
};
