import React from 'react'

const Footer = () => {
    const footerLinks=[
        {
            title:'Social Media',
            links:['Facebook','Instagram','Youtube','Twitter']
        },
        {
            title:'Information',
            links:['Terms & Conditions','Contact Us','About Us','FAQ','Customer Services']
        },
    ]
  return (
    <div className='bg-[#0F2027] text-white p-10 cursor-pointer'>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-10 gap-x-20">
            <div>
                <h1 className='text-4xl font-[500] mb-8'>iNexus</h1>
                    <div className="flex mb-3 text-zinc-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p>iNexus@gmail.com</p>
                    </div>
                    <div className="flex mb-3 text-zinc-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <p>+95-944-899-8082</p>
                    </div>
                    <div className="flex mb-3 text-zinc-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    <p>Yangon, Myanmar</p>
                    </div>

            </div>
            {footerLinks?.map((item,key)=>{
                return <div key={key}>
                    <h1 className='font-[500] text-2xl mb-5'>{item?.title}</h1>
                    {item?.links?.map((l,key)=><h1 key={key} className='mb-3 text-zinc-400 hover:text-white'>{l}</h1>)}
                </div>
            })}
            <div>
            <h1 className='mb-5 text-3xl'>Subscribe</h1>
            <p className="text-zinc-400 text-[14px]">
            Subscribe to receive updates on our store and special offers
            </p>
            <input placeholder='Your email address' className='px-4 py-3 my-4 rounded-lg outline-none bg-zinc-700' />
            <br/>
            <button className='px-8 py-2 text-white rounded-lg bg-zinc-700'>Subscribe</button>
            </div>
        </div>
      <p className='mt-10 text-center text-zinc-400 '>© Empress Store. All rights reserved</p>
    </div>
  )
}

export default Footer
