/*
node process doesn’t have a window object.
function makes sure it doesn’t render the component on server side
*/
export const isServer = () => typeof window === 'undefined';
