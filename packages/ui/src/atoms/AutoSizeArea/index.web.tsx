import TextareaAutosize from "react-textarea-autosize";

export const AutoSizeArea = () => {
  const interBoldFont = "'InterBold', sans-serif";
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        color: "white",
      }}
    >
      <TextareaAutosize
        style={{
          fontFamily: interBoldFont,
          flex: 1,
          fontSize: "18px",
        }}
        placeholder="What is happening?"
      />
    </div>
  );
};
