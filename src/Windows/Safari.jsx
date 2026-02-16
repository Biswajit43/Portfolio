import React from 'react'
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol'
import WindowWrapper from '../Hoc/Windowrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import { blogPosts } from '../Constants'

const Safari = () => {
  return (
    <>
      <div id='window-header'>
        <Windowcontrol target="safari" />
        <PanelLeft className='ml-10 icon' />
        <div className='flex'>

          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>

        <div className='flex flex-center gap-3'>
          <ShieldHalf className='icon' />
          <Search className='icon' />
          <div>
            <input type='text' placeholder='enter your questions' className='flex-1' />
          </div>
        </div>

        <div className='flex gap-4'>
          <Share className='icon' />
          <Plus className='icon' />
          <Copy className='icon' />
        </div>
      </div>

      
      <div className="blog">
        <h2>MY blog and Website</h2>
        <div className='space-y-2'>
          {blogPosts.map(({ id, date, title, image, link }) => {
            return (
              <div key={id} className='blog-post'>
                <div className="col-span-2">
                  <img src={image}  alt={title} />
                </div>
                <div className='content'>
                  <h2>{`Date : ${date}`}</h2>
                  <p>{`Title : ${title}`}</p>
                  <a href={link} target='blank' rel='noopener noreferer'>click here</a>
                  <MoveRight className='icon-hover'/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
const Safariwindow = WindowWrapper(Safari, "safari")

export default Safariwindow;
