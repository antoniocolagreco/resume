import { FC, HTMLAttributes } from 'react'
import ProjecttsIcon from '../../icons/ProjectsIcon'
import Dictionary from '../../types/locale'
import ProjectItem from '../ProjectItem/ProjectItem'
import SimpleBadge from '../SimpleBadge/SimpleBadge'

type ProjectsProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Projects: FC<ProjectsProps> = (props) => {
  const { dictionary, className = '', ...otherProps } = props

  return (
    <section className={`flex flex-col gap-4 ${className}`} {...otherProps}>
      <div className='flex items-center '>
        <SimpleBadge className='bg-transparent fill-white'>
          <ProjecttsIcon width={36} />
        </SimpleBadge>
        <h3 className='text-2xl text-white font-bold'>{dictionary.recent_projects}</h3>
      </div>
      <div className='flex flex-col gap-y-8 md:gap-y-4'>
        <ProjectItem
          frontImageUrl='/images/adkaora1.jpg'
          frontImageAlt={dictionary.adkaora_image_alt}
          backImageUrl='/images/adkaora2.jpg'
          backImageAlt={dictionary.adkaora_image_alt}
          name='adkaora.com'
          url='https://adkaora.com'
          description={dictionary.adkaora_project_description}
        />
        <ProjectItem
          frontImageUrl='/images/a2a1.jpg'
          frontImageAlt={dictionary.a2a_image_alt}
          backImageUrl='/images/a2a2.jpg'
          backImageAlt={dictionary.a2a_image_alt}
          name='a2aenergia.eu'
          url='https://www.a2aenergia.eu'
          description={dictionary.a2a_project_description}
          inverted
        />
      </div>
    </section>
  )
}

export default Projects

