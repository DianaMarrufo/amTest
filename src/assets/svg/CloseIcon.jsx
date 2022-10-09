import * as React from "react"

export const CloseIcon = (props) => (
  <svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill={props?.fill ?? '#FFFFFF'} d="M0 0h34v34H0z" />
    <circle cx={17} cy={17} r={12.75} stroke={props?.stroke ?? '#333'} />
    <path d="m12.75 21.25 8.5-8.5M21.25 21.25l-8.5-8.5" stroke={props?.stroke ?? '#333'} />
  </svg>
)
