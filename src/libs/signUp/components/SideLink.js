import React from 'react';
import { SideLinkData } from '../services/sideLinkData';

const SideLink = () => {
  return (
    <div className='sideLinkComponentWrapper'>
        {
            SideLinkData.map((item) => {
                return(
                    <div key={item.id}>
                        <item.icon color={'white'} size={20}/>
                        <h3>{item.heading}</h3>
                        <p>{item.detail}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SideLink;