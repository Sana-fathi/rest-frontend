import React, { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, Cart, MenuClose } from "../Icons";

function index() {
const [open, setOpen] = useState(false);

  return (
    <div>
    <button type='button' onClick={() => setOpen(!open)}>
              <div className="relative">
               
           {/* badge for cart count */}
           <Cart />
                    <span className={`absolute -top-2 -right-2 text-[13px] bg-tbRed h-[18px] w-[18px] rounded-full grid place-items-center text-white ${open ? 'hidden' : ''}`}>    
                        2 
                    </span>
               
              
              </div>

            </button>

    </div>
  )
}

export default index