import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Skeleton } from './ui/skeleton'

function SidebarSkeleton() {
  return (
    <div className="sticky top-20">
  <Card>
    <CardContent className="pt-6">
      <div className="flex flex-col items-center text-center">
        {/* Avatar Skeleton */}
        <Skeleton className="w-20 h-20 rounded-full border-2" />

        {/* Name & Username Skeleton */}
        <div className="mt-4 space-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>

        {/* Bio Skeleton */}
        <Skeleton className="mt-3 h-3 w-40" />

        <div className="w-full">
          <Separator className="my-4" />

          {/* Followers & Following Skeleton */}
          <div className="flex justify-between">
            <div className="text-center">
              <Skeleton className="h-4 w-6 mx-auto" />
              <Skeleton className="h-3 w-12 mt-1" />
            </div>
            <Separator orientation="vertical" />
            <div className="text-center">
              <Skeleton className="h-4 w-6 mx-auto" />
              <Skeleton className="h-3 w-12 mt-1" />
            </div>
          </div>

          <Separator className="my-4" />
        </div>

        {/* Location & Website Skeleton */}
        <div className="w-full space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Skeleton className="w-4 h-4 mr-2" />
            <Skeleton className="h-3 w-24" />
          </div>
          <div className="flex items-center text-muted-foreground">
            <Skeleton className="w-4 h-4 mr-2" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

  )
}

export default SidebarSkeleton