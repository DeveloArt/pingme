import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

const AddFromAlbumIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={30} height={30} rx={3} fill="#323232" />
    <G clipPath="url(#a)" fill="#D9D9D9">
      <Path d="M21.744 6.667a.556.556 0 0 0-.555-.556H8.967a.556.556 0 0 0-.556.556v.555h13.333v-.555ZM22.844 8.889a.556.556 0 0 0-.555-.555H7.844a.556.556 0 0 0-.555.555v.556h15.555v-.556ZM22.844 10.556H7.156A1.044 1.044 0 0 0 6.11 11.6v10.133a1.045 1.045 0 0 0 1.045 1.045h15.688a1.045 1.045 0 0 0 1.045-1.045V11.6a1.045 1.045 0 0 0-1.045-1.044ZM9.756 12.472a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334Zm11.91 8.084H8.334l4.145-4.15a.394.394 0 0 1 .555 0l2.045 2.044 2.816-2.894a.394.394 0 0 1 .556 0l3.217 3.216v1.784Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(5 5)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default AddFromAlbumIcon
