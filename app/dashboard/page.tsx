import { CreditCard, DollarSign, LineChart, Users } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Analytics from "./components/analytics"
import OverviewBar from "./components/overviewBar"
import RecentSale from "./components/recentSale"

interface Props {}
export default function Page({}: Props) {
  return (
    <div className='space-y-8'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold'>Dashboard</h2>
      </div>

      <Tabs defaultValue='overview' className='space-y-4'>
        <TabsList className=''>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          <TabsTrigger value='reports'>Reports</TabsTrigger>
          <TabsTrigger value='notifications'>Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Revenue
                </CardTitle>
                <DollarSign size={16} className='text-muted-foreground' />
              </CardHeader>

              <CardContent>
                <div className='text-2xl font-bold'>$123,123.92</div>
                <div className='text-sm text-muted-foreground'>
                  +10.2% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Sales</CardTitle>
                <CreditCard size={16} className='text-muted-foreground' />
              </CardHeader>

              <CardContent>
                <div className='text-2xl font-bold'>+891</div>
                <div className='text-sm text-muted-foreground'>
                  +10.2% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Active Now
                </CardTitle>
                <LineChart size={16} className='text-muted-foreground' />
              </CardHeader>

              <CardContent>
                <div className='text-2xl font-bold'>+179</div>
                <div className='text-sm text-muted-foreground'>
                  +91 since last hour
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Subscriptions
                </CardTitle>
                <Users size={16} className='text-muted-foreground' />
              </CardHeader>

              <CardContent>
                <div className='text-2xl font-bold'>+2466</div>
                <div className='text-sm text-muted-foreground'>
                  +32.2% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
            <Card className='col-span-4'>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <OverviewBar />
              </CardContent>
            </Card>

            <Card className='col-span-3'>
              <CardHeader>
                <CardTitle>Recent</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <RecentSale />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value='analytics'>
          <Analytics />
        </TabsContent>
        <TabsContent value='reports'>your here.reports</TabsContent>
        <TabsContent value='notifications'>your here.notifications</TabsContent>
      </Tabs>
    </div>
  )
}
