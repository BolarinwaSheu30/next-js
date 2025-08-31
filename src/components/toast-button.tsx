"use client"

import { Button } from "@/src/components/ui/button"
import { toast } from "sonner"

export default function ToastButton() {
  return (
    <Button
      onClick={() => {
        toast.success("Success", {
          description: "Your action was completed successfully",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
