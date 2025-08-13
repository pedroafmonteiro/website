import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import TextInput from "../components/Inputs/TextInput";
import TextArea from "../components/Inputs/TextArea";
import Button from "../components/Inputs/Button";

const Contact = () => {
  const [entered, setEntered] = useState(false);
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setEntered(false);
    const timeout = setTimeout(() => setEntered(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/99edb86320256d395a36e0be4aef6aac`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        setIsSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
        form.reset();
      } else {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 5000);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      console.error("Error submitting form:", error);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
      setIsLoading(false);
    }
  };

  return (
    <>
      <main
        className={[
          "flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-2 items-center justify-center min-h-screen w-full transition-all duration-400",
          entered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-5 pointer-events-none",
        ].join(" ")}
      >
        <div className="md:w-lg px-4 mx-auto flex flex-col gap-4">
          <h1 className="text-neutral-200 text-4xl select-none">Contact me</h1>
          <p className="text-neutral-400 text-base">
            If you have any questions, want to collaborate, or just say hi, feel
            free to reach out!
          </p>
        </div>
        <div className="w-full md:w-3xl px-4 mx-auto flex flex-col gap-4">
          <form className="flex flex-col items-end" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <TextInput
              type="text"
              label="Name"
              id="name"
              name="name"
              required
            />
            <TextInput
              type="email"
              label="Email"
              id="email"
              name="email"
              required
            />
            <TextInput
              type="text"
              label="Subject"
              id="subject"
              name="subject"
              required
            />
            <TextArea label="Message" id="message" name="message" required />
            <div className="flex w-full md:w-[150px]">
              <Button
                type="submit"
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
