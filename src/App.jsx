import React from 'react'

const App = () => {
  return (
    // შეცვლილია: items-center და justify-center
    <div className='flex items-center justify-center px-6 min-h-screen lg:min-h-dvh'> 
      <section className='flex max-w-[1170px] w-full justify-between items-center'>
        <div className='w-full flex-1'>
          <h1 className='text-[32px] font-bold text-[#36454F] leading-[150%]'>პროექტის შესახებ</h1>
          <p className='text-[14px] text-[#36454F] leading-[150%] text-justify mb-[28px] mt-[33px] max-w-[437px]'>
            სარკვევი განკუთვნილია საბაკალავრო საფეხურის სტუდენტებისათვის, რომლებსაც ეკითხებათ სასწავლო კურსი „ბოტანიკა“, ასევე ბოტანიკით დაინტერესებული მაგისტრანტების, დოქტორანტების, მკვლევარებისა და მოყვარული ბოტანიკოსებისათვის, რომლებსაც აქვთ სურვილი მცენარეთა ოჯახების რკვევის პრაქტიკულ უნარ-ჩვევებს დაეუფლონ.
          </p>
          <a className="text-[#12C295] bg-[#DAFFF6] px-[23px] py-[12px] rounded-[10px] border-[#12C295] hover:bg-[#12C295] hover:text-white duration-300 transition-all font-[500]" href='#'>
            სრულად
          </a>
        </div>
        <div className="flex-1">
          <img className="w-full h-auto max-w-[652px]" src="/assets/bg-image.png" alt="bg-image" />
        </div>
      </section>
    </div>
  )
}

export default App