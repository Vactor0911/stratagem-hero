type ArrowProps = {
  color: string;
  onClick?: () => void;
};

export const ArrowUp = ({ color, onClick }: ArrowProps) => {
  return (
    <svg
      width="current"
      height="current"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M256 50 L50 256 L181 256 L181 462 L331 462 L331 256 L462 256 Z"
        fill={color}
      />
    </svg>
  );
};

export const ArrowDown = ({ color, onClick }: ArrowProps) => {
  return (
    <svg
      width="current"
      height="current"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M256 50 L50 256 L181 256 L181 462 L331 462 L331 256 L462 256 Z"
        fill={color}
        transform="rotate(180) translate(-512 -512)"
      />
    </svg>
  );
};

export const ArrowLeft = ({ color, onClick }: ArrowProps) => {
  return (
    <svg
      width="current"
      height="current"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M256 50 L50 256 L181 256 L181 462 L331 462 L331 256 L462 256 Z"
        fill={color}
        transform="rotate(-90) translate(-512 0)"
      />
    </svg>
  );
};

export const ArrowRight = ({ color, onClick }: ArrowProps) => {
  return (
    <svg
      width="current"
      height="current"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M256 50 L50 256 L181 256 L181 462 L331 462 L331 256 L462 256 Z"
        fill={color}
        transform="rotate(90) translate(0 -512)"
      />
    </svg>
  );
};
