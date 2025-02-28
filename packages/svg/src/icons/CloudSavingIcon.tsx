import { FC } from "react";
import { IconProps } from "./types";

export const CloudSavingIcon: FC<IconProps> = ({ width, height, ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.8 17.5"
            xmlSpace="preserve"
            enableBackground="new 0 0 19.8 17.5"
        >
            <path d="M17.9 7c-.2 0-.4-.1-.4-.3C16.4 2.4 12 0 7.8 1.1 5.1 1.9 3 4 2.2 6.7c0 .2-.3.3-.5.2-.2 0-.3-.2-.3-.5C2.7 1.8 7.6-1 12.2.3c3 .8 5.3 3.1 6.1 6.1.1.2-.1.5-.3.5 0 .1 0 .1-.1.1zM9.9 17.5c-3.9 0-7.4-2.6-8.5-6.4-.1-.2.1-.5.3-.5.2-.1.4.1.5.3 1.2 4.2 5.5 6.7 9.8 5.5 2.7-.7 4.8-2.8 5.5-5.5.1-.2.3-.3.5-.3.2.1.3.3.3.5-1 3.8-4.5 6.5-8.4 6.4z" />
            <path d="M17.9 7h-.2l-3-1.4c-.2-.1-.3-.4-.2-.6.1-.2.3-.3.5-.2L17.7 6 19 3.4c.1-.2.4-.3.6-.2.2.1.3.3.2.5l-1.4 3c-.2.2-.3.3-.5.3zM.4 14.4c-.2 0-.4-.1-.4-.4v-.2l1.4-3c.1-.2.3-.3.6-.2L5 12c.2.1.3.4.2.6-.1.2-.3.3-.5.2L2 11.6.8 14.2c-.1.1-.2.2-.4.2z" />
        </svg>
    )
}

export default CloudSavingIcon