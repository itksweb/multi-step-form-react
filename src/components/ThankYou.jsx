import Try from "./Try";

const ThankYou = () => {
  return (
    <div className="-mt-18 sm:mt-0 bg-white rounded-xl py-8 w-full">
      <div className="p-8 gap-3 flex flex-col justify-center items-center">
        <img
          src="assets/images/icon-thank-you.svg"
          alt={`thank you icon`}
          className="size-9 sm:size-12 mb-2"
        />
        <h1 className="text-center font-bold text-3xl">Thank You!</h1>
        <p className="text-center text-[var(--Grey-500)]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
        <Try />
      </div>
    </div>
  );
};

export default ThankYou;
