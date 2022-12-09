import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const CloseIcon = (props) => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14 2.5-11 11M3 2.5l11 11"
      stroke="#141414"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default CloseIcon;
