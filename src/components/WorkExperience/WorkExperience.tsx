import Job from '@/components/Job/Job'
import SimpleBadge from '@/components/SimpleBadge/SimpleBadge'
import { Dictionary } from '@/dictionaries/dictionaries'
import WorkIcon from '@/icons/WorkIcon'
import { FC, HTMLAttributes } from 'react'

type WorkExperienceProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const WorkExperience: FC<WorkExperienceProps> = (props) => {
  const { dictionary, className = '', ...otherProps } = props

  return (
    <section className={`flex flex-col gap-4 relative ${className}`} {...otherProps}>
      <div className='flex items-center '>
        <SimpleBadge className='bg-transparent fill-white'>
          <WorkIcon width={36} />
        </SimpleBadge>
        <h3 className='text-2xl text-white font-bold'>{dictionary.work_experience}</h3>
      </div>
      <div className='flex flex-col gap-y-8 md:gap-y-4'>
        {dictionary.jobs.map((job, index) => (
          <Job key={index} value={job} />
        ))}
      </div>
    </section>
  )
}

export default WorkExperience

