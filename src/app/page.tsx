import React from 'react';
import Image from 'next/image';
import backgroundBanner from '@/assets/img/bg-pattern.svg';
import circles from '@/assets/img/pattern-circles.svg';
import checkIcon from '@/assets/img/icon-check.svg';
import sliderIcon from '@/assets/img/icon-slider.svg';
import RangeSlider from '@/components/range';


export default function Home() {
  return (
    <div className='relative w-full min-h-screen flex'>
      <Image src={backgroundBanner} alt="Background Banner" width={1920} height={1080} className='absolute top-0 left-0 w-full h-1/2' />
      <div className="z-10 m-auto flex flex-col items-center jusctify-center w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center justify-center gap-2 py-12">
            <h3 className="z-20 text-xl font-extrabold">
              {"Simple, traffic-based pricing"}
            </h3>
            <p className="z-20 text-base text-center text-neutral-400">
              {"Sign-up for our 30-day trial."}
              <br />
              {"No credit card required."}
            </p>
            <Image src={circles} alt="Background Banner" width={1920} height={1080} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-auto h-auto z-10' />
          </div>
          <div className="z-10 w-full max-w-lg bg-white mt-8 py-6 border border-neutral-100 shadow-xl shadow-purple-100 rounded-2xl space-y-8">
            <div className="px-6 md:px-10 flex flex-col md:flex-col items-center justify-center">
              <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-2 md:gap-0">
                <span className='text-sm text-neutral-500 uppercase'>100K Pageviews</span>
                <span><strong className='text-3xl'>${"16.00"}</strong>&nbsp;/&nbsp;month</span>
              </div>
            </div>
            <div className="px-6 md:px-10 w-full h-8 flex items-center">
              <RangeSlider thumbImage={sliderIcon} className='w-full' />
            </div>
            <div className="px-6 md:px-10 flex flex-row items-center justify-center">
              <div className="w-full flex flex-row items-center justify-center gap-2">
                <span className='text-sm text-neutral-500 capitalize text-nowrap'>Monthly Billing</span>
                <div className="md-switch md">
                  <input type="checkbox" id="billingType" name="billingType" title="Billing Type" className="md-toggle md-toggle-round" />
                  <label htmlFor="billingType"></label>
                </div>
                <div className="relative flex flex-row items-center justify-center w-fit">
                  <span className='text-sm text-neutral-500 capitalize'>Yearly Billing</span>
                  <span className='absolute left-[110%] bg-orange-100 text-orange-500 text-xs rounded-2xl p-1.5 px-2.5 text-center text-nowrap flex items-center justify-center gap-0.5 font-extrabold'><span className='block md:hidden'>-</span>25% <span className='hidden md:block'>discount</span></span>
                </div>
              </div>
            </div>
            <hr className='w-full' />
            <div className="px-6 md:px-10 pb-4 flex flex-col md:flex-col items-center justify-center">
              <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
                <ul className='flex flex-col gap-1 items-center md:items-start'>
                  {["Unlimited websites", "100% data ownership", "Email reports"].map((feature, index) => (
                    <li key={"Features_Item__" + String(index)} className='flex flex-row items-center justify-start gap-3'>
                      <Image src={checkIcon} alt='available' width={36} height={36} className='size-3 shrink-0' />
                      <span className='text-neutral-500 text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className='p-3 px-8 rounded-full bg-slate-800 text-white'>Start my trial</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
