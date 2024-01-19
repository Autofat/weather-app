import Image from "next/image";
import lightLogo from '../../../../public/logo-putih.svg';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral justify-center flex-col text-neutral-content fixed bottom-0 left-0 w-full">
            <div className="flex-col justify-center items-center">
                <aside>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-center grid-flow-col sm:gap-3">
                        <div className="mb-2 md:mb-0">
                            <Image src={lightLogo} width={30} height={30} alt={"Autofat"} />
                        </div>
                        <p className="mt-2 md:mt-0">Copyright © 2024</p>
                    </div>
                </aside>
            </div>
        </footer>
    );
}

export default Footer;
