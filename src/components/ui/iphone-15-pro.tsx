import { SVGProps } from "react"

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  src?: string
}

export function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  ...props
}: Iphone15ProProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      shapeRendering="geometricPrecision"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Phone bezel frame — iOS-style continuous (squircle) corners; evenodd punches a transparent hole for the screen */}
      <path
        d="M75 0C45.79 0 41.63 3.96 21.58 19.58C5.96 39.63 2 43.79 2 73L2 809C2 838.21 5.96 842.37 21.58 862.42C41.63 878.04 45.79 882 75 882L357 882C386.21 882 390.37 878.04 410.42 862.42C426.04 842.37 430 838.21 430 809L430 73C430 43.79 426.04 39.63 410.42 19.58C390.37 3.96 386.21 0 357 0L75 0Z M76 4C47.99 4 44.01 7.80 24.77 22.77C9.80 42.01 6 45.99 6 74L6 808C6 836.01 9.80 839.99 24.77 859.23C44.01 874.20 47.99 878 76 878L356 878C384.01 878 387.99 874.20 407.23 859.23C422.20 839.99 426 836.01 426 808L426 74C426 45.99 422.20 42.01 407.23 22.77C387.99 7.80 384.01 4 356 4L76 4Z"
        className="fill-black"
        fillRule="evenodd"
      />
      {/* Side buttons */}
      <path
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
        className="fill-black"
      />
      <path
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
        className="fill-black"
      />
      <path
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
        className="fill-black"
      />
      <path
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
        className="fill-black"
      />
      <path
        opacity="0.5"
        d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        className="fill-black"
      />
      <path
        d="M77 19.25C54.69 19.25 51.52 22.28 36.20 34.20C24.28 49.52 21.25 52.69 21.25 75L21.25 807C21.25 829.31 24.28 832.48 36.20 847.80C51.52 859.72 54.69 862.75 77 862.75L355 862.75C377.31 862.75 380.48 859.72 395.80 847.80C407.72 832.48 410.75 829.31 410.75 807L410.75 75C410.75 52.69 407.72 49.52 395.80 34.20C380.48 22.28 377.31 19.25 355 19.25L77 19.25Z"
        className="fill-transparent stroke-transparent"
      />

      {src && (
        <image
          href={src}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}
      <path
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
        className="fill-black"
      />
      <path
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
        className="fill-black"
      />
      <path
        d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
        className="fill-[#1a1a1a]"
      />
      <defs>
        <clipPath id="roundedCorners">
          <path d="M77 19.25C54.69 19.25 51.52 22.28 36.20 34.20C24.28 49.52 21.25 52.69 21.25 75L21.25 807C21.25 829.31 24.28 832.48 36.20 847.80C51.52 859.72 54.69 862.75 77 862.75L355 862.75C377.31 862.75 380.48 859.72 395.80 847.80C407.72 832.48 410.75 829.31 410.75 807L410.75 75C410.75 52.69 407.72 49.52 395.80 34.20C380.48 22.28 377.31 19.25 355 19.25L77 19.25Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
