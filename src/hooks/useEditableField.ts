import { useState, useCallback } from "react"

export function useEditableField<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)
  const [isEditing, setIsEditing] = useState(false)

  const onChange = useCallback((newValue: T) => {
    setValue(newValue)
  }, [])

  const onEdit = useCallback(() => {
    setIsEditing(true)
  }, [])

  const onSave = useCallback(() => {
    setIsEditing(false)
  }, [])

  return { value, isEditing, onChange, onEdit, onSave }
}

