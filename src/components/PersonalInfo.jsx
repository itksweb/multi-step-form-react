import { useEffect, useState } from "react";
import ContentHead from "./ContentHead";

const formin = [
  ["Name", "e.g. Stephen King", "text", "name"],
  ["Email Address", "e.g. stephenking@lorem.com", "email", "email"],
  ["Phone", "e.g. +1 234 567 890", "number", "phone"],
];

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PersonalInfo = ({ userInfo, setUserInfo, nextStep }) => {
  const [err, setErr] = useState({ name: false, email: false, phone: false });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (touched.name) {
      if (name.trim() && err.name) {
        setErr((prev) => {
          return { ...prev, name: false };
        });
      } else if (!name.trim() && !err.name) {
        setErr((prev) => {
          return { ...prev, name: true };
        });
      }
    }
  }, [name, touched]);

  useEffect(() => {
    if (touched.email) {
      if (emailRegex.test(email) && err.email) {
        setErr((prev) => {
          return { ...prev, email: false };
        });
      } else if (!emailRegex.test(email) && !err.email) {
        setErr((prev) => {
          return { ...prev, email: true };
        });
      }
    }
  }, [email, touched]);

  useEffect(() => {
    if (touched.phone) {
      if (phone.trim() && err.phone) {
        setErr((prev) => {
          return { ...prev, phone: false };
        });
      } else if (!phone.trim() && !err.phone) {
        setErr((prev) => {
          return { ...prev, phone: true };
        });
      }
    }
  }, [phone, touched]);
  useEffect(() => {
    if (name && phone && emailRegex.test(email)) {
      setUserInfo({ name, phone, email });
    }
  }, [name, email, phone]);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    if (!touched[id]) {
      setTouched((prev) => {
        return { ...prev, [id]: true };
      });
    }
    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="">
      <ContentHead
        title="Personal info"
        descr="Please provide your name, email address, and phone number."
      />
      <div className="fields">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-[var(--Blue-500)] "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="e.g. Stephen King"
            required
            value={name}
            onChange={onInputChange}
          />
          {err.name && (
            <p className="mt-2 text-sm text-[var(--Red-500)] ">
              <span className="font-medium">Oops!</span> ENTER YOUR NAME PLEASE
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-[var(--Blue-950)] "
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={`border ${
              email && !emailRegex.test(email)
                ? "border-[var(--Red-500)]"
                : "border-gray-300"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="e.g. stephenking@lorem.com"
            required
            value={email}
            onChange={onInputChange}
          />
          {err.email && (
            <p className="mt-2 text-sm text-[var(--Red-500)] ">
              <span className="font-medium">Oops!</span> INCORECT EMAIL
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm text-[var(--Blue-950)]  "
          >
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="e.g. +1 234 567 890"
            required
            value={phone}
            onChange={onInputChange}
          />
          {err.phone && (
            <p className="mt-2 text-sm text-[var(--Red-500)] ">
              <span className="font-medium">Oops!</span> ENTER YOUR PHONE NUMBER
              PLEASE
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
