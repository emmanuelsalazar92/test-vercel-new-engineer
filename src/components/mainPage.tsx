import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { MoveToPage } from "@/components/ui/moveToPage"
import router from "next/router"

export function MainPage() {
  return (
    <div>
        <Label>SandBox Site</Label>
        <Card>
            <Label>Create User</Label>
            <CardFooter>
                <MoveToPage/>
            </CardFooter>
        </Card>
    </div>
  )
}