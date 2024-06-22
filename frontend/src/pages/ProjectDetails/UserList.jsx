import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'

export default function UserList() {
  return (
    <>
    <div className='space-y-2'>
        <div className='border rounded-md'>
            <p className='py-2 px-3'>{"Raam" || "Unassigne"}</p>
        </div>
        <div className='py-2 group hover:bg-slate-800 cursor-pointer flex
        items-center space-x-4 rounded-md border px-4'>
            <Avatar>
                <AvatarFallback>
                    T
                </AvatarFallback>
            </Avatar>
            <div className='space-y-1'>
                <p className='text-sm leading-none'>Thisara</p>
            </div>
        </div>
    </div>
    </>
  )
}
