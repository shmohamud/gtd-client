import React, {useState} from "react"

//Rewriting useForm hook in Typescript as practice. 
export function useForm (onSubmit: Function, validation: any, defaultValues: object) {
    const [values, setValues] = useState([])
    const [errs, setErrs] = useState([])

    const handleSubmit = (event:Object) => {
        onSubmit(values)
    }



}