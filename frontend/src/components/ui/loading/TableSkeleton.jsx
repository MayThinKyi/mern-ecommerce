import React from 'react'

const TableSkeleton = () => {
  return (
    <div class="animate-pulse py-10">
  <div class="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
  <div class="h-4 bg-gray-300 mb-6 rounded"></div>
  <div class="h-4 bg-gray-200 mb-6 rounded"></div>
</div>
  )
}

export default TableSkeleton
