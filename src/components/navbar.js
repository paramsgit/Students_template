import React from 'react'

export const Navbar = () => {

//   if (document.readyState !== 'loading') {
//     // console.log('document is already ready, just execute code here');
//     myInitCode();
// } else {
//     document.addEventListener('DOMContentLoaded', function () {
      
//         myInitCode();
//     });
// }

// function myInitCode() {
//   window.addEventListener('scroll', function() {
//     console.log(window.scrollY)
//     // checks if window is scrolled more than 500px, adds/removes solid class
//     if (window.scrollY > 700) { 
//       // document.getElementById('transs').classList.remove('transu');
//       // document.getElementById('transs2').classList.remove('transu');
//       document.getElementById('al1').classList.remove('text-white');
//       document.getElementById('al2').classList.remove('text-white');
//       document.getElementById('al3').classList.remove('text-white');

//     } else {
//       // document.getElementById('transs').classList.add('transu');
//       // document.getElementById('transs2').classList.add('transu');
//       document.getElementById('al1').classList.add('text-white');
//       document.getElementById('al2').classList.add('text-white');
//       document.getElementById('al3').classList.add('text-white');
//     }
//   });
// }
  

  return (
 <>

<nav className="transparent fixed w-full z-20 top-0 left-0  " id='transs'>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium transparent rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 " id='transs2'>
      <li>
        <a href="#" className="lia block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" id='al1' className="lia text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" id='al2' className="lia text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" id='al3' className="lia text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>


 </>
  )
}
