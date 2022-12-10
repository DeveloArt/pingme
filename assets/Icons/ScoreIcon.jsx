import * as React from "react"

const ScoreIcon = (props) => (
  <svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 7.5 4.5 12 0 7.5h9Z" fill="#ACACAC" fillOpacity={0.5} />
    <path d="M0 4.5 4.5 0 9 4.5H0Z" fill="#ACACAC" />
  </svg>
)

export default ScoreIcon
