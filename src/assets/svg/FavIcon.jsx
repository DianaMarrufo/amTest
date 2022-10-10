import * as React from "react"

export const FavIcon = (props) => (
  <svg
    width={22}
    height={24}
    viewBox="0 0 22 24"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 8.6c0-3.582 0-5.374 1.098-6.487C3.197 1 4.964 1 8.5 1h5c3.535 0 5.303 0 6.402 1.113C21 3.226 21 5.018 21 8.601v8.649c0 3.399 0 5.099-1.055 5.618-1.056.52-2.374-.53-5.012-2.63l-.844-.672c-1.483-1.18-2.224-1.771-3.089-1.771-.865 0-1.606.59-3.09 1.771l-.843.672c-2.638 2.1-3.956 3.15-5.012 2.63C1 22.348 1 20.65 1 17.25V8.6Z"
      fill={props?.fill ?? '#FFFFFF'}
      stroke={props?.stroke ?? '#999'}
    />
  </svg>
)
