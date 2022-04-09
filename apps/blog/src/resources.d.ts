declare module '*.css' {
  const value: string;
  export default value;
}
declare module '*.html' {
  import { BindableDefinition } from '@aurelia/runtime-html';

  export const name: string;
  export const template: string;
  export default template;
  export const dependencies: string[];
  export const containerless: boolean | undefined;
  export const bindables: Record<string, BindableDefinition>;
  export const shadowOptions: { mode: 'open' | 'closed'} | undefined;
}
