export const CopyToClipboard = ({ children, onCopy, text }) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        onCopy();
      }}
    >
      {children}
    </button>
  );
};
