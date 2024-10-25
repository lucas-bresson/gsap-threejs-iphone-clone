import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{' '}
            <span className="underline text-blue cursor-pointer hover:text-blue-200"> Find an Apple Store </span>or{' '}
            <span className="underline text-blue cursor-pointer hover:text-blue-200">other retailer</span> near you.
          </p>
          <p className="font-semibold text-gray text-xs mt-0.5">Or call 000800-040-1966</p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright &#169; 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <>
                <div
                  key={link}
                  className="flex-center my-1 font-semibold text-gray text-xs cursor-pointer hover:text-gray-200"
                >
                  {link}
                </div>
                {i !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
