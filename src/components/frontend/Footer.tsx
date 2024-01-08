import Link from "next/link"

const HOURS = [
    ["Monday", "6:45AM - 4:30PM"],
    ["Tuesday", "6:45AM - 4:30PM"],
    ["Wednesday", "6:45AM - 4:30PM"],
    ["Thursday", "6:45AM - 4:30PM"],
    ["Friday", "6:45AM - 4:30PM"],
    ["Saturday", "7:30AM - 3:30PM"],
    ["Sunday", "8:00AM - 3:30PM"],
]

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-[#14110C]">
            <div className="grid gap-5 md:grid-cols-4 md:space-y-0 space-y-8 p-12 text-white">
                <div className="space-y-4 w-64">
                    <p className="text-lg font-bold pb-4">OPENING HOURS</p>
                    {HOURS.map((hour, index) => (
                        <div key={index} className="flex w-full justify-between">
                            <p className="uppercase font-semibold">{hour[0]}</p>
                            <div className="border-b mx-1.5 border-[#756769] flex-grow"></div>
                            <p className="font-semibold">{hour[1]}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p id='contact' className="text-lg font-bold pb-8">CONTACT US</p>
                    <div className="space-y-1">
                        <p className="text-[#C7A17A]">gogoacafe@gmail.com</p>
                        <p>+09 445 4173</p>
                        <p>3/18 Clarence Street, Devonport, Auckland, New Zealand</p>
                    </div>
                </div>
                <div>
                    <p id='contact' className="text-lg font-bold pb-8">NAVIGATION</p>
                    <div className="space-y-1">
                        <Link href=""><p className="font-bold hover:text-[#C7A17A]">HOME</p></Link>
                        <Link href=""><p>MENU</p></Link>
                        <Link href=""><p>CATERING</p></Link>
                        <Link href=""><p>ONLINE STORE</p></Link>
                        <Link href=""><p>CONTACT US</p></Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#000] w-full justify-center flex">
                <div className="w-4/5 justify-between flex p-4 text-center items-center text-white">
                    <div className="font-normal text-md">© Go Goa Eatery</div>
                    <div className="space-x-2">
                        <a href="https://www.facebook.com/gogoaeatery/" title="Facebook" target="blank"><i className="la la-lg la-facebook-official" /></a>
                        <a href="https://www.facebook.com/gogoaeatery/" title="Instagram" target="blank"><i className="la la-lg la-instagram" /></a>
                    </div>
                    <div className="font-normal text-md">All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer