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
      className={`group h-10 w-10 rounded-full border-none text-white ring-[2px] ring-white duration-300 hover:bg-white hover:text-black ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SliderButton;
