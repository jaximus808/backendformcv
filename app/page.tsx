'use client'
import Image from 'next/image'

// import FinanceDesign from '@/components/financeDesign'
// import { ThreePieChart } from '@/components/threeChartDesign'
import { Suspense } from 'react'
import Link from 'next/link'

import Footer from '@/components/footer';
import Header from '@/components/header'

//bg-[#0A0E28]
export default function Home() {

  const redirectButton = (location:string) =>
  {
    window.location.href = location;
  }

  return (
    <main className="items-center">
      
      <Header/>
      <div className='z-10 w-full text-center   '>
        <div className='bg-[#050505] border-[#DCB13C] border-b-2 w-screen p-40'>
            
            <div className=' flex items-center justify-center relative z-20'>
              <div className='text-center pr-12 '>
                <h3 className='leading-snug text-8xl font-bold bg-gradient-to-t from-[#EBD14D] to-[#EB874D] bg-clip-text text-transparent'>
                  Unleash Your True Potential!
                </h3>
                <h3 className='mt-4 text-2xl'>Let VizFit <span className='font-bold'>maximize your workouts</span> and minimize injuries by giving real-time fitness feedback! From weight-lifting technique to workout routines, VizFit will help you reach new limits and beyond! </h3>
                <div 
                className='relative left-[50%] translate-x-[-50%] w-[40%] mt-8 text-2xl font-bold bg-[#EBD14D] text-[black] p-4 rounded-xl hover:bg-[#DFAD55] hover:rounded-lg duration-100 hover:text-[#1c1c1c] '>Get Started for Free!</div>
              </div>
            </div>
        </div>
        <div className='border-[#DCB13C] grid grid-cols-1 p-20 bg-[#171717] w-screen '>
            
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-left p-12'>
                <h3 className='leading-snug text-7xl text-[#eaa80c] font-bold text-white'>
                    Workout Technique Advice with AI
                </h3>
                <h3 className='mt-4 text-2xl'>
                VizFit harnesses the power of cutting-edge computer vision with your smartphone's camera and provides real-time feedback on your exercise form. Experience faster gains and minimize the risk of injury with AI-Assisted proper form!
                </h3>
              </div>
            </div>
            <div>

            </div>
        </div>
        <div className='border-[#DCB13C] grid grid-cols-1 bg-[#121212] w-screen '>
            <div>

            </div>
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-center p-12'>
                <h3 className='leading-snug text-7xl text-[#eaa80c] font-bold text-white'>
                    Everything You Need in One App
                </h3>
                <h3 className='mt-4 text-2xl'>
                  VizFit is everything you need when maximizing the gym. VizFit allows you to choose from different workout plans that suits your goals. VizFit also allows you to track your calories along side your workout plan and automatically calculates your target calorie goal.
                </h3>
              </div>
          </div>
          
          
        </div>
        {/* <div className='border-[#DCB13C] grid grid-cols-2 bg-[#171717] w-screen h-[35rem]'>
            
          <div className='h-full flex items-center justify-center relative z-20'>
            <div className='text-left p-12'>
              <h3 className='leading-snug text-7xl text-[#eaa80c] font-bold text-white'>
                Automatically Track Your New Limits!
              </h3>
              <h3 className='mt-4 text-2xl'>
                Take a short quiz to get a starting level of fitness and what your goals are. Then as VizFit helps maximize your workouts with your chosen program, these programs will keep track of the new heights you've reached right form the app!
              </h3>
            </div>
          </div>
          <div>

          </div>
            
        </div> */}
        <div className='border-[#DCB13C] grid grid-cols-1 bg-[#171717] w-screen '>
            
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-center p-12'>
                <h3 className='leading-snug text-7xl text-[#eaa80c] font-bold text-white'>
                    A Fitness App For Anyone!
                </h3>
                <h3 className='mt-4 text-2xl'>
                  Take a short quiz of what your fitness goals are and VizFit will offer different programs to reach these goals! From bodybuilding to simply losing weight, VizFit is an app that caters to individuals at all fitness levels and empowers them to achieve their unique health and fitness goals!
                </h3>
              </div>
            </div>
            <div>
  
            </div>
              
          </div> 
        

        <div className='border-[#DCB13C] bg-gradient-to-br from-[#EBD14D] to-[#EB874D] w-screen h-[30rem]'>
            
          <div className='h-full flex items-center justify-center relative z-20'>
            <div className='text-center p-12'>
              <h3 className='leading-snug text-6xl text-[#171717] font-bold'>
                Start Your Fitness Journey with AI Today! 
              </h3>
              <div className='relative left-[50%] translate-x-[-50%] w-[40%] mt-4 text-4xl font-bold bg-black  px-[16px] py-[24px] rounded-xl duration-100  hover:shadow-2xl hover:text-[#EBD14D] hover:-translate-y-[2px] ' >
                
                  Get Started for Free
              
              </div>
              
            </div>
          </div>
          
         
            
        </div>
      </div>
      <Footer/>
      
      
      
    </main>
  )
}

