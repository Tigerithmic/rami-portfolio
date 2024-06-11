import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&family=Work+Sans:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
    `}
  />
);

export default Fonts;
