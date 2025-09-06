type TitleProps = { children: string; subtitle: string; description: string };

const Title = ({ children, subtitle, description }: TitleProps) => {
    return (
        <div className="">
            <p className="text-primary-red font-rubik mb-2 text-base font-medium uppercase">
                {subtitle}
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{children}</h1>

            <p className="font-rubik text-secondary-gray mt-4 text-base">{description}</p>
        </div>
    );
};

export default Title;
