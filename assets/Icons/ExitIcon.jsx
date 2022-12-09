import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ExitIcon = (props) => (
  <Svg
	width={16}
	height={16}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
  >
	<Path
	  d="m13.5 2.5-11 11M2.5 2.5l11 11"
	  stroke="#AAA"
	  strokeWidth={1.5}
	  strokeLinecap="round"
	/>
  </Svg>
)

export default ExitIcon
