import styles from "./iconLinkButton.module.scss";

import React from "react";

type IconLinkBtnVariant = "github" | "email" | "linkedin";

const IconLinkBtnVariantClassMap: Record<IconLinkBtnVariant, string> = {
    github: styles.variantGithub,
    email: styles.variantEmail,
    linkedin: styles.variantLinkedin,
};

interface IconLinkBtnProps {
    href: string;
    label: string;
    icon: React.ReactNode;
    variant: IconLinkBtnVariant;
    external?: boolean;
}

const IconLinkButton: React.FC<IconLinkBtnProps> = ({
                                                        href,
                                                        label,
                                                        icon,
                                                        variant = "email",
                                                        external = false,
                                                    }) => {

    const classes = [
        styles.contactBtn,
        IconLinkBtnVariantClassMap[variant]
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a
            href={href}
            className={classes}
            {...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
        >
            {icon}
            {label}
        </a>
    );
};

export default IconLinkButton;
