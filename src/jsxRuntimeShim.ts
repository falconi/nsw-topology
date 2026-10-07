// Stand-in for react/jsx-runtime and react/jsx-dev-runtime.
//
// Grafana does not expose these modules to plugins, so webpack has to bundle
// something for them. Bundling the real ones pins the bundle to the React
// version in node_modules: React 18's jsx-runtime reads
// React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
// which React 19 (Grafana 13+) no longer has, so the plugin crashed on load.
//
// This shim only goes through the public React.createElement of the React that
// Grafana provides at runtime, so it works on both 18 and 19.
import React from 'react';

type Props = Record<string, unknown> & { children?: unknown };

const make = (type: React.ElementType, props: Props | null, key: unknown, spreadChildren: boolean) => {
  const { children, ...rest } = props || {};
  if (key !== undefined) {
    rest.key = key;
  }
  if (children === undefined) {
    return React.createElement(type, rest);
  }
  if (spreadChildren && Array.isArray(children)) {
    return React.createElement(type, rest, ...children);
  }
  return React.createElement(type, rest, children);
};

export const Fragment = React.Fragment;
export const jsx = (type: React.ElementType, props: Props | null, key?: unknown) => make(type, props, key, false);
export const jsxs = (type: React.ElementType, props: Props | null, key?: unknown) => make(type, props, key, true);
export const jsxDEV = (type: React.ElementType, props: Props | null, key?: unknown) => make(type, props, key, true);
