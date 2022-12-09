import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AddIcon = (props) => (
  <Svg
	width={49}
	height={49}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
  >
	<Path
	  d="M41.166.263 5.264 2.145a5.136 5.136 0 0 0-4.86 5.397l1.882 35.902a5.136 5.136 0 0 0 5.397 4.86l35.902-1.882c2.82-.148 5.008-2.577 4.86-5.397L46.563 5.123c-.148-2.82-2.577-5.008-5.397-4.86ZM37.38 26.176l-10.258.538.538 10.257-5.129.269-.537-10.258-10.258.538-.269-5.129 10.258-.537-.538-10.258 5.129-.269.538 10.258 10.257-.538.269 5.129Z"
	  fill="#FFCC2E"
	/>
  </Svg>
)

export default AddIcon
