import ListDoctor from '@/components/ListDoctor'
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Card } from '@tremor/react'

export default function page() {
  return (
    <Card>
      <CardTitle></CardTitle>
      <CardDescription></CardDescription>
      <CardContent>
        <ListDoctor />
      </CardContent>
    </Card>
  )
}
