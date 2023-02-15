import { useState, useEffect } from "react"

/**
 * function that takes callback function and validate function
 * @param {function} callback
 * @param {function} validate
 * @returns object containing handleChange function, handleSubmit function,values and errors objects
 */
const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  //Todo: add backend logic to validate login
  const handleSubmit = event => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = event => {
    event.preventDefault()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
