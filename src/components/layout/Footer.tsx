import Image from "next/image";
import Link from "next/link";
import { InputGroupButtonExample } from "../common/InputGroup";
import { footerLinks, footerMobileLink, footerSocial } from "@/data/footerData";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-top"
      style={{
        backgroundImage: "url('/images/kids-photography 1.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="flex flex-col items-start">
            {/* logo */}
            <Link href={"/"}>
              <Image
                src={"/icons/logowhite.svg"}
                width={70}
                height={70}
                alt="logo"
                loading="lazy"
              />
            </Link>
            <p className="text-white mt-5">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
              in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
              quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          <div className="hidden md:flex items-start justify-between">
            {footerLinks.length > 0 &&
              footerLinks.map((col) => (
                <div className="flex flex-col items-start" key={col.id}>
                  <h4 className="text-white font-bold text-xl">{col.title}</h4>
                  <ul className="flex flex-col items-start gap-2 mt-5">
                    {col.links.map((link, id) => (
                      <li key={id}>
                        <Link
                          href={"/"}
                          className="capitalize text-white text-md hover:underline"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="flex md:hidden flex-col items-start">
            <ul className="flex items-start gap-5">
              <div className="space-y-3">
                <h4 className="text-white font-bold text-xl">Contact Us</h4>
                {footerMobileLink.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="capitalize text-white text-md hover:underline flex items-center gap-4"
                    >
                      <Image
                        src={link.icon}
                        width={20}
                        height={20}
                        alt={link.title}
                        loading="lazy"
                      />
                      <span className="text-white">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </div>

              <div
                className="flex flex-col items-start"
                key={footerLinks[0].id}
              >
                <h4 className="text-white font-bold text-xl">
                  {footerLinks[0].title}
                </h4>
                <ul className="flex flex-col items-start gap-2 mt-5">
                  {footerLinks[0].links.map((link, id) => (
                    <li key={id}>
                      <Link
                        href={"/"}
                        className="capitalize text-white text-md hover:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h4 className="text-white font-bold text-xl">Send Email</h4>
            <InputGroupButtonExample />

            <div className="flex flex-col items-start gap-2">
              <h5 className="text-white font-bold text-lg">Follow Us</h5>
              <div className="flex items-center gap-3">
                {footerSocial.length > 0 &&
                  footerSocial.map((social) => (
                    <Link key={social.id} href={"/"} target="_blank">
                      <Image
                        src={social.img}
                        width={25}
                        height={25}
                        alt={social.alt}
                        loading="lazy"
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
