import { useForm } from "react-hook-form";
import { Input, InputField, Label, Required, Container,Button } from './form';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            
                <Input type="text" placeholder="Company Name" {...register("name", { required: true })}>
                </Input>
                <Required>
                    {errors.name?.type === 'required' && "This field is required"}
                </Required>
                <Input type="text" placeholder="Company Domain" {...register("password", { required: true })}>
                </Input>
                <Required>
                    {errors.password?.type === 'required' && "This field is required"}
                </Required>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>Send</Button>
        </Container>
    )
}
export default Register;