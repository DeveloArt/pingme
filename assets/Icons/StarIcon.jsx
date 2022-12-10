import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StarIcon = (props) => (
  <Svg
    width={49}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m25.228 33.404 7.943 3.525c1.454.646 2.954-.773 2.404-2.256l-3.02-8.141 5.804-6.48c1.06-1.183.172-3.057-1.408-2.982l-8.677.361-4.366-7.5c-.788-1.363-2.85-1.101-3.27.415l-2.355 8.336-8.493 1.82c-1.548.323-1.94 2.359-.618 3.239l7.241 4.823-.889 8.638c-.161 1.574 1.645 2.572 2.892 1.583l6.812-5.38Z"
      fill="#FFCC2E"
    />
  </Svg>
)

export default StarIcon
