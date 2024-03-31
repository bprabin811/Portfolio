import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

export const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => {
  return <Tooltip {...props} arrow classes={{ popper: className }}/>;
})(({ theme }) => {
  return {
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
      "&::before": {
        backgroundColor: theme.palette.common.black,
      },
      marginTop: 2.25,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      marginTop: -10,
    },
    letterSpacing: "0.5px",
  };
});

const ArrowTooltip = forwardRef(
  ({ title = "tooltip", placement = "bottom", children, ...rest }: any, ref) => {
    return (
      <BootstrapTooltip
        title={title}
        placement={placement}
        PopperProps={{ disablePortal: true }}
        {...{ rest }}
      >
        <div>{children}</div>
      </BootstrapTooltip>
    );
  },
);

export default ArrowTooltip;
