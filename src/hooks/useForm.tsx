function useForm(){
    const {formData, handleChange} = useForm()

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        console.log("Vc submeteu o func.");
        console.log(formData);
    }

    function handleChangeForm(event: ChangeEvent<HTMLInputElement>){
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    return { formData, handleChangeForm, handleSubmit}
}