/** @jsx jsx */
import * as React from "react"
import { keyframes, css, jsx } from "@emotion/react"

const forward = keyframes`
  0% {
    margin-left: 1rem;
  }
  100% {
    margin-left: 2rem;
  }
`
const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`


export function Forward({ children }: { children: React.ReactNode }) {
  return (
    <svg css={css`
      animation: ${forward};
      margin-left: 1rem;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      vertical-align: bottom;
    `}
      width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path></svg>
  )
}

export function UpDown({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  )
}

export function UpDownWide({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownWideAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  )
}

export const waveAnimation = (length: string) => `${wave} ${length} linear infinite alternate`
