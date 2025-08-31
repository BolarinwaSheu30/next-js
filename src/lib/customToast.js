import { useCallback } from "react"
import { toast as sonnerToast } from "sonner"

export function useToast() {
  const toast = useCallback(({ title, description }) => {
    sonnerToast.success({
      title,
      description,
    })
  }, [])

  return { toast }
}