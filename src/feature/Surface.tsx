import { Box, createPolymorphicComponent } from "@mantine/core";
import type { BoxProps, PaperProps } from "@mantine/core";
import { forwardRef } from "react";
import type { ReactNode } from "react";

type SurfaceProps = { children: ReactNode } & BoxProps & PaperProps;

const Surface = createPolymorphicComponent<"div", SurfaceProps>(
    forwardRef<HTMLDivElement, SurfaceProps>(({ children, ...others }, ref) => (
        <Box component="div" {...others} ref={ref}>
            {children}
        </Box>
    ))
);

export default Surface;
