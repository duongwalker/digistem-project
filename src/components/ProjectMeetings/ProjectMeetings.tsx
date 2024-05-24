import banner from '../../assets/banner.png'
import meeting from '../../assets/meetings/2ndProjectMeeting_1.jpeg'
import calendar from '../../assets/calendar-icon.svg'
import location from '../../assets/location-icon.svg'
import line from '../../assets/line.svg'

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

            <div className='bg-[#B82375] mb-40 absolute left-0 w-3/4 max-w-7xl flex text-white'>
                <div className='flex-col min-w-96'>
                    <img src={meeting} className='w-96 max-h-80 mt-7 ml-5'></img>
                    <div className='text-center font-bold font-montserrat text-xl max-w-md ml-4 mt-2 mb-4'>
                        Quality and Exploitation Meeting
                    </div>
                </div>
                <div className='ml-20 mt-7 text-lg'>
                    <div className='date flex'>
                        <img src={calendar}></img>
                        <div className='ml-4 mt-2'>10.2024</div>
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

            <div className='bg-[#EE8332] mt-96 right-0 w-3/4 max-w-7xl flex text-white'>
                <div className='ml-20 mt-7 text-lg'>
                    <div className='date flex'>
                        <img src={calendar}></img>
                        <div className='ml-4 mt-2'>14.5.2024 - 15.5.2024</div>
                    </div>
                    <div className='location flex mt-6'>
                        <img src={location}></img>
                        <div className='ml-4 mt-2'>Bratislava, Slovakia</div>
                    </div>
                    <div className='desc text-justify mt-4 mr-4'>
                        {sixth_meeting_desc}
                    </div>
                </div>

                <div className='flex-col min-w-96 mr-12'>
                    <img src={meeting} className='w-96 max-h-80 mt-7 ml-5'></img>
                    <div className='text-center font-bold font-montserrat text-xl  max-w-md ml-4 mt-2 mb-4'>
                        Dissemination and Training Meeting
                    </div>
                </div>

            </div>

            <div className='flex-col justify-self-center'>
                <div className='text-center text-5xl font-bold font-montserrat p-8 text-transparent bg-clip-text bg-gradient-to-r from-[#9F005D] via-[#C13F51] to-[#F09640]'>
                    Other Meetings
                </div>
                <img src={line} className='mx-auto'></img>
                <div className='flex justify-center'>
                    <div className='w-full max-w-3xl'>
                        <div className='my-4'>
                            <span className='font-bold'>27.11.2023 - 28.11.2023 </span>
                            <span>4th meeting – Dissemination, Quality and Training (Madrid, Spain)</span><br></br>
                        </div>

                        <div className='my-4'>
                            <span className='font-bold'>20.03.2023 - 23.03.2023 </span>
                            <span>3rd meeting – Implementation of the learning, teaching and training (Tampere, Finland)</span><br></br>
                        </div>

                        <div className='my-4'>
                            <span className='font-bold'>14.06.2022 - 16.06.2022 </span>
                            <span>2nd meeting – Research and quality meeting (Madrid, Spain)</span><br></br>
                        </div>

                        <div className='my-4'>
                            <span className='font-bold'>17.1.2022 </span>
                            <span>1st meeting – Kick off and Quality meeting (online meeting)</span><br></br>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
