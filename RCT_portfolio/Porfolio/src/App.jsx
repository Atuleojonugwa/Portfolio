import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import pic from './assets/pic.png'

function App() {

  return (
    <>
      <nav className='flex items-center justify-between m-5 py-5 px-10 border-2 border-transparent rounded-[24px]'
        style={{
          background:` linear-gradient(to right, 
              rgba(255, 255, 255, 0.2) 10%,  
              rgba(255, 255, 255, 0.2) 90%) border-box,
          rgba(255, 255, 255, 0.05) padding-box`,
          backgroundOrigin: `border-box`,
          backgroundClip: `padding-box, border-box`,
          backdropFilter: `blur(8px)`,
          webkitBackdropFilter: `blur(8px)`}}>
        <div className="logo flex items-center gap-[10px] cursor-pointer  ">
          <FontAwesomeIcon icon={faCode} className='text-white text-2xl' />
          <h1 className='font-medium text-[28px] text-white leading-[100%] tracking-[0%] hover:text-[#ad511b] transition ease-in-out duration-300 '>COD<span className='text-[#ab511b] hover:text-white transition ease-in-out duration-300  '>mas</span></h1>
        </div>

        <div className="flex gap-[30px]">
          <ul className='flex gap-[30px] list-none '>
            <li><a className='no-underline font-normal text-[18px] leading-[100%] tracking-[0%] text-[#fff] transition duration-300 hover:text-[#ad511b]' href="">Home</a></li>
            <li><a className='no-underline font-normal text-[18px] leading-[100%] tracking-[0%] text-[#fff] transition duration-300 hover:text-[#ad511b] ' href="">About me</a></li>
            <li><a className='no-underline font-normal text-[18px] leading-[100%] tracking-[0%] text-[#fff] transition duration-300 hover:text-[#ad511b] ' href="">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="flex items-center mt-[60px] mx-[20px] ml-[20px] mb-[20px] border-[3px] border-[#5150503d] rounded-[15px] ">
        <div className="cont1 flex h-full py-[20px] px-[40px] flex-col w-[600px]" 
        // style={{
        //   borderTopLeftRadius: `15px`,
        //   borderBottomLeftRadius: `15px`,
        //   background: 
        //   `linear-gradient(to right, 
        //       rgba(255, 255, 255, 0.2) 10%, 
        //       rgba(0, 0, 0, 0.1) 50%, 
        //       rgba(255, 255, 255, 0.2) 90%) border-box,
        //   rgba(255, 255, 255, 0.05) padding-box`,
        //   backgroundOrigin: `border-box`,
        //   backgroundClip: `padding-box, border-box;`,
        //   backdropFilter: `blur(8px)`,
        //   webkitBackdropFilter: `blur(8px)`
        // }}
        >
          <h3 className='text-[40px] font-bold leading-[1.3] mb-[20px] text-shadow text-white'>CREATIVE FRONTEND<br/><span className='text-[#ad511b]'>DESIGNER</span></h3>    
          <p className='text-lg leading-relaxed text-shadow text-white my-5 mx-0'>I'm a frontend developer based in italy, i'll help you <br/> build beautiful websites your users will love.</p>
          <div className="bmt flex mt-[50px] gap-5">
            <button className='bnt rounded-lg bg-[#ad511b] text-white text-shadow py-[10px] px-8 cursor-pointer border-none font-medium text-[18px] leading-[100%] tracking-[0%]'>Get in Touch</button>
            <button className="btn cursor-pointer text-white border-2 border-[#ad511b] transition duration-300 ease-in-out rounded-[8px] px-8 py-[10px] bg-transparent font-medium text-[18px] leading-[100%] tracking-[0%] hover:bg-[#ab5115] hover:text-[#000] ">Browse Projects</button>
          </div>
        </div>
        <div className="cont2 flex items-center content-center ml-[170px]">
          <div className="circle h-80 w-80 rounded-full border-[20px] border-[#ad511b]">
            <img className='w-[280px] h-[281px] rounded-full' src={pic} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
