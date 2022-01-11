declare module "\*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const value: any;
    export default value;
 }

declare module 'react-scroll';

declare module 'scrollreveal';