import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-[#1F1F1F]">
            <div className="mx-auto max-w-screen-2xl w-full grid gap-5 grid-cols-4 p-12 text-white">
                <div className="space-y-4 text-center font-thin">
                    <p className="text-lg font-bold pb-4">WELCOME TO GO GOA EATERY</p>
                    <p>Go Goa Eatery opened its doors in 2019, introducing a unique blend of authentic Goan and European cuisine to the heart of Devonport.</p>
                    <p>Nestled in a charming off-street location, the café is known for its cozy atmosphere and husband-and-wife team.</p>
                </div>
                <div className="space-y-4 text-center items-center">
                    <div>
                        <p className="text-lg font-bold pb-4">VISIT</p>
                        <a className="flex items-center justify-center hover:text-[#C7A17A]" rel="noopener" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                            <span className="material-symbols-filled pr-2">
                                location_on
                            </span>
                            <p className="font-thin">3/18 Clarence St, Devonport, Auckland</p>
                        </a>
                    </div>
                    <div>
                        <p className="text-lg font-bold pb-4">TALK</p>
                        <a className="flex items-center justify-center hover:text-[#C7A17A]" rel="noopener" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                            <span className="material-symbols-filled pr-2">
                                phone_iphone
                            </span>
                            <p className="font-thin">09 445 4173</p>
                        </a>
                    </div>
                    <div>
                        <p className="text-lg font-bold pb-4">WRITE</p>
                        <a className="flex items-center justify-center hover:text-[#C7A17A]" rel="noopener" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                            <span className="material-symbols-filled pr-2">
                                mail
                            </span>
                            <p className="font-thin">eat@gogoaeatery.co.nz</p>
                        </a>
                    </div>
                </div>
                <div className="space-y-4 text-center items-center">
                    <p className="text-lg font-bold pb-4">HOURS</p>
                    <div className="font-thin">
                        <p>MONDAY thru FRIDAY</p>
                        <p>6:45AM - 4:30PM</p>
                    </div>
                    <div className="font-thin">
                        <p>SATURDAY/SUNDAY</p>
                        <p>8AM - 3:30PM</p>
                    </div>
                </div>
                <div className="space-y-4 text-center items-center">
                    <div>
                        <p className="text-lg font-bold pb-4">NAVIGATION</p>
                        <div className="block font-thin">
                            <Link href="/" target="_blank" className="block hover:text-[#C7A17A]">Home</Link>
                            <Link href="/menu" target="_blank" className="block hover:text-[#C7A17A]">Menu</Link>
                            <Link href="/store" target="_blank" className="block hover:text-[#C7A17A]">Store</Link>
                            <Link href="/contact" target="_blank" className="block hover:text-[#C7A17A]">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-bold pb-4">FOLLOW ALONG</p>
                        <div className="flex justify-center space-x-4 text-lg">
                            <Link href="https://www.facebook.com/gogoaeatery/" className="hover:text-[#C7A17A] hidden xl:block"><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link href="https://www.instagram.com/gogoaeatery/" className="hover:text-[#C7A17A] hidden xl:block"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#171717] w-full">
                <div className="mx-auto w-4/5 grid-cols-4 justify-between items-center flex p-4 text-white">
                    <div className="font-thin text-xs tracking-wider w-full">© 2024 GO GOA EATERY. ALL RIGHTS RESERVED</div>
                    <p className="text-md font-medium tracking-widest w-full flex justify-center">GO GOA EATERY</p>
                    <a className="font-thin text-xs tracking-wider hover:text-[#C7A17A] w-full flex justify-end" rel="noopener" href="https://github.com/BlakeFernandes/gogoaeatery-website/" target="_blank">{process.env.VERCEL_GIT_COMMIT_SHA?.substring(0, 7) ?? "development"}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer