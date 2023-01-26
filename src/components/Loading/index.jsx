import React from 'react'

const Loading = () => {
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto h-28 flex items-center">
      <div class="animate-pulse flex flex-1 space-x-4">
        <div class="rounded-full bg-slate-700 bg-opacity-20 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-700 bg-opacity-20 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 bg-opacity-20 rounded col-span-2"></div>
              <div class="h-2 bg-slate-700 bg-opacity-20 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-700 bg-opacity-20 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading