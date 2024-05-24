import banner from '../../assets/partners-banner.svg'
import meeting from '../../assets/meetings/2ndProjectMeeting_1.jpeg'
import calendar from '../../assets/calendar-icon.svg'
import location from '../../assets/location-icon.svg'

import { sixth_meeting_desc } from '../../utils/constants'
export const ProjectMeetings = () => {
    return (
        <div className='relative'>
            <div >
                <img src={banner} className='min-w-full '></img>
            </div>

            <div className='text-center text-5xl font-bold font-montserrat p-8 text-transparent bg-clip-text bg-gradient-to-r from-[#9F005D] via-[#C13F51] to-[#F09640]'>
                Latest Meetings
            </div>

            <div className='bg-[#B82375] absolute mb-40 left-0 w-3/4 min-h-full max-w-7xl flex text-white'>
                <div className='flex-col min-w-96'>
                    <img src={meeting} className='w-96 max-h-80 mt-7 ml-5'></img>
                    <div className='text-center font-bold font-montserrat text-xl  max-w-md ml-4 mt-2'>
                        Quality and exploitation meeting
                    </div>
                </div>
                <div className='ml-20 mt-7 text-lg'>
                    <div className='date flex'>
                        <img src={calendar}></img>
                        <div className='ml-4 mt-2'>10/2024</div>
                    </div>
                    <div className='location flex mt-6'>
                        <img src={location}></img>
                        <div className='ml-4 mt-2'>Bucharest, Romania</div>
                    </div>
                    <div className='desc text-justify mt-4  mr-4'>
                        {sixth_meeting_desc}
                    </div>
                </div>
            </div>

            <div className='bg-[#EE8332] absolute right-0 w-3/4 min-h-full max-w-7xl mt-96 flex text-white'>
                <div className='flex-col min-w-96'>
                    <img src={meeting} className='w-96 max-h-80 mt-7 ml-5'></img>
                    <div className='text-center font-bold font-montserrat text-xl  max-w-md ml-4 mt-2'>
                        Quality and exploitation meeting
                    </div>
                </div>
                <div className='ml-20 mt-7 text-lg'>
                    <div className='date flex'>
                        <img src={calendar}></img>
                        <div className='ml-4 mt-2'>10/2024</div>
                    </div>
                    <div className='location flex mt-6'>
                        <img src={location}></img>
                        <div className='ml-4 mt-2'>Bucharest, Romania</div>
                    </div>
                    <div className='desc text-justify mt-4  mr-4'>
                        {sixth_meeting_desc}
                    </div>
                </div>
            </div>


        </div>
    )
}
