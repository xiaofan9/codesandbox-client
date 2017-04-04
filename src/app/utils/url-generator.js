// @flow
export const host = () =>
  process.env.NODE_ENV === 'production' ? 'codesandbox.io' : 'codesandbox.dev';

export const protocolAndHost = () => `${location.protocol}//${host()}`;

export const sandboxUrl = (sandbox: { id: string }) => `/s/${sandbox.id}`;
export const newSandboxUrl = () => `/s/new`;
export const fullscreenSandbox = sandbox => `${sandboxUrl(sandbox)}/fullscreen`;
export const editorSandbox = sandbox => `${sandboxUrl(sandbox)}/editor`;

export const frameUrl = (append: string = '') =>
  `${location.protocol}//sandbox.${host()}/${append}`;

export const forkSandboxUrl = (sandbox: { id: string }) =>
  `${sandboxUrl(sandbox)}/fork`;

export const signInUrl = () => '/auth/github';
