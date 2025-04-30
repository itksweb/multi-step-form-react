const ContentHead = ({ title, descr }) => {
  return (
    <>
      <h1 className="text-[var(--Blue-950)] text-2xl font-bold">{title}</h1>
      <p className="mb-8">{descr}</p>
    </>
  );
};

export default ContentHead;
