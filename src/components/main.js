import React from 'react'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import image from './image';

export const Main = () => {
const id='19191919';
    const handleCaptureClick = async (props) => {
        console.log(props.target.id)
        const canvas = await html2canvas(document.getElementById(props.target.id));
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
      };


  return (
    <>
    <div>
    <div className="outer" id='19191919' >
<div className="inner" >
      

        <div className="firstdiv" >
            <div className="left">
                <div className="circle">
                    <p>19191919</p>
                </div>
                <div className="table">
                <table >
        <tr>
            <th>Name</th>
            <td>nandu</td>
            
        </tr>
        <tr>
            <th>Gender</th>
            <td>Male</td>
            
        </tr>
        <tr>
            <th>Email address</th>
            <td>something</td>
            
        </tr>
        <tr>
            <th>Contact No.</th>
            <td>1233211234</td>
          
        </tr>
        <tr>
            <th>Address</th>
            <td>Basant vihar,Street No 5, H.No.-S665,New DelehiBasant vihar,Street No 5, H.No.-S665,New Delehi</td>
          
        </tr>
    </table>
                </div>
            </div>
            <div className="right">
                <div className="photodiv">
                    <img className='simage' src={image} alt="" />

                   
                </div>
                <div className="thoughts">
                        <p> Thoughts on your BTech Journey</p>
                    </div>
            </div>
        </div>
    </div>
    </div>


    <button href="#" id='19191919' onClick={handleCaptureClick}>
    Capture
  </button>
  </div>
    </>
  )
}
