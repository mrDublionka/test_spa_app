import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import st from "@/styles/Form.module.scss";
import { strings } from "@/utils/constants.tsx";
import Button from "@/components/ui/Button.tsx";
import clsx from "clsx";

// ✅ Define validation schema
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    tel: yup.string().matches(/^\+?\d{7,15}$/, "Invalid phone number").required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message cannot be empty"),
});

const FeedbackForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    return (
        <form className={st.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={clsx(st.form__item, errors.name && st.err)}>
                <label htmlFor="name">{strings.name}</label>
                <input autoComplete="name" {...register("name")} />
                {errors.name && <p className={st.error}>{errors.name.message}</p>}
            </div>

            <div className={clsx(st.form__item, errors.tel && st.err)}>
                <label htmlFor="tel">{strings.phone_number}</label>
                <input autoComplete="tel" {...register("tel")} />
                {errors.tel && <p className={st.error}>{errors.tel.message}</p>}
            </div>

            <div className={clsx(st.form__item, errors.email && st.err)}>
                <label htmlFor="email">{strings.email}</label>
                <input autoComplete="email" type="email" {...register("email")} />
                {errors.email && <p className={st.error}>{errors.email.message}</p>}
            </div>

            <div className={clsx(st.form__item, errors.message && st.err)}>
                <label htmlFor="message">{strings.message}</label>
                <textarea
                    rows={1}
                    {...register("message")}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = `${target.scrollHeight}px`;
                    }}
                />
                {errors.message && <p className={st.error}>{errors.message.message}</p>}
            </div>

            <Button variant="primary" type="submit" disabled={!isValid}>
                {strings.submit}
            </Button>
        </form>
    );
};

export default FeedbackForm;
