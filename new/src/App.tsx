
import './App.css'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/card'
function App() {
  
  return (
    
    


    <Card className="w-[450px]">
      
      <CardHeader>
        <CardTitle>Histopathological Images</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Upload the tile in which you want to detect Infiltration</Label>
            <Input id="picture" type="file" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  


      
  
  )
}

export default App
