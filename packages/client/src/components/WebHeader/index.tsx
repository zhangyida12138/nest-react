import { AppBar, Link as MuiLink, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

export const WebHeader: FC = () => {
    return (
        <AppBar
            position="static"
            color="transparent"
            sx={{
                borderBottom: "1px solid rgba(0, 243, 255, 0.2)",
                backdropFilter: "blur(5px)",
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontFamily: "monospace",
                        letterSpacing: ".2rem",
                        color: "primary.main",
                    }}
                >
                    IKE
                </Typography>

                <MuiLink
                    component={RouterLink}
                    to="/"
                    color="inherit"
                    underline="none"
                    sx={{ mx: 2, "&:hover": { color: "primary.main" } }}
                >
                    HOME
                </MuiLink>

                <MuiLink
                    component={RouterLink}
                    to="/blog"
                    color="inherit"
                    underline="none"
                    sx={{ mx: 2, "&:hover": { color: "primary.main" } }}
                >
                    BLOG
                </MuiLink>

                <MuiLink
                    component={RouterLink}
                    to="/about"
                    color="inherit"
                    underline="none"
                    sx={{ mx: 2, "&:hover": { color: "primary.main" } }}
                >
                    ABOUT
                </MuiLink>

                <MuiLink
                    href="https://github.com/zhangyida12138"
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                    underline="none"
                    sx={{ mx: 2, "&:hover": { color: "primary.main" } }}
                >
                    GITHUB
                </MuiLink>
            </Toolbar>
        </AppBar>
    );
};
