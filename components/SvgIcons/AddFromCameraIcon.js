import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const AddFromCameraIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M27 0H3a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
      fill="#323232"
    />
    <Path
      d="M14.889 19.889c1.111 0 2.056-.389 2.834-1.166.777-.778 1.166-1.723 1.166-2.834s-.389-2.056-1.166-2.834c-.778-.777-1.723-1.166-2.834-1.166s-2.056.389-2.834 1.166c-.777.778-1.166 1.723-1.166 2.834s.389 2.056 1.166 2.834c.778.777 1.723 1.166 2.834 1.166ZM7.778 23c-.49 0-.907-.174-1.255-.522A1.713 1.713 0 0 1 6 21.222V10.556c0-.49.174-.908.523-1.256a1.71 1.71 0 0 1 1.255-.522h2.8l1.11-1.2a1.55 1.55 0 0 1 .59-.434c.23-.096.47-.144.722-.144h3.778c.252 0 .492.048.722.144.23.097.426.241.589.434l1.111 1.2H22c.489 0 .908.174 1.256.522.348.348.522.767.522 1.256v10.666c0 .49-.174.908-.522 1.256A1.714 1.714 0 0 1 22 23H7.778Z"
      fill="#D9D9D9"
    />
  </Svg>
)

export default AddFromCameraIcon
