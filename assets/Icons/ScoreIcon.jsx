import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ScoreIcon = (props) => (
  <Svg
	width={9}
	height={12}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
  >
	<Path d="M9 7.5 4.5 12 0 7.5h9Z" fill="#ACACAC" fillOpacity={0.5} />
	<Path d="M0 4.5 4.5 0 9 4.5H0Z" fill="#ACACAC" />
  </Svg>
)

export default ScoreIcon

