import { auth } from '@/auth';
import MainLayouts from '@/layouts/main-layouts'
import React from 'react'

export default async function page() {
    const session = await auth();
  return (
    <MainLayouts session={session}>
        {session?.user?.name}
        {session?.user?.email}
    </MainLayouts>
  )
}
