function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 items-center  px-6 py-6 "
    >
      <h1 className="text-5xl sm:text-5xl text-[#0b161c] font-extrabold">
        About Me
      </h1>

      <div className="bg-black/20 p-6 sm:p-10 rounded-xl text-white max-w-3xl">
        <p className="text-base sm:text-xl ">
          Welcome to my portfolio! I am Aparna V V, a passionate front-end
          developer who loves turning ideas into beautiful and functional
          websites. I enjoy working with modern tools like React, Tailwind CSS,
          and JavaScript to create smooth, responsive, and user-friendly
          interfaces.
          <br /><br />
          As a fresher, I am eager to apply my skills to real-world projects and
          contribute to a team where I can learn, grow, and deliver meaningful
          results.
        </p>
      </div>
    </section>
  );
}

export default About;
