import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Typography, Button } from "@pankod/refine-mui";
import { logo } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <Typography
            sx={{ fontSize: "0.8vmin", color: "#000", fontWeight: "bold" }}
          >
            MyHealth
          </Typography>
        ) : (
          <Typography
            sx={{ fontSize: "2vmin", color: "#000", fontWeight: "bold" }}
          >
            MyHealth
          </Typography>
        )}
      </Link>
    </Button>
  );
};
