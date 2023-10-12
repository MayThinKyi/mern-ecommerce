import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function OrderHistoryModal({order}) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <p onClick={()=>setIsOpen(!isOpen)} className='font-semibold underline'>{order?._id}</p>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    <p>Order ID : {order?._id}</p>
                    <div onClick={()=>setIsOpen(false)} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                    </div>

                  </Dialog.Title>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Name - {order?.name}</p>
                    <p>Email - {order?.email}</p>
                    <p>total - $ {order?.total}</p>
                    <p>transactionId - {order?.transactionId}</p>
                    <p>address - {order?.shippingAddress?.address}</p>
                    <p>city - {order?.shippingAddress?.city}</p>
                    <p>country - {order?.shippingAddress?.country}</p>
                    <p>postalCode - {order?.shippingAddress?.postalCode}</p>
                    <p>status - {order?.status}</p>
                    <div>
                        {order?.orderItems?.map((item)=>{
                            return <div key={item?._id} className="my-2 flex">
                                <img src={item?.image} className='h-[80px] sm:h-[100px] w-auto object-contain' />
                                <div>
                                <p>{item?.name}</p>
                                <p>${item?.price} x {item?.quantity}</p>
                                </div>
                            </div>
                        })}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
