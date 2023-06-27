import { FC, SVGAttributes } from 'react'

type CreativityIconProps = SVGAttributes<SVGElement> & {}

const CreativityIcon: FC<CreativityIconProps> = (props) => {
  const { width = 48, height = width ? width : 48, viewBox = '0 -960 960 960', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='m887-567-23-50-50-23 50-23 23-50 23 50 50 23-50 23-23 50ZM760-742l-35-74-74-35 74-35 35-74 35 74 74 35-74 35-35 74ZM360-80q-34 0-57.5-23.5T279-161h162q0 34-23.5 57.5T360-80ZM198-223v-60h324v60H198Zm5-121q-66-43-104.5-107.5T60-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T517-344H203Zm22-60h271q48-32 76-83t28-110q0-99-70.5-169.5T360-837q-99 0-169.5 70.5T120-597q0 59 28 110t77 83Zm135 0Z' />
    </svg>
  )
}

export default CreativityIcon
