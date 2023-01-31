import React from "react";

import "./style.scss";

import dotenv from "dotenv";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// dotenv.config();

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleOnSubmit = (data) => {
        send(
            import.meta?.env?.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta?.env?.VITE_APP_EMAILJS_TEMPLATE_ID,
            data,
            import.meta?.env?.VITE_APP_EMAILJS_API_PUBLIC_KEY
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formSuccess();
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const formSuccess = () => {
        toast("Thanks for submitting your query");
        document.getElementById("queryForm").reset();
    };

    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="queryForm"
                onSubmit={handleSubmit(handleOnSubmit)}
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        //Validation check
                        {...register("from_name", {
                            required: "Name is required",
                        })}
                    />
                    {errors?.from_name?.message && (
                        <p className="errors">{errors?.from_name?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="Email"
                        {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors?.reply_to?.message && (
                        <p className="errors">{errors?.reply_to?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone"
                        {...register("phone_number", {
                            required: "Phone number is required",
                            minLength: {
                                value: 8,
                                message: "Phone number not valid",
                            },
                        })}
                    />
                    {errors?.phone_number?.message && (
                        <p className="errors">
                            {errors?.phone_number?.message}
                        </p>
                    )}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Subject is required",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 character required",
                            },
                        })}
                    />
                    {errors?.subject?.message && (
                        <p className="errors">{errors?.subject?.message}</p>
                    )}
                </div>
                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 characters",
                            },
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters",
                            },
                        })}
                    />
                    {errors?.message?.message && (
                        <p className="errors">{errors?.message?.message}</p>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
