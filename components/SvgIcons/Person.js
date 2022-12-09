import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Person = ({fill, ...otherProps}) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <Path
      d="M4.667 20.5v-3.144c0-1.83 1.621-3.356 3.567-3.356H17.1c1.946 0 3.567 1.525 3.567 3.356V20.5M12.666 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke={fill}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Person
