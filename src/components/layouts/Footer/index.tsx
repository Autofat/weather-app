import Image from "next/image";
import lightLogo from '../../../../public/logo-putih.svg';

const Footer = () => {
    return (
        <footer className="items-center p-4 bg-neutral justify-center flex-col text-neutral-content md:absolute md:bottom-0 md:left-0 md:w-full">
            <div className="flex-col justify-center items-center">
                <aside>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-center grid-flow-col gap-3">
                        <div className="mb-2 md:mb-0">
                            <Image src={lightLogo} width={30} height={30} alt={"Autofat"} />
                        </div>
                        <p>Copyright © 2024</p>
                    </div>
                </aside>
            </div>
        </footer>
    );
}

export default Footer;
