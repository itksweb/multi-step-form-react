const ContentHead = ({ title, descr }) => {
  return (
    <>
      <h1 className="text-[var(--Blue-950)] text-2xl font-bold mt-5  ">
        {title}
      </h1>
      <p className="mb-10 text-[var(--Grey-500)]">{descr}</p>
    </>
  );
};

export default ContentHead;
