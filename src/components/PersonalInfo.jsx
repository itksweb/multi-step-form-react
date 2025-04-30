import { useState } from "react";

const formin = [
  ["Name", "e.g. Stephen King", "text", "name"],
  ["Email Address", "e.g. stephenking@lorem.com", "email", "email"],
  ["Phone", "e.g. +1 234 567 890", "number", "phone"],
];

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PersonalInfo = ({ userInfo, setUserInfo, nextStep }) => {
  const onInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prev) => {
      return { ...prev, [id]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.name.trim() &&
      userInfo.phone &&
      emailRegex.test(userInfo.email)
    ) {
      nextStep();
    }
  };

  return (
    <div>
      <h1 className="text-[var(--Blue-950)] text-2xl font-bold">
        Personal info
      </h1>
      <p className="">
        Please provide your name, email address, and phone number.
      </p>

      <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
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
              value={userInfo.name}
              onChange={onInputChange}
            />
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
                userInfo.email && !emailRegex.test(userInfo.email)
                  ? "border-[var(--Red-500)]"
                  : "border-gray-300"
              } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="e.g. stephenking@lorem.com"
              required
              value={userInfo.email}
              onChange={onInputChange}
            />
            {userInfo.email && !emailRegex.test(userInfo.email) && (
              <p class="mt-2 text-sm text-[var(--Red-500)] ">
                <span class="font-medium">Oops!</span> INCORECT EMAIL
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
              value={userInfo.phone}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className=" flex justify-end">
          <button className="btn" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
