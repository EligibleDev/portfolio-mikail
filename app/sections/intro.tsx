const Intro = () => {
    return (
        <section className="relative container mx-auto px-4 text-left text-2xl leading-normal font-bold before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:h-full after:w-0 after:bg-gradient-to-l after:from-black after:to-transparent sm:text-3xl lg:text-center lg:text-5xl lg:leading-14 lg:before:w-1/3 lg:after:w-1/3 xl:px-0">
            <span className="text-primary-red">Web developer</span> with strong skills in
            JavaScript, <span className="text-primary-red">Next.js</span>, and Node.js.
            Constantly <span className="text-primary-red">learning</span> and pushing
            boundaries, Eager to contribute to
            <span className="text-primary-red"> ambitious </span>
            projects, align with team goals, and consistently deliver
            <span className="text-primary-red"> top-tier results</span>.
        </section>
    );
};

export default Intro;
