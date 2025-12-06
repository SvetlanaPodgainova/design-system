import { ChevronDown } from "../icons/ChevronDown";
import { ClearIcon } from "../icons/ClearIcon";
import { MoreDots } from "../icons/MoreDots/MoreDots";

type TIconButtonProps = {
  onClick?: () => void;
  ariaLabel: string;
  variant: "chevron" | "dots" | "clear";
  className?: string;
};

export const IconButton = ({
  ariaLabel,
  variant,
  className,
  ...rest
}: TIconButtonProps) => {
  const iconsLibrary = {
    chevron: ChevronDown,
    dots: MoreDots,
    clear: ClearIcon,
  };

  const Icon = iconsLibrary[variant];

  return (
    <button
      className={className}
      type="button"
      aria-label={ariaLabel}
      {...rest}
    >
      <Icon />
    </button>
  );
};
