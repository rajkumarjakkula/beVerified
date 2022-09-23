import { useForm } from "react-hook-form";
import { Input, InputField, Label, Required, Container, Button, AddMore} from './form';
import { GrAdd } from "react-icons/gr";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        
        <Container>
            <div style={{width:'100%',display:'flex',
                justifyContent:'center',flexDirection:'column',
                alignItems:'center'}}>
            <div> 
            <div style={{width:'400px',textAlign:'right'}}>
                <GrAdd size={14}/>&nbsp;<AddMore>Add Multiple</AddMore></div>
            </div>
            <Input type="text" placeholder="Laptop serial number" {...register("LaptopSerialNumber", { required: true })}>
            </Input>
            </div>
           
            <Input type="text" placeholder="Ram serial number" {...register("RamSerialNumber", { required: true })}>
            </Input>
            <Input type="text" placeholder="GraphicCard serial number" {...register("RamSeriaGraphicCardSeriallNumber", { required: true })}>
            </Input>
            <Input type="text" placeholder="Process serial number" {...register("ProcessSerialNumber", { required: true })}>
            </Input>
            <Input type="text" placeholder="diskDrive serial number" {...register("diskDriveSerialNumber", { required: true })}>
            </Input>
            <Button type="submit" onClick={handleSubmit(onSubmit)}>Send</Button>
        </Container>
    )
}
export default AddProduct;