import { FC, SVGAttributes } from 'react'

type TopBackgroundCurveProps = SVGAttributes<SVGElement> & {
  secondaryClassName?: string
  mainClassName?: string
}

const TopBackgroundCurve: FC<TopBackgroundCurveProps> = (props) => {
  const { secondaryClassName = '', mainClassName = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#0284c7' />
          <stop offset='100%' stopColor='#0369a1' />
        </linearGradient>
      </defs>
      <path d='M0 30 C 25 20, 75 10, 100 30 L 100 0 L 0 0 Z' className={secondaryClassName} fill='url(#gradient)' />
      <path d='M0 20 C 25 10, 75 15, 100 30 L 100 0 L 0 0 Z' className={mainClassName} fill='url(#gradient)' />
    </svg>
  )
}

export default TopBackgroundCurve
