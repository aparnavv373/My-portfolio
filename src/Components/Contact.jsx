import{ useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const form = useRef();
  const recaptchaRef = useRef(null);

  const [result, setResult] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !form.current.user_name.value ||
      !form.current.user_email.value ||
      !form.current.message.value
    ) {
      setResult("Please fill all fields.");
      return;
    }

    if (!captchaValue) {
      setResult("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);
    setResult("Sending...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setResult("Message sent successfully!");
      form.current.reset();

   
      recaptchaRef.current.reset();
      setCaptchaValue(null);

    
      setTimeout(() => setResult(""), 4000);
    } catch (error) {
      console.error(error);
      setResult("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className=" w-full flex items-center py-20 px-6 justify-center "
    >
      <div className="border p-10 bg-black/0 rounded-xl shadow-[#16222A] w-full sm:w-[60%]">
        <h2 className="text-center text-white font-bold text-5xl mb-6">
          Let's Connect
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 text-white"
        >
          <div className="flex flex-col gap-2">
            <label className="text-white/60">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="bg-black/20 rounded-sm p-2 focus:outline-none border border-[#16222A] focus:border-[#3A6073] transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/60">Your Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="bg-black/20 rounded-sm p-2 focus:outline-none border border-[#16222A] focus:border-[#3A6073] transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/60">Your Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              className="bg-black/20 rounded-sm p-2 focus:outline-none border border-[#16222A] h-32 resize-none focus:border-[#3A6073] transition duration-300"
            />
          </div>

          <div className="flex justify-center">
              <div className="scale-[0.75] sm:scale-100 origin-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(value) => setCaptchaValue(value)}
            />
              </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#3A6073] hover:bg-[#16222A] transition text-white font-semibold p-3 rounded-xl mt-4 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {result && <span className="text-white mt-3">{result}</span>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
