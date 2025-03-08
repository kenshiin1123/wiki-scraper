import { useForm } from "react-hook-form";
import Form from "./Form";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";
import Label from "./Label";

export default function ScrapeBox({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Label />
        <Input
          {...register("scrapeKeyword", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Button />
      </Container>
    </Form>
  );
}
