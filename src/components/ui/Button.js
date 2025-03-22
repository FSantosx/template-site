function Button({ children, className, variant = "primary", size = "md", ...props }) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
    
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        outline: "border-2 border-primary text-primary hover:bg-primary/10"
    };

    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`;

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
}

export default Button;
