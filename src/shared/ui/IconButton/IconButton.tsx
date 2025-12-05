import { ChevronDown } from "../icons/ChevronDown";
import { MoreDots } from "../icons/MoreDots/MoreDots";

type TIconButtonProps = {
  onClick?: () => void;
  ariaLabel: string;
  variant: "chevron" | "dots";
};

export const IconButton = ({
  ariaLabel,
  variant,
  ...rest
}: TIconButtonProps) => {
  const Icon = variant === "chevron" ? ChevronDown : MoreDots;
  return (
    <button type="button" aria-label={ariaLabel} {...rest}>
      <Icon />
    </button>
  );
};
