"use client";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {ThemeProvider} from "@/components/theme-provider";
import React from "react";

const queryClient = new QueryClient()

export const Provider = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <QueryClientProvider client={queryClient} >
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={true}
                storageKey="theme"
            >
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}