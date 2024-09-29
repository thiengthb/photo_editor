import {Button} from "@nextui-org/react"

export default function App({onclick, children, active=false}) {
    return (
        <Button 
            radius='full'
            isIconOnly   
            onClick={onclick}
            color={active ? "success" : "default" }
            >
            {children}
        </Button>
    )
}

