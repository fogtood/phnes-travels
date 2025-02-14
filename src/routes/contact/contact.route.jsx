import { useState } from "react";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import Button from "../../components/button/button.component";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6mrwute",
        "template_xw3zurb",
        formData,
        "J1F-DIZyCM4WdtZdE",
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
          user_phoneNumber: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="container mx-auto px-6">
      <section className="flex min-h-[calc(100vh-76px)] flex-col justify-center">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xl font-semibold text-black">Get Started</p>
            <h1 className="text-4xl leading-tight font-bold text-black sm:text-6xl">
              Get in touch with us.
              <br />
              We're here to assist you.
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 md:flex-col md:gap-6">
            {[
              <Facebook size={22} />,
              <Instagram size={22} />,
              <Twitter size={22} />,
              <Mail size={22} />,
            ].map((socialIcon, idx) => (
              <button
                key={idx}
                className="cursor-pointer rounded-full border border-gray-300 p-4 transition-all duration-300 hover:scale-110 hover:bg-gray-300 hover:shadow-lg active:scale-95"
              >
                {socialIcon}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-[60vh] pb-20">
        <form className="space-y-16" onSubmit={handleFormSubmit}>
          <div className="grid gap-10 md:grid-cols-3">
            <Input
              label={"Your Name"}
              name="user_name"
              value={formData.user_name}
              required
              onChange={handleInputChange}
            />
            <Input
              label={"Email Address"}
              type="email"
              name="user_email"
              value={formData.user_email}
              required
              onChange={handleInputChange}
            />
            <Input
              label={"Phone Number(optional)"}
              type="number"
              name="user_phoneNumber"
              value={formData.user_phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <label className="flex flex-col items-start">
            Message
            <textarea
              className="mt-2 w-full border-b border-gray-200 outline-0"
              rows={3}
              name="message"
              value={formData.message}
              required
              onChange={handleInputChange}
            />
          </label>
          <div className="flex justify-end">
            <Button type="submit" buttonType={"primary"} disabled={loading}>
              {loading ? "Sending..." : "Leave a message for us"}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

const Input = ({ label, type = "text", ...otherProps }) => {
  return (
    <label className="flex flex-col items-start">
      {label}
      <input
        type={type}
        {...otherProps}
        className="w-full border-b border-gray-200 px-2 py-2 outline-0"
      />
    </label>
  );
};

export default Contact;
