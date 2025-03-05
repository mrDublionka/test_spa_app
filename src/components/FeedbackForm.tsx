import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import st from "@/styles/Form.module.scss";
import {bp, strings} from "@/utils/constants.tsx";
import Button from "@/components/ui/Button.tsx";
import clsx from "clsx";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    tel: z.string().min(1, "Phone is required"),
    email: z.string().min(1, "Email is required"),
    message: z.string().min(1, "Message cannot be empty"),
});

const FeedbackForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid, isSubmitted },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onSubmit",
    });

    const onSubmit = (data: any) => {
        if (!/^\+?[0-9]+$/.test(data.tel)) {
            setError("tel", { type: "manual", message: "Only numbers and '+' are allowed" });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            setError("email", { type: "manual", message: "Invalid email format" });
        }

        if (!errors.tel && !errors.email) {
            console.log("Form submitted:", data);
        }
    };

    return (
        <form className={st.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={clsx(st.form__item, errors.name && st.err)}>
                <label htmlFor="name">{strings.name}</label>
                <input autoComplete="name" {...register("name")} />
                {isSubmitted && errors.name && <p className={st.error}>{errors.name.message}</p>}
            </div>

            <div className={clsx(st.form__item, errors.tel && st.err)}>
                <label htmlFor="tel">{strings.phone_number}</label>
                <input
                    autoComplete="tel"
                    {...register("tel")}
                    maxLength={14}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.value = e.target.value.replace(/[^0-9+]/g, "").slice(0, 14);
                    }}
                />
                {isSubmitted && errors.tel && <p className={st.error}>{errors.tel.message}</p>}
            </div>

            <div className={clsx(st.form__item, errors.email && st.err)}>
                <label htmlFor="email">{strings.email}</label>
                <input autoComplete="email" type="text" {...register("email")} />
                {isSubmitted && errors.email && <p className={st.error}>{errors.email.message}</p>}
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
                {isSubmitted && errors.message && <p className={st.error}>{errors.message.message}</p>}
            </div>

            <Button
                className={st.submit}
                variant={window.innerWidth < bp.breakpoint3 ? "secondary" : "primary" }
                type="submit" disabled={!isValid}
            >
                {strings.submit}
            </Button>
        </form>
    );
};

export default FeedbackForm;
