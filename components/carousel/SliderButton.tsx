import { Button } from "../ui/button";

type SliderButtonProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
  handleClick: () => void;
  className?: string;
};

const SliderButton = ({
  children,
  handleClick,
  className,
  ...props
}: SliderButtonProps) => {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className={`group h-8 w-8 rounded-full border-none text-white ring-[2px] ring-white duration-300 hover:bg-white/10 hover:text-white lg:h-10 lg:w-10 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SliderButton;
