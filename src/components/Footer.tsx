const productLinks = ["Home", "Technologies", "Projects"];
const companyLinks = ["About", "Contact", "Careers"];
const legalLinks = ["Privacy Policy", "Terms of Service"];

const FooterLinkGroup = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
      {title}
    </h4>
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterBrand = () => (
  <div className="lg:col-span-1">
    <a href="#" className="flex items-center gap-2">
      <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
        DS
      </div>
      <span className="text-lg font-bold">
        <span className="text-slate-900">Dev</span>{" "}
        <span className="brand-gradient">Stack</span>
      </span>
    </a>

    <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
      Curated tools, technologies, and resources for developers building
      modern software.
    </p>

    <div className="mt-5 flex items-center gap-4">
      <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
        GitHub
      </a>
      <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
        Twitter
      </a>
      <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
        LinkedIn
      </a>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />
          <FooterLinkGroup title="Product" links={productLinks} />
          <FooterLinkGroup title="Company" links={companyLinks} />
          <FooterLinkGroup title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;