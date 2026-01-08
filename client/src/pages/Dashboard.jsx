import React, { useEffect, useState } from 'react'
import { FilePenIcon, FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import { dummyResumeData } from '../assets/assets' // dummy resume data
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

   const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a", '#1e0649ff']; // differentcolors for different resume items
   const [allResumes, setAllResumes] = useState([])
   const [showCreateResume, setShowCreateResume] = useState(false) // initially pop up will be hidden
   const [showUploadResume, setShowUploadResume] = useState(false) // initially it was false and kept hidden
   const [title, setTitle] = useState('') //initialize resume- title with empty string
   const [resume, setResume] = useState(null) // initialize resume with null
   const [editResumeId, setEditResumeId] = useState('') //initialize with empty string

   const navigate = useNavigate() // use navigate to navigate user when we give resume title and go to the resume builder page
   const loadAllResumes = async () => {
      setAllResumes(dummyResumeData); // dummy resume data imported from assets file
   }

   const createResume = async (event) => {
      event.preventDefault() //prevent the webpage from reloading
      setShowCreateResume(false)  // submitting the form  we have to hide the pop
      navigate(`/app/builder/res123`)  // submit the form and user redirects to Resume - builder page
   }

   const uploadResume = async (event) => {
      event.preventDefault(); //prevent the webpage from reloading
      setShowUploadResume(false)  // uploading the form  we have to hide the pop
      navigate(`/app/builder/res123`)  // submit the form and user redirects to Resume - builder page
   }

   const editTitle = async (event) => {
      event.preventDefault(); // prevent the webpage from reloading
   }
   const deleteResume = async (resumeId) => {
      const confirm = window.confirm("Are you sure you want to delete this Resume ?")
      if(confirm){
         setAllResumes(prev => prev.filter(resume => resume._id !== resumeId))
      }
   }

   useEffect(() => {
      loadAllResumes() // add data in the state when component loads
   }, [])


   return (
      <div>
         <div className='max-w-7xl mx-auto px-4 py-8'>
            <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>
               Welcome John Doe
            </p>
            {/**creating two buttons one is create resume and another is Upload resume*/}
            <div className='flex gap-4'>
               <button onClick={() => setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                  <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-green-300 to-green-500 text-white rounded-full' />
                  <p className='text-sm group-hover:text-green-600 transition-all duration-300'>Create Resume</p>
               </button>

               <button onClick = {() => setShowUploadResume(true)}className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                  <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-600 text-white rounded-full' />
                  <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>
               </button>
            </div>

            <hr className='border-slate-300 my-6 sm:w-[305px]' />
            {/**Defining base colors for different colors for different resume list */}
            {/*creating cards for already existed resume consisiting of resume title , created and updated date with edit and delete icon*/}

            <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
               {allResumes.map((resume, index) => {
                  const baseColor = colors[index % colors.length];
                  return (
                     <button onClick = {() => navigate(`/app/builder/${resume._id}`)} key={index} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{ background: `linear-gradient(135deg , ${baseColor}10 ,${baseColor}40)`, borderColor: baseColor + '40' }}>
                        <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{ color: baseColor }} />
                        <p className='text-sm group-hover:scale-105 transition-all px-2 text-center' style={{ color: baseColor }}>{resume.title}</p>
                        <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{ color: baseColor + '90' }}>Updated on {new Date(resume.updatedAt).toLocaleDateString}</p>

                        <div onClick = {e => e.stopPropagation() }className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                           <TrashIcon onClick = {() => {deleteResume(resume._id)}}  className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
                           <PencilIcon onClick={() => {setEditResumeId(resume._id), setTitle(resume.title)}} className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />

                        </div>
                     </button>
                  )
               })}

            </div>

            {/**now create modal window or pop up window */}
            {/**Pop up for Creating Resume*/}

            {showCreateResume && (
                  <form onSubmit={createResume} onClick={() => setShowCreateResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                     <div onClick={e => e.stopPropagation()} className='relative bg-state-50 border shadow-md rounded-lg w-full max-w-sm p-6 bg-white'>
                        <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
                        <input onChange = {(e) => setTitle(e.target.value)} value = {title} type="text" placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 focus:border-purple-600 ring-purple-600' required />

                        <button className='w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'>Create Resume</button>
                        <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={() => {
                           setShowCreateResume(false); setTitle('')
                        }} />
                     </div>
                  </form>
               )
            }
            {/**Pop up for uploading existing resume*/}

            {showUploadResume && (
                  <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                     <div onClick={e => e.stopPropagation()} className='relative bg-state-50 border shadow-md rounded-lg w-full max-w-sm p-6 bg-white'>
                        <h2 className='text-xl font-bold mb-4'>Upload Resume</h2>
                        <input onChange = {(e) => setTitle(e.target.value)} value = {title} type="text" placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 focus:border-purple-600 ring-purple-600' required />
                        <div>
                           <label htmlFor="resume-input" className='block text-sm text-slate-700'>
                              Select Resume File
                              <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover-purple-500 hover:text-violet-700 cursor-pointer transition-colors'>
                                 {resume ? (
                                    <p className='text-purple-700'>{resume.name}</p>
                                 ): (
                                    <>
                                    <UploadCloud className='size-14 stroke-1'/>
                                    <p>Upload Resume</p>
                                    </>
                                 )}
                              </div>
                           </label>
                           <input type="file" id = 'resume-input' accept = '.pdf' hidden onChange={(e) => setResume(e.target.files[0])}/>
                        </div>
                        <button className='w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'>Upload Resume</button>
                        <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={() => {
                           setShowUploadResume(false); setTitle('')
                        }} />
                     </div>
                  </form>
               )
            }
            {/**Pop up for edit title of the resume using edit icon*/}
            {
               editResumeId && (
                  <form onSubmit={editTitle} onClick={() => setEditResumeId('')} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                     <div onClick={e => e.stopPropagation()} className='relative bg-state-50 border shadow-md rounded-lg w-full max-w-sm p-6 bg-white'>
                        <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
                        <input onChange = {(e) => setTitle(e.target.value)} value = {title} type="text" placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 focus:border-purple-600 ring-purple-600' required />

                        <button className='w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'>Update Title</button>
                        <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={() => {
                           setEditResumeId(''); setTitle('')
                        }} />
                     </div>
                  </form>
               )
            }
         </div>
      </div>
   )
}
export default Dashboard
