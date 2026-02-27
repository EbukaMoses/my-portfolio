"use client";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { IoLogoMedium, IoLogoTiktok, IoMailUnreadOutline } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdEmail, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiBlueskyFill, RiSnapchatFill, RiTelegram2Fill } from "react-icons/ri";
import { SiFarcaster, SiWhatsapp } from "react-icons/si";

const Header = () => {
    const [showSocials, setShowSocials] = useState(false);
    return (
        <div className="flex flex-col items-center gap-10 rounded-xl border-[1px] border-[#001E28] p-10">

            <div className="flex items-center gap-10">
                <Image
                    className="rounded-full object-cover"
                    src="/EbukaMoses.jpg"
                    alt="Profile picture"
                    width={150}
                    height={100}
                // priority
                />

                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-[#C3C2C2]">Ebuka Moses<sup><VscVerifiedFilled className="text-[#A1A1A1] inline text-sm" /></sup></h1>
                    <p className="text-[#A1A1A1] mt-2 w-[80%]">Full-Stack Developer • Blockchain Engineer • WordPress Specialist • Graphic Designer | React • Next.js • Solidity • Cairo • Rust | Crafting Digital Experiences</p>

                    <div className="flex mt-6 w-[70%] justify-between">
                        <div className="flex gap-2">
                            <span className="text-sm font-semibold">
                                {/* <Link href="" target="_blank">
                      <IoMailUnreadOutline className="text-[#A1A1A1] inline" /> <span>Mail Me</span>
                    </Link> */}
                            </span>
                            <span className="text-sm font-semibold text-[#C3C2C2]">
                                <GrLocation className="inline" /> <span className="">Lagos, Nigeria.</span>
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <Link href="mailto:okoyemoses83@gmail.com" target="_blank" title="Email">
                                <MdEmail className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/ebuka-moses" target="_blank" title="LinkedIn">
                                <FaLinkedinIn className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://x.com/bukan_moses" target="_blank" title="Twitter">
                                <FaXTwitter className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://www.instagram.com/bukan_moses" target="_blank" title="Instagram">
                                <BsInstagram className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://www.tiktok.com/@ebukamoses" target="_blank" title="TikTok">
                                <IoLogoTiktok className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://www.snapchat.com/add/ebukamoses" target="_blank" title="Snapchat">
                                <RiSnapchatFill className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://bsky.app/profile/ebukamoses.bsky.social" target="_blank" title="Bluesky">
                                <RiBlueskyFill className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="" target="_blank" title="Farcaster">
                                <SiFarcaster className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://wa.me/2347038689968" target="_blank" title="WhatsApp">
                                <SiWhatsapp className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://t.me/ebukamoses" target="_blank" title="Telegram">
                                <RiTelegram2Fill className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://medium.com/@ebukamoses" target="_blank" title="Medium">
                                <IoLogoMedium className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                            <Link href="https://github.com/ebukamoses" target="_blank" title="GitHub">
                                <FiGithub className="text-[#A1A1A1] inline text-2xl" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <span className="bg-[#001E28] h-[0.8px] w-full" />

            <span className="flex items-center gap-1 text-[#a1a1a1] text-xs p-3 -my-5 hover:cursor-pointer hover:text-white hover:bg-[#232323] rounded-md" onClick={() => setShowSocials(!showSocials)}>{showSocials ? "Hide" : "Show"} Skills {showSocials ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            {showSocials && (
                <span className="flex flex-col gap-4">
                    <p>
                        I am a results-driven Full-Stack Blockchain Developer with over four years of experience building scalable web applications and decentralized solutions. I specialize in developing robust frontend interfaces, efficient backend architectures, and secure smart contracts that power modern blockchain-based platforms.
                    </p>

                    <p>
                        My technical expertise includes modern JavaScript frameworks, API architecture, database design, and blockchain development with Solidity and Ethereum-based protocols. I have successfully delivered production-ready applications, focusing on performance, security, and exceptional user experience.
                    </p>

                    <p>
                        I thrive in fast-paced, collaborative environments and enjoy working with cross-functional teams to translate complex ideas into practical, scalable solutions. With a strong commitment to clean code, best practices, and continuous improvement, I consistently deliver solutions that are reliable, maintainable, and future-proof.
                    </p>

                    <p>
                        As a developer passionate about innovation, I actively explore emerging technologies including Web3, smart contract security, and decentralized finance (DeFi), ensuring that the products I build remain competitive in a rapidly evolving industry.
                    </p>
                </span>
            )}
            <span className="bg-[#001E28] h-[0.8px] w-full" />


        </div>
    )
}

export default Header