export const LoadingButton = ({
  isLoading,
  onClick,
  disabled,
  children,
}: {
  isLoading: boolean;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) => (
  <button
    className={`btn btn-primary ${disabled ? "btn-disabled" : ""}`}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    {isLoading ? <span className="loading loading-spinner"></span> : children}
  </button>
);
