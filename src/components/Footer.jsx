import email from "/src/img/email.svg";
import phone from "/src/img/phone.svg";
import linkedinlogo from "/src/img/linkedin.svg";
const Footer = () => {
  return (
    <footer className="bg-[#ffdee3] rounded-tl-3xl rounded-tr-3xl p-10 flex flex-col space-y-4 px-24 test-base">
      <div>
        Feel free to reach out to me if you're looking for a developer, have a
        query, or simply want to connect.
      </div>
      <div>
        <div className="flex flex-row items-center space-x-3">
          <img src={email} />
          <p>erw96@cornell.edu</p>
        </div>

        <div className="flex flex-row items-center space-x-3">
          <img src={linkedinlogo} />
          <p>www.linkedin.com/in/elizabethwoo5</p>
        </div>
      </div>
      <div>
        <p className="flex justify-center text-sm">
          &copy; 2024 Elizabeth Woo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
