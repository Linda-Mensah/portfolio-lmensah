import { contact } from "../constants/contact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-32"
    >
      <div className="bg-[#D1EBE3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 text-center text-[#121816]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-4">
          Let's build something solid.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#2A453D] max-w-2xl mx-auto mb-6 sm:mb-8">
          I'm currently open to new opportunities in frontend development. Got
          any project idea?
        </p>
        <a
          href="mailto:lindaakmensah@gmail.com"
          className="inline-block bg-[#121816] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg no-underline font-semibold text-sm sm:text-base hover:bg-black transition-colors duration-300"
        >
          Get in Touch
        </a>

        <div className="mt-8 sm:mt-10 md:mt-12 flex gap-4 sm:gap-6 justify-center opacity-60">
          {contact.map((platform) => (
            <a
              key={platform.title}
              href={platform.link}
              className="text-inherit no-underline font-medium text-sm sm:text-base hover:opacity-80 transition-opacity duration-300"
            >
              {platform.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
