const FormTitle = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) => {
  return <h1 className={`text-3xl text-center mb-5 ${style}`}>{children}</h1>;
};

export default FormTitle;
