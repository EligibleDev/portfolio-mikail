const Intro = () => {
    return (
        <section className="relative container mx-auto mb-96 py-20 pb-96 text-center text-5xl leading-14 font-bold before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:h-full after:w-1/3 after:bg-gradient-to-l after:from-black after:to-transparent">
            <span className="text-primary-red">Web developer</span> with strong skills in
            JavaScript, <span className="text-primary-red">Next.js</span>, and Node.js.
            Constantly <span className="text-primary-red">learning</span> and pushing
            boundaries, Eager to contribute to{" "}
            <span className="text-primary-red">ambitious</span>
            projects, align with team goals, and consistently deliver
            <span className="text-primary-red">top-tier results</span>.
        </section>
    );
};

export default Intro;

// const Intro = () => {
//     return (
//         <section className="relative container mx-auto py-20 text-center text-5xl leading-[3.5rem] font-bold">
//             {/* Gradient overlays */}
//             <div className="pointer-events-none absolute inset-0">
//                 <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black via-transparent to-black opacity-60" />
//             </div>
//             {/* Text content */}
//             <span className="text-primary-red">Web developer</span> with strong skills in
//             JavaScript, <span className="text-primary-red">Next.js</span>, and Node.js.
//             Constantly <span className="text-primary-red">learning</span> and pushing
//             boundaries, Eager to contribute to{" "}
//             <span className="text-primary-red">ambitious</span> projects, align with team
//             goals, and consistently deliver{" "}
//             <span className="text-primary-red">top-tier results</span>.
//         </section>
//     );
// };

// export default Intro;
