import { useForm } from "react-hook-form";
import { Input, InputField, Label, Required } from './form';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField>
                    <Label>Name</Label>
                    <Input {...register("name", { required: true })}>
                    </Input>
                </InputField>
                <Required>
                    {errors.name?.type === 'required' && "This field is required"}
                </Required>
                <InputField>
                    <Label>Password</Label>
                    <Input {...register("password", { required: true })}>
                    </Input>
                    <Required>
                        {errors.password?.type === 'required' && "This field is required"}
                    </Required>
                </InputField>

                <input type="submit" />
            </form>
        </>
    )
}
export default Register;