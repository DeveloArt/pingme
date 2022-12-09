import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlusIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.222 0H1.778A1.778 1.778 0 0 0 0 1.778v12.444A1.778 1.778 0 0 0 1.778 16h12.444C15.2 16 16 15.2 16 14.222V1.778C16 .8 15.2 0 14.222 0Zm-1.778 8.889H8.89v3.555H7.11V8.89H3.556V7.11H7.11V3.556H8.89V7.11h3.555V8.89Z"
      fill="#FFCC2E"
    />
  </Svg>
)

export default PlusIcon
