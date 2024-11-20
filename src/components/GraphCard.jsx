import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import {  Ellipsis } from 'lucide-react'
import DashGraph from './DashGraph'

const GraphCard = () => {
  return (
    <div>
        <Card className="max-w-[559px] rounded-md">
        <CardHeader className='flex w-full justify-between px-5 border-b'>
            <section className='flex w-full justify-between px-5'>
            <div>
            <h1 className='text-xl font-bold'>Revenue</h1>
        </div>
        <div>
            <Ellipsis/>
        </div>
            </section>
      </CardHeader>
      <CardContent>
        <DashGraph/>
      </CardContent>
        </Card>
    </div>
  )
}

export default GraphCard